import { DatabaseSync } from "node:sqlite";
import path from "node:path";

const databasePath = path.join(process.cwd(), "prisma", "dev.db");

const globalForDatabase = globalThis as typeof globalThis & {
  teseoSqlite?: DatabaseSync;
};

export const sqlite =
  globalForDatabase.teseoSqlite ?? new DatabaseSync(databasePath);

if (process.env.NODE_ENV !== "production") {
  globalForDatabase.teseoSqlite = sqlite;
}
