import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient, tipo } from "../src/generated/prisma/client.ts";
import aperturasData from "../src/data/aperturasKnowledgeBase.json" with { type: "json" };
import cierresData from "../src/data/cierresKnowledgeBase.json" with { type: "json" };
import sucursalesData from "../src/data/sucursalesMap.json" with { type: "json" };
import { extractStoreCode, sanitizeStoreName } from "../src/storeName.ts";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || "file:./prisma/dev.db",
});

const prisma = new PrismaClient({ adapter });

type BaseRecord = {
  recordId: string;
  storeCode: string | null;
  storeName: string;
  storeLabel: string;
  date: string;
  openingTime?: string;
  openingDateTime?: string;
  closingTime?: string;
  closingDateTime?: string;
};

type SucursalEntry = {
  storeCode: string | null;
  canonicalLabel: string;
  allAliases: string[];
};

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function toDateOnly(value: string) {
  return new Date(`${value}T00:00:00.000Z`);
}

function toDateTime(value: string) {
  return new Date(value);
}

function buildAliasIndex(entries: SucursalEntry[]) {
  const aliasIndex = new Map<string, SucursalEntry>();

  for (const entry of entries) {
    for (const alias of entry.allAliases) {
      aliasIndex.set(normalizeText(alias), entry);
    }

    aliasIndex.set(normalizeText(entry.canonicalLabel), entry);
  }

  return aliasIndex;
}

function resolveStoreCode(
  record: BaseRecord,
  aliasIndex: Map<string, SucursalEntry>,
  syntheticCodes: Map<string, number>,
) {
  if (record.storeCode && /^\d+$/.test(record.storeCode)) {
    return Number(record.storeCode);
  }

  const embeddedCode =
    extractStoreCode(record.storeLabel) ?? extractStoreCode(record.storeName);

  if (embeddedCode) {
    return embeddedCode;
  }

  const normalizedLabel = normalizeText(record.storeLabel);
  const normalizedName = normalizeText(record.storeName);
  const mappedEntry =
    aliasIndex.get(normalizedLabel) ?? aliasIndex.get(normalizedName);

  if (mappedEntry?.storeCode && /^\d+$/.test(mappedEntry.storeCode)) {
    return Number(mappedEntry.storeCode);
  }

  const syntheticKey = `${normalizedLabel}|${normalizedName}`;

  if (!syntheticCodes.has(syntheticKey)) {
    syntheticCodes.set(syntheticKey, 900000 + syntheticCodes.size + 1);
  }

  return syntheticCodes.get(syntheticKey)!;
}

function resolveStoreName(
  record: BaseRecord,
  aliasIndex: Map<string, SucursalEntry>,
) {
  const mappedEntry =
    aliasIndex.get(normalizeText(record.storeLabel)) ??
    aliasIndex.get(normalizeText(record.storeName));

  return (
    sanitizeStoreName(record.storeName) ||
    sanitizeStoreName(mappedEntry?.canonicalLabel) ||
    sanitizeStoreName(record.storeLabel)
  );
}

async function main() {
  const aliasIndex = buildAliasIndex(
    sucursalesData.entries as unknown as SucursalEntry[],
  );
  const syntheticCodes = new Map<string, number>();
  const sucursales = new Map<number, { id: string }>();

  await prisma.registro.deleteMany();
  await prisma.sucursal.deleteMany();

  const allRecords = [
    ...(aperturasData.records as BaseRecord[]).map((record) => ({
      ...record,
      tipo: tipo.apertura,
      hora: record.openingDateTime!,
    })),
    ...(cierresData.records as BaseRecord[]).map((record) => ({
      ...record,
      tipo: tipo.cierre,
      hora: record.closingDateTime!,
    })),
  ];

  for (const record of allRecords) {
    const code = resolveStoreCode(record, aliasIndex, syntheticCodes);

    if (!sucursales.has(code)) {
      const sucursal = await prisma.sucursal.create({
        data: {
          code,
          name: resolveStoreName(record, aliasIndex),
        },
      });

      sucursales.set(code, { id: sucursal.id });
    }
  }

  for (const record of allRecords) {
    const code = resolveStoreCode(record, aliasIndex, syntheticCodes);
    const sucursal = sucursales.get(code);

    if (!sucursal) {
      continue;
    }

    await prisma.registro.create({
      data: {
        id: `${record.tipo}:${record.recordId}`,
        tipo: record.tipo,
        fecha: toDateOnly(record.date),
        hora: toDateTime(record.hora),
        sucursalId: sucursal.id,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("Prisma seed failed:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
