import rawData from "./data/cierresKnowledgeBase.json";

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

export type KnowledgeBaseMeta = {
  generatedAt: string;
  sourceWorkbook: string;
  sourceSheet: string;
  cleaningRule: string;
  rawEvents: number;
  exactDuplicateRows: number;
  cleanClosings: number;
  discardedEvents: number;
  distinctStores: number;
  dateRange: {
    start: string;
    end: string;
  };
  supportedCategories: string[];
};

export type CleanCierreRecord = {
  recordId: string;
  storeCode: string | null;
  storeName: string;
  storeLabel: string;
  date: string;
  closingTime: string;
  closingDateTime: string;
  sourceRowNumber: number;
  rawEventCount: number;
  discardedCount: number;
  discardedTimes: string[];
  exactDuplicateCount: number;
};

export type DiscardedCierreEvent = {
  recordId: string;
  storeCode: string | null;
  storeName: string;
  storeLabel: string;
  date: string;
  time: string;
  activationDateTime: string;
  sourceRowNumber: number;
  keptClosingTime: string;
  keptClosingDateTime: string;
  secondsFromKeptClosing: number;
  reason: string;
};

export type KnowledgeBaseStore = {
  storeLabel: string;
  storeCode: string | null;
  storeName: string;
  rawEventCount: number;
  cleanClosingCount: number;
};

export type SummaryByDate = {
  date: string;
  cleanClosings: number;
  discardedEvents: number;
  distinctStores: number;
};

export type CierresKnowledgeBase = {
  meta: KnowledgeBaseMeta;
  records: CleanCierreRecord[];
  discardedEvents: DiscardedCierreEvent[];
  stores: KnowledgeBaseStore[];
  summaryByDate: SummaryByDate[];
};

export type CierresQuery = {
  range?: string | null;
  fromDate?: string | null;
  toDate?: string | null;
  storeQuery?: string | null;
  limit?: number | null;
};

const cierresKnowledgeBase = rawData as CierresKnowledgeBase;
const DEFAULT_PARSE_YEAR = Number(
  cierresKnowledgeBase.meta.dateRange.end.slice(0, 4),
);

export const CIERRES_DATE_RANGE_LABEL = formatRangeLabel(
  cierresKnowledgeBase.meta.dateRange.start,
  cierresKnowledgeBase.meta.dateRange.end,
);

export function getCierresDateRangeLabel() {
  return CIERRES_DATE_RANGE_LABEL;
}

export function getCierresRangeLabel(query: CierresQuery) {
  const window = resolveDateWindow(query);
  return formatRangeLabel(window.startDate, window.endDate);
}

export function findCierres(query: CierresQuery = {}) {
  const window = resolveDateWindow(query);
  const normalizedStoreQuery = normalizeKey(query.storeQuery ?? "");

  return cierresKnowledgeBase.records.filter((record) => {
    const inDateWindow =
      record.date >= window.startDate && record.date <= window.endDate;

    if (!inDateWindow) {
      return false;
    }

    if (!normalizedStoreQuery) {
      return true;
    }

    const haystack = [
      record.storeLabel,
      record.storeName,
      record.storeCode ?? "",
    ]
      .map(normalizeKey)
      .join(" ");

    return haystack.includes(normalizedStoreQuery);
  });
}

export function getDiscardedCierreEventsForRecords(records: CleanCierreRecord[]) {
  const allowedRecordIds = new Set(records.map((record) => record.recordId));

  return cierresKnowledgeBase.discardedEvents.filter((event) =>
    allowedRecordIds.has(event.recordId),
  );
}

export function buildCierresLookupResult(query: CierresQuery = {}) {
  const matches = findCierres(query);
  const limitedMatches = matches.slice(0, normalizeLimit(query.limit));
  const discardedEvents = getDiscardedCierreEventsForRecords(matches);
  const uniqueStores = new Set(matches.map((record) => record.storeLabel)).size;
  const uniqueDates = new Set(matches.map((record) => record.date)).size;

  return {
    status: "ok",
    knowledgeBase: {
      dateRange: CIERRES_DATE_RANGE_LABEL,
      distinctStores: cierresKnowledgeBase.meta.distinctStores,
      cleanClosings: cierresKnowledgeBase.meta.cleanClosings,
      discardedEvents: cierresKnowledgeBase.meta.discardedEvents,
      cleaningRule: "Se conserva la ultima activacion por sucursal y fecha.",
    },
    appliedFilters: {
      range: getCierresRangeLabel(query),
      storeQuery: query.storeQuery ?? null,
    },
    summary: {
      matchingClosings: matches.length,
      matchingStores: uniqueStores,
      matchingDates: uniqueDates,
      discardedEvents: discardedEvents.length,
    },
    sample: limitedMatches.map((record) => ({
      date: record.date,
      store: record.storeLabel,
      closingTime: record.closingTime,
      detectedEvents: record.rawEventCount,
      discardedEvents: record.discardedCount,
      discardedTimes: record.discardedTimes,
    })),
    truncated: limitedMatches.length < matches.length,
  };
}

function normalizeLimit(value?: number | null) {
  if (!value || !Number.isFinite(value)) {
    return 12;
  }

  return Math.max(1, Math.min(50, Math.trunc(value)));
}

function resolveDateWindow(query: CierresQuery) {
  const fallbackStart = cierresKnowledgeBase.meta.dateRange.start;
  const fallbackEnd = cierresKnowledgeBase.meta.dateRange.end;
  const explicitStart = parseSingleDate(query.fromDate ?? "");
  const explicitEnd = parseSingleDate(query.toDate ?? "");

  if (explicitStart || explicitEnd) {
    const startDate = explicitStart ?? explicitEnd ?? fallbackStart;
    const endDate = explicitEnd ?? explicitStart ?? fallbackEnd;
    return orderDateWindow(startDate, endDate);
  }

  const parsedRangeDates = parseDates(query.range ?? "");

  if (parsedRangeDates.length >= 2) {
    return orderDateWindow(parsedRangeDates[0], parsedRangeDates[1]);
  }

  if (parsedRangeDates.length === 1) {
    return { startDate: parsedRangeDates[0], endDate: parsedRangeDates[0] };
  }

  return { startDate: fallbackStart, endDate: fallbackEnd };
}

function orderDateWindow(left: string, right: string) {
  return left <= right
    ? { startDate: left, endDate: right }
    : { startDate: right, endDate: left };
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
    const startYear = Number(match[3] ?? match[6] ?? DEFAULT_PARSE_YEAR);
    const endYear = Number(match[6] ?? match[3] ?? DEFAULT_PARSE_YEAR);
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
    const year = Number(match[4] ?? DEFAULT_PARSE_YEAR);
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

function formatRangeLabel(startDate: string, endDate: string) {
  return `${formatDateLabel(startDate)} a ${formatDateLabel(endDate)}`;
}

function formatDateLabel(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return `${String(day).padStart(2, "0")}-${String(month).padStart(2, "0")}-${year}`;
}

function normalizeKey(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
}
