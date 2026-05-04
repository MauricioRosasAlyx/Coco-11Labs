import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const aperturasPath = path.join(
  repoRoot,
  "src",
  "data",
  "aperturasKnowledgeBase.json",
);
const cierresPath = path.join(
  repoRoot,
  "src",
  "data",
  "cierresKnowledgeBase.json",
);
const sucursalesMapPath = path.join(
  repoRoot,
  "src",
  "data",
  "sucursalesMap.json",
);
const outputPath = path.join(
  repoRoot,
  "Base_Open_Close_Cruzada_ElevenLabs.md",
);

const OPEN_ON_TIME_THRESHOLD = "07:00:00";
const CLOSE_ON_TIME_THRESHOLD = "22:00:00";

const aperturasData = JSON.parse(fs.readFileSync(aperturasPath, "utf8"));
const cierresData = JSON.parse(fs.readFileSync(cierresPath, "utf8"));
const sucursalesMapData = JSON.parse(fs.readFileSync(sucursalesMapPath, "utf8"));

const mapEntries = sucursalesMapData.entries ?? [];
const mapByCanonicalKey = new Map(
  mapEntries.map((entry) => [entry.canonicalKey, entry]),
);

function normalizeKey(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
}

function buildCanonicalKey(storeCode, storeLabel) {
  return storeCode ? `code:${storeCode}` : `label:${normalizeKey(storeLabel)}`;
}

function resolveCanonicalStore(record) {
  const canonicalKey = buildCanonicalKey(record.storeCode, record.storeLabel);
  const entry = mapByCanonicalKey.get(canonicalKey);

  if (!entry) {
    return {
      canonicalKey,
      canonicalLabel: record.storeLabel,
      storeCode: record.storeCode ?? null,
    };
  }

  return {
    canonicalKey: entry.canonicalKey,
    canonicalLabel: entry.canonicalLabel,
    storeCode: entry.storeCode ?? record.storeCode ?? null,
  };
}

function isOpenOnTime(timeValue) {
  return Boolean(timeValue) && timeValue <= OPEN_ON_TIME_THRESHOLD;
}

function isCloseOnTime(timeValue) {
  return Boolean(timeValue) && timeValue >= CLOSE_ON_TIME_THRESHOLD;
}

function finalizeCombinedRecord(record) {
  const status =
    record.openingTime && record.closingTime
      ? "Completo"
      : record.openingTime
        ? "Sin cierre"
        : "Sin apertura";

  if (status === "Sin apertura") {
    return {
      ...record,
      status,
      complianceStatus: "Incompleto",
      notes: "No se encontro apertura valida para evaluar si abrio a tiempo.",
    };
  }

  if (status === "Sin cierre") {
    return {
      ...record,
      status,
      complianceStatus: "Incompleto",
      notes: "No se encontro cierre valido para evaluar si cerro a tiempo.",
    };
  }

  const opensOnTime = record.opensOnTime === true;
  const closesOnTime = record.closesOnTime === true;

  if (opensOnTime && closesOnTime) {
    return {
      ...record,
      status,
      complianceStatus: "Cumple open-close",
      notes: "Abrio y cerro dentro del horario esperado.",
    };
  }

  if (!opensOnTime && !closesOnTime) {
    return {
      ...record,
      status,
      complianceStatus: "No cumple ambos",
      notes: "Abrio despues de las 7:00 AM y cerro antes de las 10:00 PM.",
    };
  }

  if (!opensOnTime) {
    return {
      ...record,
      status,
      complianceStatus: "No cumple apertura",
      notes: "Abrio despues de las 7:00 AM.",
    };
  }

  return {
    ...record,
    status,
    complianceStatus: "No cumple cierre",
    notes: "Cerro antes de las 10:00 PM.",
  };
}

function buildCombinedRecords() {
  const combined = new Map();

  for (const apertura of aperturasData.records ?? []) {
    const canonical = resolveCanonicalStore({
      storeCode: apertura.storeCode ?? null,
      storeLabel: apertura.storeLabel,
    });
    const key = `${apertura.date}|${canonical.canonicalKey}`;
    const existing = combined.get(key);

    combined.set(key, {
      date: apertura.date,
      canonicalKey: canonical.canonicalKey,
      storeCode: canonical.storeCode,
      storeLabel: canonical.canonicalLabel,
      openingTime: apertura.openingTime,
      closingTime: existing?.closingTime ?? null,
      opensOnTime: isOpenOnTime(apertura.openingTime),
      closesOnTime: existing?.closesOnTime ?? null,
      openingRawEventCount: apertura.rawEventCount ?? 0,
      closingRawEventCount: existing?.closingRawEventCount ?? 0,
      openingDiscardedCount: apertura.discardedCount ?? 0,
      closingDiscardedCount: existing?.closingDiscardedCount ?? 0,
      openingSourceRowNumber: apertura.sourceRowNumber ?? null,
      closingSourceRowNumber: existing?.closingSourceRowNumber ?? null,
    });
  }

  for (const cierre of cierresData.records ?? []) {
    const canonical = resolveCanonicalStore({
      storeCode: cierre.storeCode ?? null,
      storeLabel: cierre.storeLabel,
    });
    const key = `${cierre.date}|${canonical.canonicalKey}`;
    const existing = combined.get(key);

    combined.set(key, {
      date: cierre.date,
      canonicalKey: canonical.canonicalKey,
      storeCode: canonical.storeCode,
      storeLabel: canonical.canonicalLabel,
      openingTime: existing?.openingTime ?? null,
      closingTime: cierre.closingTime,
      opensOnTime: existing?.opensOnTime ?? null,
      closesOnTime: isCloseOnTime(cierre.closingTime),
      openingRawEventCount: existing?.openingRawEventCount ?? 0,
      closingRawEventCount: cierre.rawEventCount ?? 0,
      openingDiscardedCount: existing?.openingDiscardedCount ?? 0,
      closingDiscardedCount: cierre.discardedCount ?? 0,
      openingSourceRowNumber: existing?.openingSourceRowNumber ?? null,
      closingSourceRowNumber: cierre.sourceRowNumber ?? null,
    });
  }

  return Array.from(combined.values())
    .map((record) => finalizeCombinedRecord(record))
    .sort((left, right) => {
      if (left.date !== right.date) {
        return left.date.localeCompare(right.date);
      }

      return left.storeLabel.localeCompare(right.storeLabel);
    });
}

function formatFlag(value) {
  if (value === true) {
    return "Si";
  }

  if (value === false) {
    return "No";
  }

  return "Sin dato";
}

function formatValue(value) {
  return value ?? "Sin dato";
}

function formatPercentage(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function buildTopMetrics(records, isCompliant, isEvaluated) {
  const grouped = new Map();

  for (const record of records) {
    const current = grouped.get(record.canonicalKey) ?? {
      canonicalKey: record.canonicalKey,
      storeLabel: record.storeLabel,
      evaluatedCount: 0,
      compliantCount: 0,
      complianceRate: 0,
      missingCount: 0,
    };

    if (isEvaluated(record)) {
      current.evaluatedCount += 1;

      if (isCompliant(record) === true) {
        current.compliantCount += 1;
      }
    } else {
      current.missingCount += 1;
    }

    grouped.set(record.canonicalKey, current);
  }

  return Array.from(grouped.values())
    .map((metric) => ({
      ...metric,
      complianceRate:
        metric.evaluatedCount > 0
          ? metric.compliantCount / metric.evaluatedCount
          : 0,
    }))
    .filter((metric) => metric.evaluatedCount > 0)
    .sort((left, right) => {
      if (right.complianceRate !== left.complianceRate) {
        return right.complianceRate - left.complianceRate;
      }

      if (right.compliantCount !== left.compliantCount) {
        return right.compliantCount - left.compliantCount;
      }

      if (right.evaluatedCount !== left.evaluatedCount) {
        return right.evaluatedCount - left.evaluatedCount;
      }

      return left.storeLabel.localeCompare(right.storeLabel);
    });
}

function appendRankingSection(lines, title, metrics) {
  lines.push(`## ${title}`, "", "```text");
  lines.push(
    "posicion | sucursal | cumplidos | evaluados | cumplimiento | faltantes",
  );

  if (metrics.length === 0) {
    lines.push("Sin datos");
  } else {
    metrics.forEach((metric, index) => {
      lines.push(
        [
          index + 1,
          metric.storeLabel,
          metric.compliantCount,
          metric.evaluatedCount,
          formatPercentage(metric.complianceRate),
          metric.missingCount,
        ].join(" | "),
      );
    });
  }

  lines.push("```", "");
}

const combinedRecords = buildCombinedRecords();
const completeRecords = combinedRecords.filter((record) => record.status === "Completo");
const missingOpeningRecords = combinedRecords.filter(
  (record) => record.status === "Sin apertura",
);
const missingClosingRecords = combinedRecords.filter(
  (record) => record.status === "Sin cierre",
);
const openingCompliantRecords = combinedRecords.filter(
  (record) => record.opensOnTime === true,
);
const closingCompliantRecords = combinedRecords.filter(
  (record) => record.closesOnTime === true,
);
const fullyCompliantRecords = combinedRecords.filter(
  (record) => record.complianceStatus === "Cumple open-close",
);
const openingTopMetrics = buildTopMetrics(
  combinedRecords,
  (record) => record.opensOnTime,
  (record) => record.openingTime !== null,
);
const closingTopMetrics = buildTopMetrics(
  combinedRecords,
  (record) => record.closesOnTime,
  (record) => record.closingTime !== null,
);
const generalTopMetrics = buildTopMetrics(
  combinedRecords,
  (record) => record.complianceStatus === "Cumple open-close",
  (record) => record.status === "Completo",
);
const topFiveOpening = openingTopMetrics.slice(0, 5);
const topFiveClosing = closingTopMetrics.slice(0, 5);
const topFiveGeneral = generalTopMetrics.slice(0, 5);
const bottomFiveOpening = [...openingTopMetrics]
  .reverse()
  .slice(0, 5)
  .sort((left, right) => {
    if (left.complianceRate !== right.complianceRate) {
      return left.complianceRate - right.complianceRate;
    }

    if (left.compliantCount !== right.compliantCount) {
      return left.compliantCount - right.compliantCount;
    }

    if (right.evaluatedCount !== left.evaluatedCount) {
      return right.evaluatedCount - left.evaluatedCount;
    }

    return left.storeLabel.localeCompare(right.storeLabel);
  });
const bottomFiveClosing = [...closingTopMetrics]
  .reverse()
  .slice(0, 5)
  .sort((left, right) => {
    if (left.complianceRate !== right.complianceRate) {
      return left.complianceRate - right.complianceRate;
    }

    if (left.compliantCount !== right.compliantCount) {
      return left.compliantCount - right.compliantCount;
    }

    if (right.evaluatedCount !== left.evaluatedCount) {
      return right.evaluatedCount - left.evaluatedCount;
    }

    return left.storeLabel.localeCompare(right.storeLabel);
  });
const bottomFiveGeneral = [...generalTopMetrics]
  .reverse()
  .slice(0, 5)
  .sort((left, right) => {
    if (left.complianceRate !== right.complianceRate) {
      return left.complianceRate - right.complianceRate;
    }

    if (left.compliantCount !== right.compliantCount) {
      return left.compliantCount - right.compliantCount;
    }

    if (right.evaluatedCount !== left.evaluatedCount) {
      return right.evaluatedCount - left.evaluatedCount;
    }

    return left.storeLabel.localeCompare(right.storeLabel);
  });

const lines = [
  "# Base open-close cruzada para ElevenLabs",
  "",
  "## Descripcion",
  "",
  "Este archivo contiene la informacion real ya cruzada por sucursal y fecha.",
  "Cada registro junta la apertura valida y el cierre valido del mismo dia para la misma sucursal canonica.",
  "",
  "## Cobertura",
  "",
  `- Periodo: ${aperturasData.meta.dateRange.start} a ${cierresData.meta.dateRange.end}`,
  `- Aperturas limpias fuente: ${aperturasData.meta.cleanOpenings}`,
  `- Cierres limpios fuente: ${cierresData.meta.cleanClosings}`,
  `- Sucursales canonicas: ${sucursalesMapData.meta.totalEntries}`,
  `- Registros cruzados totales: ${combinedRecords.length}`,
  `- Registros completos: ${completeRecords.length}`,
  `- Registros sin apertura: ${missingOpeningRecords.length}`,
  `- Registros sin cierre: ${missingClosingRecords.length}`,
  `- Cumplen apertura: ${openingCompliantRecords.length}`,
  `- Cumplen cierre: ${closingCompliantRecords.length}`,
  `- Cumplen open-close: ${fullyCompliantRecords.length}`,
  "",
  "## Reglas de cumplimiento",
  "",
  `- Cumple apertura: hora de apertura <= ${OPEN_ON_TIME_THRESHOLD}`,
  `- Cumple cierre: hora de cierre >= ${CLOSE_ON_TIME_THRESHOLD}`,
  "- Cumple open-close: cumple apertura y cumple cierre en la misma fecha",
  "",
  "## Campos",
  "",
  "- fecha",
  "- sucursal",
  "- codigo_sucursal",
  "- hora_apertura",
  "- cumplio_apertura",
  "- hora_cierre",
  "- cumplio_cierre",
  "- estado",
  "- cumplimiento",
  "- observaciones",
  "",
];

appendRankingSection(lines, "Top 5 cumplimiento apertura", topFiveOpening);
appendRankingSection(lines, "Top 5 cumplimiento cierre", topFiveClosing);
appendRankingSection(lines, "Top 5 cumplimiento general", topFiveGeneral);
appendRankingSection(lines, "Peores 5 cumplimiento apertura", bottomFiveOpening);
appendRankingSection(lines, "Peores 5 cumplimiento cierre", bottomFiveClosing);
appendRankingSection(lines, "Peores 5 cumplimiento general", bottomFiveGeneral);

lines.push(
  "## Registros open-close",
  "",
  "```text",
  "fecha | sucursal | codigo_sucursal | hora_apertura | cumplio_apertura | hora_cierre | cumplio_cierre | estado | cumplimiento | observaciones",
);

for (const record of combinedRecords) {
  lines.push(
    [
      record.date,
      record.storeLabel,
      formatValue(record.storeCode),
      formatValue(record.openingTime),
      formatFlag(record.opensOnTime),
      formatValue(record.closingTime),
      formatFlag(record.closesOnTime),
      record.status,
      record.complianceStatus,
      record.notes,
    ].join(" | "),
  );
}

lines.push("```", "");

fs.writeFileSync(outputPath, `${lines.join("\n")}\n`, "utf8");

console.log(
  JSON.stringify(
    {
      outputPath,
      totalRecords: combinedRecords.length,
      completeRecords: completeRecords.length,
      missingOpeningRecords: missingOpeningRecords.length,
      missingClosingRecords: missingClosingRecords.length,
      fullyCompliantRecords: fullyCompliantRecords.length,
    },
    null,
    2,
  ),
);
