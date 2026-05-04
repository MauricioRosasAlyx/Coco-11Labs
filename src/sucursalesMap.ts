import rawData from "./data/sucursalesMap.json";

type RawRecord = {
  storeCode: string | null;
  storeLabel: string;
};

export type SucursalMapEntry = {
  canonicalKey: string;
  storeCode: string | null;
  canonicalLabel: string;
  aperturaAliases: string[];
  cierreAliases: string[];
  allAliases: string[];
  hasAperturas: boolean;
  hasCierres: boolean;
};

const sucursalEntries = (rawData as { entries: SucursalMapEntry[] }).entries;

export function listSucursalMapEntries() {
  return sucursalEntries;
}

export function resolveCanonicalStore(record: RawRecord) {
  const entry = findEntryForRecord(record);

  if (entry) {
    return {
      canonicalKey: entry.canonicalKey,
      storeCode: entry.storeCode,
      canonicalLabel: entry.canonicalLabel,
      aliases: entry.allAliases,
    };
  }

  return {
    canonicalKey: buildCanonicalKey(record.storeCode, record.storeLabel),
    storeCode: record.storeCode,
    canonicalLabel: record.storeLabel,
    aliases: [record.storeLabel],
  };
}

export function matchesSucursalQuery(record: RawRecord, query?: string | null) {
  const normalizedQuery = normalizeKey(query ?? "");

  if (!normalizedQuery) {
    return true;
  }

  const entry = findEntryForRecord(record);

  if (!entry) {
    const fallbackHaystack = [record.storeCode ?? "", record.storeLabel]
      .map(normalizeKey)
      .join(" ");
    return fallbackHaystack.includes(normalizedQuery);
  }

  return [
    entry.storeCode ?? "",
    entry.canonicalLabel,
    ...entry.allAliases,
  ]
    .map(normalizeKey)
    .join(" ")
    .includes(normalizedQuery);
}

function findEntryForRecord(record: RawRecord) {
  const key = buildCanonicalKey(record.storeCode, record.storeLabel);
  return sucursalEntries.find((entry) => entry.canonicalKey === key);
}

function buildCanonicalKey(storeCode: string | null, storeLabel: string) {
  return storeCode ? `code:${storeCode}` : `label:${normalizeKey(storeLabel)}`;
}

function normalizeKey(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
}
