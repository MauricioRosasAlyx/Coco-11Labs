import { findStoresByQuery } from "./stores.ts";
import { sanitizeStoreName } from "../../storeName.ts";
import { sqlite } from "./sqlite.ts";

type DateRangeInput = {
  fromDate?: string | null;
  toDate?: string | null;
  storeQuery?: string | null;
  take?: number;
};

type RegistroRow = {
  id: string;
  fecha: string;
  hora: string;
  sucursalId: string;
  storeCode: number;
  storeName: string;
};

function buildWhereClause(input: DateRangeInput, storeIds?: string[]) {
  const clauses = [`r.tipo = ?`];
  const params: Array<string | number> = ["cierre"];

  if (input.fromDate) {
    clauses.push(`r.fecha >= ?`);
    params.push(`${input.fromDate}T00:00:00.000Z`);
  }

  if (input.toDate) {
    clauses.push(`r.fecha <= ?`);
    params.push(`${input.toDate}T23:59:59.999Z`);
  }

  if (storeIds && storeIds.length > 0) {
    clauses.push(`r.sucursalId IN (${storeIds.map(() => "?").join(", ")})`);
    params.push(...storeIds);
  }

  if (storeIds && storeIds.length === 0) {
    clauses.push(`1 = 0`);
  }

  return {
    whereSql: clauses.join(" AND "),
    params,
  };
}

export async function findClosingRecords(input: DateRangeInput = {}) {
  const stores = await findStoresByQuery(input.storeQuery);
  const storeIds = input.storeQuery ? stores.map((store) => store.id) : undefined;
  const { whereSql, params } = buildWhereClause(input, storeIds);
  const limitSql = typeof input.take === "number" ? ` LIMIT ${Math.max(1, input.take)}` : "";
  const rows = sqlite
    .prepare(
      `
      SELECT
        r.id,
        r.fecha,
        r.hora,
        r.sucursalId,
        s.code AS storeCode,
        s.name AS storeName
      FROM "registro" r
      INNER JOIN "Sucursal" s ON s.id = r.sucursalId
      WHERE ${whereSql}
      ORDER BY r.fecha ASC, r.hora ASC${limitSql}
      `,
    )
    .all(...params) as RegistroRow[];

  return rows.map((row) => ({
    id: row.id,
    fecha: new Date(row.fecha),
    hora: new Date(row.hora),
    sucursalId: row.sucursalId,
    sucursal: {
      code: row.storeCode,
      name: sanitizeStoreName(row.storeName),
    },
  }));
}
