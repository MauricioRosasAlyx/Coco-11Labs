import { findClosingRecords } from "../db/closings.ts";
import { findOpeningRecords } from "../db/openings.ts";

export type ReportDataInput = {
  categoria?: string | null;
  sucursal?: string | null;
  rango?: string | null;
  desde?: string | null;
  hasta?: string | null;
};

type DatasetKind = "open-close" | "aperturas" | "cierres" | "top";

type ReportRow = {
  date: string;
  storeCode: number;
  storeLabel: string;
  eventTime: string;
  eventDateTime: string;
  onTime: boolean;
};

type CombinedRow = {
  date: string;
  storeCode: number;
  storeLabel: string;
  openingTime: string | null;
  closingTime: string | null;
  opensOnTime: boolean | null;
  closesOnTime: boolean | null;
  complianceStatus: string;
};

type TopRow = {
  storeCode: number;
  storeLabel: string;
  evaluatedCount: number;
  compliantCount: number;
  complianceRate: number;
  missingCount: number;
};

const OPEN_ON_TIME_THRESHOLD = "07:00:00";
const CLOSE_ON_TIME_THRESHOLD = "22:00:00";

function normalizeDatasetKind(value?: string | null): DatasetKind {
  const normalized = (value ?? "").trim().toLowerCase();

  if (["open", "apertura", "aperturas"].includes(normalized)) {
    return "aperturas";
  }

  if (["close", "cierre", "cierres"].includes(normalized)) {
    return "cierres";
  }

  if (["top", "ranking", "rank"].includes(normalized)) {
    return "top";
  }

  return "open-close";
}

function toDateKey(value: Date) {
  return value.toISOString().slice(0, 10);
}

function toTimeKey(value: Date) {
  return value.toISOString().slice(11, 19);
}

function isOnTime(time: string, threshold: string, direction: "lte" | "gte") {
  return direction === "lte" ? time <= threshold : time >= threshold;
}

function buildRangeLabel(input: ReportDataInput, dates: string[]) {
  if (input.desde && input.hasta) {
    return `${input.desde} al ${input.hasta}`;
  }

  if (input.desde) {
    return input.desde;
  }

  if (input.hasta) {
    return input.hasta;
  }

  if (input.rango?.trim()) {
    return input.rango.trim();
  }

  if (dates.length === 0) {
    return "Sin datos";
  }

  return `${dates[0]} al ${dates[dates.length - 1]}`;
}

function mapRows(
  records: Array<{
    fecha: Date;
    hora: Date;
    sucursal: { code: number; name: string };
  }>,
  threshold: string,
  direction: "lte" | "gte",
): ReportRow[] {
  return records.map((record) => {
    const eventTime = toTimeKey(record.hora);

    return {
      date: toDateKey(record.fecha),
      storeCode: record.sucursal.code,
      storeLabel: record.sucursal.name,
      eventTime,
      eventDateTime: record.hora.toISOString(),
      onTime: isOnTime(eventTime, threshold, direction),
    };
  });
}

function buildCombinedRows(
  openings: ReportRow[],
  closings: ReportRow[],
): CombinedRow[] {
  const byKey = new Map<string, CombinedRow>();

  for (const opening of openings) {
    const key = `${opening.storeCode}:${opening.date}`;
    const current = byKey.get(key);

    if (!current || !current.openingTime || opening.eventTime < current.openingTime) {
      byKey.set(key, {
        date: opening.date,
        storeCode: opening.storeCode,
        storeLabel: opening.storeLabel,
        openingTime: opening.eventTime,
        closingTime: current?.closingTime ?? null,
        opensOnTime: opening.onTime,
        closesOnTime: current?.closesOnTime ?? null,
        complianceStatus: "Pendiente",
      });
    }
  }

  for (const closing of closings) {
    const key = `${closing.storeCode}:${closing.date}`;
    const current = byKey.get(key);

    if (!current) {
      byKey.set(key, {
        date: closing.date,
        storeCode: closing.storeCode,
        storeLabel: closing.storeLabel,
        openingTime: null,
        closingTime: closing.eventTime,
        opensOnTime: null,
        closesOnTime: closing.onTime,
        complianceStatus: "Pendiente",
      });
      continue;
    }

    if (!current.closingTime || closing.eventTime > current.closingTime) {
      current.closingTime = closing.eventTime;
      current.closesOnTime = closing.onTime;
    }
  }

  const rows = [...byKey.values()].map((row) => {
    const hasOpening = Boolean(row.openingTime);
    const hasClosing = Boolean(row.closingTime);

    let complianceStatus = "Incompleto";

    if (hasOpening && hasClosing) {
      complianceStatus =
        row.opensOnTime && row.closesOnTime ? "Cumple open-close" : "No cumple";
    }

    return {
      ...row,
      complianceStatus,
    };
  });

  return rows.sort((left, right) => {
    if (left.date !== right.date) {
      return left.date.localeCompare(right.date);
    }

    return left.storeCode - right.storeCode;
  });
}

function buildTopRows(rows: CombinedRow[]): TopRow[] {
  const byStore = new Map<number, TopRow>();

  for (const row of rows) {
    const current =
      byStore.get(row.storeCode) ??
      {
        storeCode: row.storeCode,
        storeLabel: row.storeLabel,
        evaluatedCount: 0,
        compliantCount: 0,
        complianceRate: 0,
        missingCount: 0,
      };

    current.evaluatedCount += 1;

    if (row.complianceStatus === "Cumple open-close") {
      current.compliantCount += 1;
    }

    if (row.complianceStatus === "Incompleto") {
      current.missingCount += 1;
    }

    byStore.set(row.storeCode, current);
  }

  return [...byStore.values()]
    .map((row) => ({
      ...row,
      complianceRate:
        row.evaluatedCount > 0
          ? Number(((row.compliantCount / row.evaluatedCount) * 100).toFixed(2))
          : 0,
    }))
    .sort((left, right) => {
      if (right.complianceRate !== left.complianceRate) {
        return right.complianceRate - left.complianceRate;
      }

      return right.compliantCount - left.compliantCount;
    });
}

export async function getReportData(input: ReportDataInput) {
  const category = normalizeDatasetKind(input.categoria);
  const needsOpenings = category === "open-close" || category === "aperturas" || category === "top";
  const needsClosings = category === "open-close" || category === "cierres" || category === "top";

  const [openingRecords, closingRecords] = await Promise.all([
    needsOpenings
      ? findOpeningRecords({
          fromDate: input.desde,
          toDate: input.hasta,
          storeQuery: input.sucursal,
        })
      : Promise.resolve([]),
    needsClosings
      ? findClosingRecords({
          fromDate: input.desde,
          toDate: input.hasta,
          storeQuery: input.sucursal,
        })
      : Promise.resolve([]),
  ]);

  const openings = mapRows(openingRecords, OPEN_ON_TIME_THRESHOLD, "lte");
  const closings = mapRows(closingRecords, CLOSE_ON_TIME_THRESHOLD, "gte");
  const combined = buildCombinedRows(openings, closings);
  const top = buildTopRows(combined);
  const allDates = [...new Set([...openings, ...closings].map((row) => row.date))].sort();
  const rows =
    category === "aperturas"
      ? openings
      : category === "cierres"
        ? closings
        : category === "top"
          ? top
          : combined;

  return {
    category,
    filters: {
      sucursal: input.sucursal ?? null,
      rango: input.rango ?? null,
      desde: input.desde ?? null,
      hasta: input.hasta ?? null,
    },
    summary: {
      openingCount: openings.length,
      closingCount: closings.length,
      combinedCount: combined.length,
      topCount: top.length,
      dateRange: buildRangeLabel(input, allDates),
    },
    rows,
    openings,
    closings,
    combined,
    top,
  };
}
