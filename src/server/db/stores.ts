import { sqlite } from "./sqlite.ts";
import { sanitizeStoreName } from "../../storeName.ts";

export type StoreSearchResult = {
  id: string;
  code: number;
  name: string;
};

export function normalizeStoreSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

export async function listStores() {
  const rows = sqlite
    .prepare(
      `
      SELECT id, code, name
      FROM "Sucursal"
      ORDER BY code ASC, name ASC
      `,
    )
    .all() as StoreSearchResult[];

  return rows.map((store) => ({
    ...store,
    name: sanitizeStoreName(store.name),
  }));
}

export async function findStoresByQuery(query?: string | null) {
  const normalizedQuery = normalizeStoreSearch(query ?? "");
  const stores = await listStores();

  if (!normalizedQuery) {
    return stores;
  }

  return stores.filter((store) => {
    const haystack = normalizeStoreSearch(`${store.code} ${store.name}`);
    return haystack.includes(normalizedQuery);
  });
}

export async function findPrimaryStoreByQuery(query?: string | null) {
  const matches = await findStoresByQuery(query);
  return matches[0] ?? null;
}
