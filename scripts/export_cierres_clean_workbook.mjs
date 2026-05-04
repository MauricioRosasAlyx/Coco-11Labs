import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const [, , inputJsonPath, outputXlsxPath] = process.argv;

if (!inputJsonPath || !outputXlsxPath) {
  throw new Error(
    "Usage: node export_cierres_clean_workbook.mjs <input-json> <output-xlsx>",
  );
}

const rawJson = await fs.readFile(inputJsonPath, "utf8");
const knowledgeBase = JSON.parse(rawJson);

const workbook = Workbook.create();
const summarySheet = workbook.worksheets.add("Resumen");
const closingsSheet = workbook.worksheets.add("Cierres limpios");
const duplicatesSheet = workbook.worksheets.add("Duplicados");

const { meta, records, discardedEvents, stores, summaryByDate } = knowledgeBase;
const uniqueDates = new Set(records.map((record) => record.date)).size;
const totalDiscarded = records.reduce(
  (sum, record) => sum + Number(record.discardedCount || 0),
  0,
);

summarySheet.getRange("A1").value = "Base limpia de cierres Propasa";
summarySheet.getRange("A1").style = {
  font: { bold: true, size: 16, color: "#FFFFFF" },
  fill: { color: "#1D4ED8" },
  horizontalAlignment: "left",
};
summarySheet.getRange("A3:B10").values = [
  ["Generado", meta.generatedAt],
  ["Archivo fuente", meta.sourceWorkbook],
  ["Hoja fuente", meta.sourceSheet],
  ["Regla de limpieza", "Ultima activacion por sucursal y fecha"],
  ["Cierres limpios", records.length],
  ["Eventos descartados", totalDiscarded],
  ["Sucursales", stores.length],
  ["Dias cubiertos", uniqueDates],
];
summarySheet.getRange("A12:C12").values = [["Fecha", "Cierres", "Descartados"]];
summarySheet.getRange("A12:C12").style = {
  font: { bold: true, color: "#FFFFFF" },
  fill: { color: "#1E40AF" },
};
summarySheet.getRange(`A13:C${12 + summaryByDate.length}`).values = summaryByDate.map(
  (item) => [item.date, item.cleanClosings, item.discardedEvents],
);

closingsSheet.getRange("A1:G1").values = [[
  "Fecha",
  "Sucursal",
  "Hora de cierre",
  "Eventos detectados",
  "Descartados",
  "Horas descartadas",
  "Fila origen",
]];
closingsSheet.getRange("A1:G1").style = {
  font: { bold: true, color: "#FFFFFF" },
  fill: { color: "#1E40AF" },
};
closingsSheet.getRange(`A2:G${records.length + 1}`).values = records.map((record) => [
  record.date,
  record.storeLabel,
  record.closingTime,
  record.rawEventCount,
  record.discardedCount,
  record.discardedTimes.join(", "),
  record.sourceRowNumber,
]);

duplicatesSheet.getRange("A1:G1").values = [[
  "Fecha",
  "Sucursal",
  "Hora descartada",
  "Hora conservada",
  "Segundos vs cierre",
  "Fila origen",
  "Motivo",
]];
duplicatesSheet.getRange("A1:G1").style = {
  font: { bold: true, color: "#FFFFFF" },
  fill: { color: "#1E40AF" },
};

if (discardedEvents.length > 0) {
  duplicatesSheet.getRange(`A2:G${discardedEvents.length + 1}`).values =
    discardedEvents.map((item) => [
      item.date,
      item.storeLabel,
      item.time,
      item.keptClosingTime,
      item.secondsFromKeptClosing,
      item.sourceRowNumber,
      item.reason,
    ]);
} else {
  duplicatesSheet.getRange("A2").value = "No hay eventos descartados.";
}

for (const sheet of workbook.worksheets.items) {
  sheet.freezePanes.freezeRows(1);
}

await fs.mkdir(path.dirname(outputXlsxPath), { recursive: true });
const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputXlsxPath);

const imported = await SpreadsheetFile.importXlsx(
  await FileBlob.load(outputXlsxPath),
);
const summaryCheck = await imported.inspect({
  kind: "table",
  range: "Resumen!A1:C18",
  include: "values",
  tableMaxRows: 18,
  tableMaxCols: 6,
});

console.log(summaryCheck.ndjson);
