import {
  findAperturas,
  getDiscardedEventsForRecords,
  type CleanAperturaRecord,
  type DiscardedAperturaEvent,
} from "./aperturasKnowledgeBase";
import {
  findCierres,
  getDiscardedCierreEventsForRecords,
  type CleanCierreRecord,
  type DiscardedCierreEvent,
} from "./cierresKnowledgeBase";
import {
  listSucursalMapEntries,
  matchesSucursalQuery,
  resolveCanonicalStore,
  type SucursalMapEntry,
} from "./sucursalesMap";

export type ReportWorkbookInput = {
  rango?: string | null;
  categoria?: string | null;
  sucursal?: string | null;
  fecha?: string | null;
  desde?: string | null;
  hasta?: string | null;
};

export type ReportWorkbookFile = {
  blob: Blob;
  filename: string;
  title: string;
  range: string;
  category: string;
  generatedAt: string;
};

type CellValue = string | number | null;

type Cell = {
  value: CellValue;
  style?: number;
};

type SheetRow = Array<CellValue | Cell>;

type DatasetKind = "open-close" | "aperturas" | "cierres" | "top";

type DateQuery = {
  range?: string | null;
  fromDate?: string | null;
  toDate?: string | null;
  storeQuery?: string | null;
};

type MappedAperturaRecord = CleanAperturaRecord & {
  canonicalKey: string;
  canonicalLabel: string;
};

type MappedCierreRecord = CleanCierreRecord & {
  canonicalKey: string;
  canonicalLabel: string;
};

type MappedDiscardedAperturaEvent = DiscardedAperturaEvent & {
  canonicalKey: string;
  canonicalLabel: string;
};

type MappedDiscardedCierreEvent = DiscardedCierreEvent & {
  canonicalKey: string;
  canonicalLabel: string;
};

type CombinedRecord = {
  date: string;
  canonicalKey: string;
  storeCode: string | null;
  storeLabel: string;
  openingTime: string | null;
  closingTime: string | null;
  opensOnTime: boolean | null;
  closesOnTime: boolean | null;
  openingRawEventCount: number;
  closingRawEventCount: number;
  openingDiscardedCount: number;
  closingDiscardedCount: number;
  openingSourceRowNumber: number | null;
  closingSourceRowNumber: number | null;
  status: string;
  complianceStatus: string;
  notes: string;
};

type TopStoreMetric = {
  canonicalKey: string;
  storeLabel: string;
  evaluatedCount: number;
  compliantCount: number;
  complianceRate: number;
  missingCount: number;
};

const MIME_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
const OPEN_ON_TIME_THRESHOLD = "07:00:00";
const CLOSE_ON_TIME_THRESHOLD = "22:00:00";
const DEFAULT_REPORT_YEAR = 2026;
const MONTHS: Record<string, number> = {
  enero: 0,
  febrero: 1,
  marzo: 2,
  abril: 3,
  mayo: 4,
  junio: 5,
  julio: 6,
  agosto: 7,
  septiembre: 8,
  setiembre: 8,
  octubre: 9,
  noviembre: 10,
  diciembre: 11,
};

export function createReportWorkbook(
  input: ReportWorkbookInput,
): ReportWorkbookFile {
  const generatedAt = new Date();
  const datasetKind = normalizeDatasetKind(input.categoria);

  if (datasetKind === "aperturas") {
    return createSingleDatasetWorkbook({
      input,
      generatedAt,
      datasetKind,
      reportTitle: "Reporte de aperturas",
      rangeLabel: getReportRangeLabel(input),
      sheetName: "Aperturas",
      sheetTitle: "Aperturas limpias",
      timeColumnLabel: "Hora de apertura",
      cleanCountLabel: "Aperturas limpias",
      cleanCountDescription: "Una apertura valida por sucursal y dia",
      baseName: "Aperturas Propasa limpias",
      cleaningRuleText: "Se conserva la primera activacion por sucursal y fecha.",
    });
  }

  if (datasetKind === "cierres") {
    return createSingleDatasetWorkbook({
      input,
      generatedAt,
      datasetKind,
      reportTitle: "Reporte de cierres",
      rangeLabel: getReportRangeLabel(input),
      sheetName: "Cierres",
      sheetTitle: "Cierres limpios",
      timeColumnLabel: "Hora de cierre",
      cleanCountLabel: "Cierres limpios",
      cleanCountDescription: "Un cierre valido por sucursal y dia",
      baseName: "Cierres Propasa limpios",
      cleaningRuleText: "Se conserva la ultima activacion por sucursal y fecha.",
    });
  }

  if (datasetKind === "top") {
    return createTopWorkbook(input, generatedAt);
  }

  return createOpenCloseWorkbook(input, generatedAt);
}

function createSingleDatasetWorkbook(args: {
  input: ReportWorkbookInput;
  generatedAt: Date;
  datasetKind: "aperturas" | "cierres";
  reportTitle: string;
  rangeLabel: string;
  sheetName: string;
  sheetTitle: string;
  timeColumnLabel: string;
  cleanCountLabel: string;
  cleanCountDescription: string;
  baseName: string;
  cleaningRuleText: string;
}) {
  const storeLabel = args.input.sucursal?.trim() || "Todas las sucursales";
  const title =
    storeLabel === "Todas las sucursales"
      ? args.reportTitle
      : `${args.reportTitle} - ${storeLabel}`;

  const aperturas =
    args.datasetKind === "aperturas" ? getFilteredAperturas(args.input) : [];
  const cierres =
    args.datasetKind === "cierres" ? getFilteredCierres(args.input) : [];
  const records =
    args.datasetKind === "aperturas"
      ? aperturas.map(
          (record) =>
            ({
              date: record.date,
              storeLabel: record.canonicalLabel,
              eventTime: record.openingTime,
              rawEventCount: record.rawEventCount,
              discardedCount: record.discardedCount,
              discardedTimes: record.discardedTimes,
              sourceRowNumber: record.sourceRowNumber,
              canonicalKey: record.canonicalKey,
            }) as const,
        )
      : cierres.map(
          (record) =>
            ({
              date: record.date,
              storeLabel: record.canonicalLabel,
              eventTime: record.closingTime,
              rawEventCount: record.rawEventCount,
              discardedCount: record.discardedCount,
              discardedTimes: record.discardedTimes,
              sourceRowNumber: record.sourceRowNumber,
              canonicalKey: record.canonicalKey,
            }) as const,
        );
  const discardedRows =
    args.datasetKind === "aperturas"
      ? getFilteredDiscardedAperturas(aperturas).map(
          (event) =>
            ({
              date: event.date,
              storeLabel: event.canonicalLabel,
              time: event.time,
              keptTime: event.keptOpeningTime,
              secondsFromKeptEvent: event.secondsFromKeptOpening,
              sourceRowNumber: event.sourceRowNumber,
            }) as const,
        )
      : getFilteredDiscardedCierres(cierres).map(
          (event) =>
            ({
              date: event.date,
              storeLabel: event.canonicalLabel,
              time: event.time,
              keptTime: event.keptClosingTime,
              secondsFromKeptEvent: event.secondsFromKeptClosing,
              sourceRowNumber: event.sourceRowNumber,
            }) as const,
        );
  const mappingEntries = getRelevantSucursalMapEntries(
    records.map((record) => record.canonicalKey),
    args.input.sucursal,
  );

  const files = buildWorkbookFiles([
    {
      name: "Resumen",
      rows: buildSingleDatasetSummaryRows({
        title,
        generatedAt: args.generatedAt,
        rangeLabel: args.rangeLabel,
        storeLabel,
        records,
        discardedRows,
        cleanCountLabel: args.cleanCountLabel,
        cleanCountDescription: args.cleanCountDescription,
        baseName: args.baseName,
        cleaningRuleText: args.cleaningRuleText,
        datasetKind: args.datasetKind,
      }),
      columns: [26, 24, 24, 38],
    },
    {
      name: args.sheetName,
      rows: buildSingleDatasetRows(records, args.sheetTitle, args.timeColumnLabel),
      columns: [16, 34, 18, 18, 18, 42, 18],
    },
    {
      name: "Duplicados",
      rows: buildSingleDatasetDiscardedRows(
        discardedRows,
        args.datasetKind === "aperturas"
          ? "Segundos vs apertura"
          : "Segundos vs cierre",
      ),
      columns: [16, 34, 18, 18, 20, 18, 34],
    },
    {
      name: "Mapeo sucursales",
      rows: buildSucursalMappingRows(mappingEntries),
      columns: [18, 38, 38, 38, 14, 14],
    },
  ]);

  return {
    blob: new Blob([createZip(files)], { type: MIME_TYPE }),
    filename: `${slugify(`reporte-${args.datasetKind}-${storeLabel}-${args.rangeLabel}`)}.xlsx`,
    title,
    range: args.rangeLabel,
    category: args.datasetKind,
    generatedAt: args.generatedAt.toLocaleString("es-MX"),
  };
}

function createOpenCloseWorkbook(input: ReportWorkbookInput, generatedAt: Date) {
  const rangeLabel = getReportRangeLabel(input);
  const storeLabel = input.sucursal?.trim() || "Todas las sucursales";
  const title =
    storeLabel === "Todas las sucursales"
      ? "Reporte Open-Close"
      : `Reporte Open-Close - ${storeLabel}`;
  const aperturas = getFilteredAperturas(input);
  const cierres = getFilteredCierres(input);
  const combinedRecords = buildCombinedRecords(aperturas, cierres);

  const files = buildWorkbookFiles([
    {
      name: "General",
      rows: buildOpenCloseSummaryRows({
        title,
        generatedAt,
        rangeLabel,
        storeLabel,
        combinedRecords,
      }),
      columns: [28, 24, 22, 34, 24],
    },
    {
      name: "open-close",
      rows: buildOpenCloseRows(combinedRecords),
      columns: [16, 34, 18, 16, 18, 16],
    },
  ]);

  return {
    blob: new Blob([createZip(files)], { type: MIME_TYPE }),
    filename: `${slugify(`reporte-open-close-${storeLabel}-${rangeLabel}`)}.xlsx`,
    title,
    range: rangeLabel,
    category: "open-close",
    generatedAt: generatedAt.toLocaleString("es-MX"),
  };
}

function createTopWorkbook(input: ReportWorkbookInput, generatedAt: Date) {
  const rangeLabel = getReportRangeLabel(input);
  const storeLabel = input.sucursal?.trim() || "Todas las sucursales";
  const title =
    storeLabel === "Todas las sucursales"
      ? "Reporte Top Cumplimiento"
      : `Reporte Top Cumplimiento - ${storeLabel}`;
  const aperturas = getFilteredAperturas(input);
  const cierres = getFilteredCierres(input);
  const combinedRecords = buildCombinedRecords(aperturas, cierres);
  const openingTop = buildTopMetrics(
    combinedRecords,
    (record) => record.opensOnTime,
    (record) => record.openingTime !== null,
  );
  const closingTop = buildTopMetrics(
    combinedRecords,
    (record) => record.closesOnTime,
    (record) => record.closingTime !== null,
  );
  const bothTop = buildTopMetrics(
    combinedRecords,
    (record) => isCompliantOpenClose(record),
    (record) => record.openingTime !== null && record.closingTime !== null,
  );

  const files = buildWorkbookFiles([
    {
      name: "General",
      rows: buildTopSummaryRows({
        title,
        generatedAt,
        rangeLabel,
        openingTop,
        closingTop,
        bothTop,
      }),
      columns: [28, 26, 22, 36],
    },
    {
      name: "Top Apertura",
      rows: buildTopMetricRows(
        "Top cumplimiento apertura",
        openingTop,
        "Cumplimiento apertura",
      ),
      columns: [10, 34, 18, 18, 18, 18],
    },
    {
      name: "Top Cierre",
      rows: buildTopMetricRows(
        "Top cumplimiento cierre",
        closingTop,
        "Cumplimiento cierre",
      ),
      columns: [10, 34, 18, 18, 18, 18],
    },
    {
      name: "Top Ambas",
      rows: buildTopMetricRows(
        "Top cumplimiento open-close",
        bothTop,
        "Cumplimiento open-close",
      ),
      columns: [10, 34, 18, 18, 18, 18],
    },
  ]);

  return {
    blob: new Blob([createZip(files)], { type: MIME_TYPE }),
    filename: `${slugify(`reporte-top-${storeLabel}-${rangeLabel}`)}.xlsx`,
    title,
    range: rangeLabel,
    category: "top",
    generatedAt: generatedAt.toLocaleString("es-MX"),
  };
}

function buildDateQuery(input: ReportWorkbookInput): DateQuery {
  return {
    range: input.rango ?? input.fecha ?? null,
    fromDate: input.desde ?? null,
    toDate: input.hasta ?? null,
    storeQuery: input.sucursal ?? null,
  };
}

function getReportRangeLabel(input: ReportWorkbookInput) {
  const window = resolveDateWindow(input);
  return `${formatDateLabel(window.startDate)} a ${formatDateLabel(window.endDate)}`;
}

function resolveDateWindow(input: ReportWorkbookInput) {
  const query = buildDateQuery(input);
  const explicitStart = parseSingleDate(query.fromDate ?? "");
  const explicitEnd = parseSingleDate(query.toDate ?? "");

  if (explicitStart || explicitEnd) {
    const startDate = explicitStart ?? explicitEnd ?? "2026-03-25";
    const endDate = explicitEnd ?? explicitStart ?? "2026-04-23";
    return orderDateWindow(startDate, endDate);
  }

  const parsedRangeDates = parseDates(query.range ?? "");

  if (parsedRangeDates.length >= 2) {
    return orderDateWindow(parsedRangeDates[0], parsedRangeDates[1]);
  }

  if (parsedRangeDates.length === 1) {
    return { startDate: parsedRangeDates[0], endDate: parsedRangeDates[0] };
  }

  return { startDate: "2026-03-25", endDate: "2026-04-23" };
}

function orderDateWindow(left: string, right: string) {
  return left <= right
    ? { startDate: left, endDate: right }
    : { startDate: right, endDate: left };
}

function isDateWithinWindow(value: string, window: { startDate: string; endDate: string }) {
  return value >= window.startDate && value <= window.endDate;
}

function parseDates(value: string) {
  const normalizedValue = normalizeKey(value).replace(/_/g, " ");
  const dates: string[] = [];

  collectNumericDates(value, dates);
  collectTextDateRanges(normalizedValue, dates);
  collectTextDates(normalizedValue, dates);

  return Array.from(new Set(dates)).sort();
}

function parseSingleDate(value: string) {
  const parsedDates = parseDates(value);
  return parsedDates.length > 0 ? parsedDates[0] : null;
}

function collectNumericDates(value: string, dates: string[]) {
  const matches =
    value.match(
      /\b(\d{4})[-/](\d{1,2})[-/](\d{1,2})\b|\b(\d{1,2})[-/](\d{1,2})[-/](\d{4})\b/g,
    ) ?? [];

  for (const match of matches) {
    const parts = match.split(/[-/]/).map(Number);
    const candidate =
      parts[0] > 999
        ? createIsoDate(parts[0], parts[1], parts[2])
        : createIsoDate(parts[2], parts[1], parts[0]);

    if (candidate) {
      dates.push(candidate);
    }
  }
}

function collectTextDateRanges(value: string, dates: string[]) {
  const rangeRegex =
    /\b(\d{1,2})(?:\s+de)?\s+([a-z]+)(?:\s+de)?(?:\s+(\d{4}))?\s+(?:a|al|hasta)\s+(\d{1,2})(?:\s+de)?\s+([a-z]+)?(?:\s+de)?\s+(\d{4})?\b/g;
  const shortRangeRegex =
    /\b(\d{1,2})(?:\s*(?:a|al|hasta|-)\s*)(\d{1,2})(?:\s+de)?\s+([a-z]+)(?:\s+de)?(?:\s+(\d{4}))?\b/g;

  for (const match of value.matchAll(rangeRegex)) {
    const startMonth = MONTHS[normalizeKey(match[2])];
    const endMonth = MONTHS[normalizeKey(match[5] ?? match[2])];
    const startYear = Number(match[3] ?? match[6] ?? DEFAULT_REPORT_YEAR);
    const endYear = Number(match[6] ?? match[3] ?? DEFAULT_REPORT_YEAR);
    const startDate = createIsoDate(startYear, startMonth + 1, Number(match[1]));
    const endDate = createIsoDate(endYear, endMonth + 1, Number(match[4]));

    if (startDate) {
      dates.push(startDate);
    }

    if (endDate) {
      dates.push(endDate);
    }
  }

  for (const match of value.matchAll(shortRangeRegex)) {
    const month = MONTHS[normalizeKey(match[3])];
    const year = Number(match[4] ?? DEFAULT_REPORT_YEAR);
    const firstDate = createIsoDate(year, month + 1, Number(match[1]));
    const secondDate = createIsoDate(year, month + 1, Number(match[2]));

    if (firstDate) {
      dates.push(firstDate);
    }

    if (secondDate) {
      dates.push(secondDate);
    }
  }
}

function collectTextDates(value: string, dates: string[]) {
  const dateRegex =
    /\b(\d{1,2})(?:\s+de)?\s+(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)(?:\s+de)?\s+(\d{4})\b/g;

  for (const match of value.matchAll(dateRegex)) {
    const month = MONTHS[normalizeKey(match[2])];
    const candidate = createIsoDate(Number(match[3]), month + 1, Number(match[1]));

    if (candidate) {
      dates.push(candidate);
    }
  }
}

function createIsoDate(year: number, month: number, day: number) {
  if (
    !Number.isFinite(year) ||
    !Number.isFinite(month) ||
    !Number.isFinite(day)
  ) {
    return null;
  }

  const candidate = new Date(year, month - 1, day);

  if (
    candidate.getFullYear() !== year ||
    candidate.getMonth() !== month - 1 ||
    candidate.getDate() !== day
  ) {
    return null;
  }

  return [
    String(candidate.getFullYear()).padStart(4, "0"),
    String(candidate.getMonth() + 1).padStart(2, "0"),
    String(candidate.getDate()).padStart(2, "0"),
  ].join("-");
}

function formatDateLabel(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return `${String(day).padStart(2, "0")}-${String(month).padStart(2, "0")}-${year}`;
}

function getFilteredAperturas(input: ReportWorkbookInput) {
  const query = buildDateQuery(input);
  const dateWindow = resolveDateWindow(input);
  const baseRecords = findAperturas({ storeQuery: null }).filter((record) =>
    isDateWithinWindow(record.date, dateWindow),
  );

  return baseRecords
    .filter((record) =>
      matchesSucursalQuery(
        { storeCode: record.storeCode, storeLabel: record.storeLabel },
        query.storeQuery,
      ),
    )
    .map((record) => {
      const canonical = resolveCanonicalStore({
        storeCode: record.storeCode,
        storeLabel: record.storeLabel,
      });
      return {
        ...record,
        canonicalKey: canonical.canonicalKey,
        canonicalLabel: canonical.canonicalLabel,
      };
    });
}

function getFilteredCierres(input: ReportWorkbookInput) {
  const query = buildDateQuery(input);
  const dateWindow = resolveDateWindow(input);
  const baseRecords = findCierres({ storeQuery: null }).filter((record) =>
    isDateWithinWindow(record.date, dateWindow),
  );

  return baseRecords
    .filter((record) =>
      matchesSucursalQuery(
        { storeCode: record.storeCode, storeLabel: record.storeLabel },
        query.storeQuery,
      ),
    )
    .map((record) => {
      const canonical = resolveCanonicalStore({
        storeCode: record.storeCode,
        storeLabel: record.storeLabel,
      });
      return {
        ...record,
        canonicalKey: canonical.canonicalKey,
        canonicalLabel: canonical.canonicalLabel,
      };
    });
}

function getFilteredDiscardedAperturas(records: MappedAperturaRecord[]) {
  return getDiscardedEventsForRecords(records).map((event) => {
    const canonical = resolveCanonicalStore({
      storeCode: event.storeCode,
      storeLabel: event.storeLabel,
    });
    return {
      ...event,
      canonicalKey: canonical.canonicalKey,
      canonicalLabel: canonical.canonicalLabel,
    };
  });
}

function getFilteredDiscardedCierres(records: MappedCierreRecord[]) {
  return getDiscardedCierreEventsForRecords(records).map((event) => {
    const canonical = resolveCanonicalStore({
      storeCode: event.storeCode,
      storeLabel: event.storeLabel,
    });
    return {
      ...event,
      canonicalKey: canonical.canonicalKey,
      canonicalLabel: canonical.canonicalLabel,
    };
  });
}

function buildCombinedRecords(
  aperturas: MappedAperturaRecord[],
  cierres: MappedCierreRecord[],
) {
  const combined = new Map<string, CombinedRecord>();

  for (const apertura of aperturas) {
    const key = `${apertura.date}|${apertura.canonicalKey}`;
    const existing = combined.get(key);

    combined.set(key, {
      date: apertura.date,
      canonicalKey: apertura.canonicalKey,
      storeCode: apertura.storeCode,
      storeLabel: apertura.canonicalLabel,
      openingTime: apertura.openingTime,
      closingTime: existing?.closingTime ?? null,
      opensOnTime: isOpenOnTime(apertura.openingTime),
      closesOnTime: existing?.closesOnTime ?? null,
      openingRawEventCount: apertura.rawEventCount,
      closingRawEventCount: existing?.closingRawEventCount ?? 0,
      openingDiscardedCount: apertura.discardedCount,
      closingDiscardedCount: existing?.closingDiscardedCount ?? 0,
      openingSourceRowNumber: apertura.sourceRowNumber,
      closingSourceRowNumber: existing?.closingSourceRowNumber ?? null,
      status: existing?.closingTime ? "Completo" : "Sin cierre",
      complianceStatus: "Pendiente",
      notes: "",
    });
  }

  for (const cierre of cierres) {
    const key = `${cierre.date}|${cierre.canonicalKey}`;
    const existing = combined.get(key);

    combined.set(key, {
      date: cierre.date,
      canonicalKey: cierre.canonicalKey,
      storeCode: cierre.storeCode,
      storeLabel: cierre.canonicalLabel,
      openingTime: existing?.openingTime ?? null,
      closingTime: cierre.closingTime,
      opensOnTime: existing?.opensOnTime ?? null,
      closesOnTime: isCloseOnTime(cierre.closingTime),
      openingRawEventCount: existing?.openingRawEventCount ?? 0,
      closingRawEventCount: cierre.rawEventCount,
      openingDiscardedCount: existing?.openingDiscardedCount ?? 0,
      closingDiscardedCount: cierre.discardedCount,
      openingSourceRowNumber: existing?.openingSourceRowNumber ?? null,
      closingSourceRowNumber: cierre.sourceRowNumber,
      status: existing?.openingTime ? "Completo" : "Sin apertura",
      complianceStatus: "Pendiente",
      notes: "",
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

function getRelevantSucursalMapEntries(
  canonicalKeys: string[],
  storeQuery?: string | null,
) {
  const allEntries = listSucursalMapEntries();

  if (canonicalKeys.length > 0) {
    const allowedKeys = new Set(canonicalKeys);
    return allEntries.filter((entry) => allowedKeys.has(entry.canonicalKey));
  }

  if (!storeQuery?.trim()) {
    return allEntries;
  }

  return allEntries.filter((entry) =>
    matchesSucursalQuery(
      {
        storeCode: entry.storeCode,
        storeLabel: entry.canonicalLabel,
      },
      storeQuery,
    ),
  );
}

function buildSingleDatasetSummaryRows(args: {
  title: string;
  generatedAt: Date;
  rangeLabel: string;
  storeLabel: string;
  records: Array<{
    date: string;
    storeLabel: string;
    eventTime: string;
    rawEventCount: number;
    discardedCount: number;
  }>;
  discardedRows: Array<{ secondsFromKeptEvent: number }>;
  cleanCountLabel: string;
  cleanCountDescription: string;
  baseName: string;
  cleaningRuleText: string;
  datasetKind: "aperturas" | "cierres";
}): SheetRow[] {
  const uniqueStores = new Set(args.records.map((record) => record.storeLabel)).size;
  const uniqueDates = new Set(args.records.map((record) => record.date)).size;
  const averageTime = formatAverageTime(args.records.map((record) => record.eventTime));
  const earliestTime = formatClockTime(getBoundaryTime(args.records.map((record) => record.eventTime), "min"));
  const latestTime = formatClockTime(getBoundaryTime(args.records.map((record) => record.eventTime), "max"));

  return [
    [{ value: args.title, style: 1 }, null, null, null],
    ["Base", args.baseName],
    ["Criterio de limpieza", args.cleaningRuleText],
    ["Sucursal", args.storeLabel],
    ["Rango", args.rangeLabel],
    ["Generado", args.generatedAt.toLocaleString("es-MX")],
    [],
    [
      { value: "Indicador", style: 2 },
      { value: "Valor", style: 2 },
      { value: "Lectura", style: 2 },
    ],
    [args.cleanCountLabel, args.records.length, args.cleanCountDescription],
    ["Sucursales", uniqueStores, "Sucursales incluidas en el filtro"],
    ["Dias con registro", uniqueDates, "Fechas con al menos un registro valido"],
    [
      "Eventos descartados",
      args.discardedRows.length,
      "Duplicados o repeticiones del mismo dia",
    ],
    ["Promedio de hora", averageTime, "Promedio de hora en la muestra"],
    [
      "Hora mas temprana",
      earliestTime,
      `Dentro de ${args.datasetKind === "aperturas" ? "las aperturas" : "los cierres"}`,
    ],
    [
      "Hora mas tardia",
      latestTime,
      `Dentro de ${args.datasetKind === "aperturas" ? "las aperturas" : "los cierres"}`,
    ],
  ];
}

function buildOpenCloseSummaryRows(args: {
  title: string;
  generatedAt: Date;
  rangeLabel: string;
  storeLabel: string;
  combinedRecords: CombinedRecord[];
}): SheetRow[] {
  const openingEvents = args.combinedRecords.filter(
    (record) => record.openingTime !== null,
  );
  const closingEvents = args.combinedRecords.filter(
    (record) => record.closingTime !== null,
  );
  const compliant = args.combinedRecords.filter(
    (record) => record.complianceStatus === "Cumple open-close",
  );
  const openingCompliant = args.combinedRecords.filter(
    (record) => record.opensOnTime === true,
  );
  const closingCompliant = args.combinedRecords.filter(
    (record) => record.closesOnTime === true,
  );
  const reviewed = args.combinedRecords.length;
  const notCompliant = reviewed - compliant.length;
  const compliance = reviewed
    ? `${((compliant.length / reviewed) * 100).toFixed(1)}%`
    : "0.0%";
  const openingCompliance = openingEvents.length
    ? `${((openingCompliant.length / openingEvents.length) * 100).toFixed(1)}%`
    : "0.0%";
  const closingCompliance = closingEvents.length
    ? `${((closingCompliant.length / closingEvents.length) * 100).toFixed(1)}%`
    : "0.0%";

  return [
    [{ value: args.title, style: 1 }, null, null, null, null],
    ["Categoria", "open-close"],
    ["Rango", args.rangeLabel],
    ["Generado", args.generatedAt.toLocaleString("es-MX")],
    ["Regla apertura", "Cumple si abre a las 07:00 o antes"],
    ["Regla cierre", "Cumple si cierra a las 22:00 o despues"],
    [],
    [
      { value: "Indicador", style: 2 },
      { value: "Valor", style: 2 },
      { value: "Lectura", style: 2 },
    ],
    ["Eventos apertura", openingEvents.length, "Aperturas con registro"],
    ["Eventos cierre", closingEvents.length, "Cierres con registro"],
    ["Eventos revisados", reviewed, "Open/Close con registro"],
    ["Cumplieron", compliant.length, "Eventos dentro del horario esperado"],
    ["No cumplieron", notCompliant, "Eventos fuera del horario esperado"],
    ["Cumplimiento", compliance, "Cumplimiento del periodo"],
    [
      "Cumplimiento apertura",
      openingCompliance,
      "Porcentaje de aperturas a las 07:00 o antes",
    ],
    [
      "Cumplimiento cierre",
      closingCompliance,
      "Porcentaje de cierres a las 22:00 o despues",
    ],
  ];
}

function buildTopSummaryRows(args: {
  title: string;
  generatedAt: Date;
  rangeLabel: string;
  openingTop: TopStoreMetric[];
  closingTop: TopStoreMetric[];
  bothTop: TopStoreMetric[];
}): SheetRow[] {
  const bestOpening = args.openingTop[0];
  const bestClosing = args.closingTop[0];
  const bestBoth = args.bothTop[0];

  return [
    [{ value: args.title, style: 1 }, null, null, null],
    ["Categoria", "top"],
    ["Rango", args.rangeLabel],
    ["Generado", args.generatedAt.toLocaleString("es-MX")],
    ["Lectura", "Ranking de sucursales por cumplimiento de apertura, cierre y ambas"],
    [],
    [
      { value: "Indicador", style: 2 },
      { value: "Sucursal", style: 2 },
      { value: "Valor", style: 2 },
      { value: "Lectura", style: 2 },
    ],
    [
      "Mejor apertura",
      bestOpening?.storeLabel ?? "Sin datos",
      formatPercentage(bestOpening?.complianceRate ?? 0),
      summarizeTopMetric(bestOpening),
    ],
    [
      "Mejor cierre",
      bestClosing?.storeLabel ?? "Sin datos",
      formatPercentage(bestClosing?.complianceRate ?? 0),
      summarizeTopMetric(bestClosing),
    ],
    [
      "Mejor open-close",
      bestBoth?.storeLabel ?? "Sin datos",
      formatPercentage(bestBoth?.complianceRate ?? 0),
      summarizeTopMetric(bestBoth),
    ],
    ["Sucursales evaluadas apertura", args.openingTop.length, "", ""],
    ["Sucursales evaluadas cierre", args.closingTop.length, "", ""],
    ["Sucursales evaluadas open-close", args.bothTop.length, "", ""],
  ];
}

function buildTopMetricRows(
  title: string,
  metrics: TopStoreMetric[],
  complianceLabel: string,
): SheetRow[] {
  return [
    [{ value: title, style: 1 }, null, null, null, null, null],
    [],
    [
      { value: "Rank", style: 2 },
      { value: "Sucursal", style: 2 },
      { value: "Cumplieron", style: 2 },
      { value: "Evaluados", style: 2 },
      { value: complianceLabel, style: 2 },
      { value: "Sin dato", style: 2 },
    ],
    ...(metrics.length > 0
      ? metrics.map((metric, index) => [
          index + 1,
          metric.storeLabel,
          metric.compliantCount,
          metric.evaluatedCount,
          formatPercentage(metric.complianceRate),
          metric.missingCount,
        ])
      : [["Sin resultados", null, null, null, null, null]]),
  ];
}

function buildSingleDatasetRows(
  records: Array<{
    date: string;
    storeLabel: string;
    eventTime: string;
    rawEventCount: number;
    discardedCount: number;
    discardedTimes: string[];
    sourceRowNumber: number;
  }>,
  title: string,
  timeColumnLabel: string,
): SheetRow[] {
  return [
    [{ value: title, style: 1 }, null, null, null, null, null, null],
    [],
    [
      { value: "Fecha", style: 2 },
      { value: "Sucursal", style: 2 },
      { value: timeColumnLabel, style: 2 },
      { value: "Eventos detectados", style: 2 },
      { value: "Descartados", style: 2 },
      { value: "Horas descartadas", style: 2 },
      { value: "Fila origen", style: 2 },
    ],
    ...(records.length > 0
      ? records.map((record) => [
          record.date,
          record.storeLabel,
          formatClockTime(record.eventTime),
          record.rawEventCount,
          record.discardedCount,
          record.discardedTimes.length > 0
            ? record.discardedTimes.map(formatClockTime).join(", ")
            : "Sin descartes",
          record.sourceRowNumber,
        ])
      : [["Sin resultados", null, null, null, null, null, null]]),
  ];
}

function buildSingleDatasetDiscardedRows(
  events: Array<{
    date: string;
    storeLabel: string;
    time: string;
    keptTime: string;
    secondsFromKeptEvent: number;
    sourceRowNumber: number;
  }>,
  secondsColumnLabel: string,
): SheetRow[] {
  return [
    [{ value: "Eventos descartados", style: 1 }, null, null, null, null, null, null],
    [],
    [
      { value: "Fecha", style: 2 },
      { value: "Sucursal", style: 2 },
      { value: "Hora descartada", style: 2 },
      { value: "Hora conservada", style: 2 },
      { value: secondsColumnLabel, style: 2 },
      { value: "Fila origen", style: 2 },
      { value: "Motivo", style: 2 },
    ],
    ...(events.length > 0
      ? events.map((event) => [
          event.date,
          event.storeLabel,
          formatClockTime(event.time),
          formatClockTime(event.keptTime),
          event.secondsFromKeptEvent,
          event.sourceRowNumber,
          "Mismo local y misma fecha, evento repetido",
        ])
      : [["Sin descartes", null, null, null, null, null, null]]),
  ];
}

function buildOpenCloseRows(records: CombinedRecord[]): SheetRow[] {
  return [
    [{ value: "Open-Close", style: 1 }, null, null, null, null, null],
    [],
    [
      { value: "Fecha", style: 2 },
      { value: "Sucursal", style: 2 },
      { value: "Hora apertura", style: 2 },
      { value: "Cumplio apertura", style: 2 },
      { value: "Hora cierre", style: 2 },
      { value: "Cumplio cierre", style: 2 },
    ],
    ...(records.length > 0
      ? records.map((record) => [
          record.date,
          record.storeLabel,
          formatClockTime(record.openingTime),
          formatComplianceFlag(record.opensOnTime, "apertura"),
          formatClockTime(record.closingTime),
          formatComplianceFlag(record.closesOnTime, "cierre"),
        ])
      : [[
          "Sin resultados",
          null,
          null,
          null,
          null,
          null,
        ]]),
  ];
}

function buildSucursalMappingRows(entries: SucursalMapEntry[]): SheetRow[] {
  return [
    [{ value: "Mapeo de sucursales", style: 1 }, null, null, null, null, null],
    [],
    [
      { value: "Codigo", style: 2 },
      { value: "Sucursal canonica", style: 2 },
      { value: "Alias aperturas", style: 2 },
      { value: "Alias cierres", style: 2 },
      { value: "Tiene aperturas", style: 2 },
      { value: "Tiene cierres", style: 2 },
    ],
    ...(entries.length > 0
      ? entries.map((entry) => [
          entry.storeCode ?? "Sin codigo",
          entry.canonicalLabel,
          entry.aperturaAliases.join(" | ") || "Sin alias",
          entry.cierreAliases.join(" | ") || "Sin alias",
          entry.hasAperturas ? "Si" : "No",
          entry.hasCierres ? "Si" : "No",
        ])
      : [["Sin sucursales", null, null, null, null, null]]),
  ];
}

function buildTopMetrics(
  records: CombinedRecord[],
  isCompliant: (record: CombinedRecord) => boolean | null,
  isEvaluated: (record: CombinedRecord) => boolean,
) {
  const grouped = new Map<string, TopStoreMetric>();

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

function finalizeCombinedRecord(record: CombinedRecord): CombinedRecord {
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

function isCompliantOpenClose(record: CombinedRecord) {
  return record.complianceStatus === "Cumple open-close";
}

function formatPercentage(value: number) {
  return `${(value * 100).toFixed(1)}%`;
}

function summarizeTopMetric(metric?: TopStoreMetric) {
  if (!metric) {
    return "Sin datos";
  }

  return `${metric.compliantCount} de ${metric.evaluatedCount} cumplidos`;
}

function getBoundaryTime(values: Array<string | null>, mode: "min" | "max") {
  const filtered = values.filter(Boolean) as string[];

  if (filtered.length === 0) {
    return null;
  }

  return filtered.reduce((selected, current) => {
    const currentSeconds = timeToSeconds(current);
    const selectedSeconds = timeToSeconds(selected);
    const shouldReplace =
      mode === "min"
        ? currentSeconds < selectedSeconds
        : currentSeconds > selectedSeconds;

    return shouldReplace ? current : selected;
  });
}

function formatAverageTime(values: string[]) {
  if (values.length === 0) {
    return "Sin datos";
  }

  const totalSeconds = values.reduce(
    (sum, value) => sum + timeToSeconds(value),
    0,
  );
  const averageSeconds = Math.round(totalSeconds / values.length);
  return formatClockTime(secondsToTime(averageSeconds));
}

function timeToSeconds(value: string) {
  const [hours = "0", minutes = "0", seconds = "0"] = value.split(":");
  return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
}

function secondsToTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");
}

function formatClockTime(value: string | null) {
  if (!value) {
    return "Sin dato";
  }

  const [hours = "0", minutes = "0", seconds = "0"] = value.split(":");
  return `${hours}:${minutes}:${seconds}`;
}

function isOpenOnTime(value: string | null) {
  return value ? timeToSeconds(value) <= timeToSeconds(OPEN_ON_TIME_THRESHOLD) : null;
}

function isCloseOnTime(value: string | null) {
  return value ? timeToSeconds(value) >= timeToSeconds(CLOSE_ON_TIME_THRESHOLD) : null;
}

function formatComplianceFlag(
  value: boolean | null,
  label: "apertura" | "cierre",
) {
  if (value === null) {
    return `Sin ${label}`;
  }

  return value ? "Si" : "No";
}

function normalizeDatasetKind(value?: string | null): DatasetKind {
  const normalized = normalizeKey(value ?? "");

  if (
    normalized === "open" ||
    normalized === "apertura" ||
    normalized === "aperturas"
  ) {
    return "aperturas";
  }

  if (
    normalized === "close" ||
    normalized === "cierre" ||
    normalized === "cierres"
  ) {
    return "cierres";
  }

  if (normalized === "top" || normalized === "ranking" || normalized === "rank") {
    return "top";
  }

  return "open-close";
}

function buildWorkbookFiles(
  sheets: Array<{ name: string; rows: SheetRow[]; columns: number[] }>,
) {
  const worksheetFiles = sheets.map((sheet, index) => ({
    name: `xl/worksheets/sheet${index + 1}.xml`,
    content: createWorksheetXml(sheet.rows, sheet.columns),
  }));

  return [
    {
      name: "[Content_Types].xml",
      content: createContentTypesXml(sheets.length),
    },
    {
      name: "_rels/.rels",
      content: createRootRelsXml(),
    },
    {
      name: "docProps/app.xml",
      content: createAppXml(sheets.map((sheet) => sheet.name)),
    },
    {
      name: "docProps/core.xml",
      content: createCoreXml(),
    },
    {
      name: "xl/workbook.xml",
      content: createWorkbookXml(sheets.map((sheet) => sheet.name)),
    },
    {
      name: "xl/_rels/workbook.xml.rels",
      content: createWorkbookRelsXml(sheets.length),
    },
    {
      name: "xl/styles.xml",
      content: createStylesXml(),
    },
    ...worksheetFiles,
  ];
}

function createWorksheetXml(rows: SheetRow[], columns: number[]) {
  const cols = columns
    .map(
      (width, index) =>
        `<col min="${index + 1}" max="${index + 1}" width="${width}" customWidth="1"/>`,
    )
    .join("");
  const rowXml = rows
    .map((row, rowIndex) => {
      const rowNumber = rowIndex + 1;
      const cells = row
        .map((cell, colIndex) => encodeCell(cell, rowNumber, colIndex + 1))
        .join("");

      return `<row r="${rowNumber}">${cells}</row>`;
    })
    .join("");

  return xml(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <cols>${cols}</cols>
  <sheetData>${rowXml}</sheetData>
</worksheet>`);
}

function encodeCell(cell: CellValue | Cell, row: number, col: number) {
  const resolved =
    cell && typeof cell === "object" && "value" in cell
      ? cell
      : { value: cell, style: undefined };

  if (resolved.value === null || resolved.value === undefined) {
    return "";
  }

  const ref = `${columnName(col)}${row}`;
  const style = resolved.style ? ` s="${resolved.style}"` : "";

  if (typeof resolved.value === "number" && Number.isFinite(resolved.value)) {
    return `<c r="${ref}"${style}><v>${resolved.value}</v></c>`;
  }

  return `<c r="${ref}" t="inlineStr"${style}><is><t>${escapeXml(
    String(resolved.value),
  )}</t></is></c>`;
}

function createContentTypesXml(sheetCount: number) {
  const sheetOverrides = Array.from(
    { length: sheetCount },
    (_, index) =>
      `<Override PartName="/xl/worksheets/sheet${index + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`,
  ).join("");

  return xml(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  ${sheetOverrides}
</Types>`);
}

function createRootRelsXml() {
  return xml(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>`);
}

function createWorkbookXml(sheetNames: string[]) {
  const sheets = sheetNames
    .map(
      (name, index) =>
        `<sheet name="${escapeAttribute(name.slice(0, 31))}" sheetId="${index + 1}" r:id="rId${index + 1}"/>`,
    )
    .join("");

  return xml(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>${sheets}</sheets>
</workbook>`);
}

function createWorkbookRelsXml(sheetCount: number) {
  const sheetRels = Array.from(
    { length: sheetCount },
    (_, index) =>
      `<Relationship Id="rId${index + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${index + 1}.xml"/>`,
  ).join("");

  return xml(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  ${sheetRels}
  <Relationship Id="rId${sheetCount + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`);
}

function createStylesXml() {
  return xml(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="3">
    <font><sz val="11"/><name val="Aptos"/></font>
    <font><b/><sz val="18"/><color rgb="FFFFFFFF"/><name val="Aptos Display"/></font>
    <font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Aptos"/></font>
  </fonts>
  <fills count="4">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF1D4ED8"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFEFF6FF"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="4">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFill="1" applyFont="1"/>
    <xf numFmtId="0" fontId="2" fillId="2" borderId="0" xfId="0" applyFill="1" applyFont="1"/>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="0" xfId="0" applyFill="1"/>
  </cellXfs>
</styleSheet>`);
}

function createAppXml(sheetNames: string[]) {
  const titles = sheetNames
    .map((name) => `<vt:lpstr>${escapeXml(name)}</vt:lpstr>`)
    .join("");

  return xml(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>Teseo</Application>
  <TitlesOfParts><vt:vector size="${sheetNames.length}" baseType="lpstr">${titles}</vt:vector></TitlesOfParts>
</Properties>`);
}

function createCoreXml() {
  const created = new Date().toISOString();

  return xml(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:creator>Teseo</dc:creator>
  <cp:lastModifiedBy>Teseo</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">${created}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">${created}</dcterms:modified>
</cp:coreProperties>`);
}

function createZip(files: Array<{ name: string; content: string }>) {
  const encoder = new TextEncoder();
  const chunks: Uint8Array[] = [];
  const centralDirectory: Uint8Array[] = [];
  const fileRecords: Array<{
    nameBytes: Uint8Array;
    data: Uint8Array;
    crc: number;
    offset: number;
  }> = [];
  let offset = 0;

  for (const file of files) {
    const nameBytes = encoder.encode(file.name);
    const data = encoder.encode(file.content);
    const crc = crc32(data);
    const localHeader = createLocalFileHeader(nameBytes, data.length, crc);

    chunks.push(localHeader, nameBytes, data);
    fileRecords.push({ nameBytes, data, crc, offset });
    offset += localHeader.length + nameBytes.length + data.length;
  }

  const centralDirectoryOffset = offset;

  for (const record of fileRecords) {
    const header = createCentralDirectoryHeader(
      record.nameBytes,
      record.data.length,
      record.crc,
      record.offset,
    );
    centralDirectory.push(header, record.nameBytes);
    offset += header.length + record.nameBytes.length;
  }

  const centralDirectorySize = offset - centralDirectoryOffset;
  const endRecord = createEndOfCentralDirectoryRecord(
    fileRecords.length,
    centralDirectorySize,
    centralDirectoryOffset,
  );

  return concatUint8Arrays([...chunks, ...centralDirectory, endRecord]);
}

function createLocalFileHeader(
  nameBytes: Uint8Array,
  size: number,
  crc: number,
) {
  const view = new DataView(new ArrayBuffer(30));
  setUint32(view, 0, 0x04034b50);
  setUint16(view, 4, 20);
  setUint16(view, 6, 0);
  setUint16(view, 8, 0);
  setUint16(view, 10, 0);
  setUint16(view, 12, 0);
  setUint32(view, 14, crc);
  setUint32(view, 18, size);
  setUint32(view, 22, size);
  setUint16(view, 26, nameBytes.length);
  setUint16(view, 28, 0);
  return new Uint8Array(view.buffer);
}

function createCentralDirectoryHeader(
  nameBytes: Uint8Array,
  size: number,
  crc: number,
  offset: number,
) {
  const view = new DataView(new ArrayBuffer(46));
  setUint32(view, 0, 0x02014b50);
  setUint16(view, 4, 20);
  setUint16(view, 6, 20);
  setUint16(view, 8, 0);
  setUint16(view, 10, 0);
  setUint16(view, 12, 0);
  setUint16(view, 14, 0);
  setUint32(view, 16, crc);
  setUint32(view, 20, size);
  setUint32(view, 24, size);
  setUint16(view, 28, nameBytes.length);
  setUint16(view, 30, 0);
  setUint16(view, 32, 0);
  setUint16(view, 34, 0);
  setUint16(view, 36, 0);
  setUint32(view, 38, 0);
  setUint32(view, 42, offset);
  return new Uint8Array(view.buffer);
}

function createEndOfCentralDirectoryRecord(
  fileCount: number,
  centralDirectorySize: number,
  centralDirectoryOffset: number,
) {
  const view = new DataView(new ArrayBuffer(22));
  setUint32(view, 0, 0x06054b50);
  setUint16(view, 4, 0);
  setUint16(view, 6, 0);
  setUint16(view, 8, fileCount);
  setUint16(view, 10, fileCount);
  setUint32(view, 12, centralDirectorySize);
  setUint32(view, 16, centralDirectoryOffset);
  setUint16(view, 20, 0);
  return new Uint8Array(view.buffer);
}

function crc32(data: Uint8Array) {
  let crc = 0xffffffff;

  for (const byte of data) {
    crc ^= byte;

    for (let index = 0; index < 8; index += 1) {
      crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
    }
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function concatUint8Arrays(chunks: Uint8Array[]) {
  const totalLength = chunks.reduce((length, chunk) => length + chunk.length, 0);
  const output = new Uint8Array(totalLength);
  let offset = 0;

  for (const chunk of chunks) {
    output.set(chunk, offset);
    offset += chunk.length;
  }

  return output;
}

function setUint16(view: DataView, offset: number, value: number) {
  view.setUint16(offset, value, true);
}

function setUint32(view: DataView, offset: number, value: number) {
  view.setUint32(offset, value >>> 0, true);
}

function columnName(columnIndex: number) {
  let index = columnIndex;
  let name = "";

  while (index > 0) {
    const remainder = (index - 1) % 26;
    name = String.fromCharCode(65 + remainder) + name;
    index = Math.floor((index - 1) / 26);
  }

  return name;
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function escapeAttribute(value: string) {
  return escapeXml(value.replace(/[\[\]:*?/\\]/g, " ").trim() || "Hoja");
}

function normalizeKey(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
}

function slugify(value: string) {
  const slug = normalizeKey(value)
    .replace(/[^a-z0-9_-]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 90);

  return slug || "reporte";
}

function xml(value: string) {
  return value.replace(/\n\s*/g, "");
}
