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

export type ReportWorkbookData = {
  rows?: unknown[];
  summary?: {
    dateRange?: string | null;
  } | null;
};

type CellValue = string | number | null;

type Cell = {
  value: CellValue;
  style?: number;
};

type SheetRow = Array<CellValue | Cell>;

type DatasetKind = "open-close" | "aperturas" | "cierres" | "top";

type EventRow = {
  date: string;
  storeLabel: string;
  eventTime: string;
};

type OpenCloseRow = {
  date: string;
  storeLabel: string;
  openingTime: string | null;
  closingTime: string | null;
  opensOnTime: boolean | null;
  closesOnTime: boolean | null;
  complianceStatus?: string;
};

type TopRow = {
  storeLabel: string;
  evaluatedCount: number;
  compliantCount: number;
  complianceRate: number;
  missingCount: number;
};

const MIME_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

export function createReportWorkbook(
  input: ReportWorkbookInput,
  reportData?: ReportWorkbookData,
): ReportWorkbookFile {
  const generatedAt = new Date();
  const category = normalizeDatasetKind(input.categoria);
  const storeLabel = input.sucursal?.trim() || "Todas las sucursales";
  const rangeLabel = reportData?.summary?.dateRange || getReportRangeLabel(input);
  const rows = Array.isArray(reportData?.rows) ? reportData.rows : [];

  const config = buildWorkbookConfig(category, storeLabel, rangeLabel, rows);
  const files = buildWorkbookFiles([
    {
      name: config.sheetName,
      rows: config.rows,
      columns: config.columns,
    },
  ]);

  return {
    blob: new Blob([createZip(files)], { type: MIME_TYPE }),
    filename: `${slugify(`reporte-${category}-${storeLabel}-${rangeLabel}`)}.xlsx`,
    title: config.title,
    range: rangeLabel,
    category,
    generatedAt: generatedAt.toLocaleString("es-MX"),
  };
}

function buildWorkbookConfig(
  category: DatasetKind,
  storeLabel: string,
  rangeLabel: string,
  rows: unknown[],
) {
  if (category === "aperturas") {
    return {
      title:
        storeLabel === "Todas las sucursales"
          ? "Reporte de aperturas"
          : `Reporte de aperturas - ${storeLabel}`,
      sheetName: "Aperturas",
      rows: buildEventRows("Hora", rows.filter(isEventRow)),
      columns: [16, 34, 18],
    };
  }

  if (category === "cierres") {
    return {
      title:
        storeLabel === "Todas las sucursales"
          ? "Reporte de cierres"
          : `Reporte de cierres - ${storeLabel}`,
      sheetName: "Cierres",
      rows: buildEventRows("Hora", rows.filter(isEventRow)),
      columns: [16, 34, 18],
    };
  }

  if (category === "top") {
    return {
      title:
        storeLabel === "Todas las sucursales"
          ? "Reporte Top Cumplimiento"
          : `Reporte Top Cumplimiento - ${storeLabel}`,
      sheetName: "Top",
      rows: buildTopRows(rows.filter(isTopRow)),
      columns: [34, 16, 16, 16, 16],
    };
  }

  return {
    title:
      storeLabel === "Todas las sucursales"
        ? "Reporte Open-Close"
        : `Reporte Open-Close - ${storeLabel}`,
    sheetName: "Open-Close",
    rows: buildOpenCloseRows(rows.filter(isOpenCloseRow)),
    columns: [16, 34, 18, 18, 18, 18, 22],
  };
}

function buildEventRows(timeLabel: string, rows: EventRow[]): SheetRow[] {
  return [
    [
      { value: "Fecha", style: 2 },
      { value: "Sucursal", style: 2 },
      { value: timeLabel, style: 2 },
    ],
    ...(rows.length > 0
      ? rows.map((row) => [row.date, row.storeLabel, formatClockTime(row.eventTime)])
      : [["Sin resultados", null, null]]),
  ];
}

function buildOpenCloseRows(rows: OpenCloseRow[]): SheetRow[] {
  return [
    [
      { value: "Fecha", style: 2 },
      { value: "Sucursal", style: 2 },
      { value: "Hora apertura", style: 2 },
      { value: "Cumplio apertura", style: 2 },
      { value: "Hora cierre", style: 2 },
      { value: "Cumplio cierre", style: 2 },
      { value: "Cumplimiento", style: 2 },
    ],
    ...(rows.length > 0
      ? rows.map((row) => [
          row.date,
          row.storeLabel,
          formatClockTime(row.openingTime),
          formatComplianceFlag(row.opensOnTime, "apertura"),
          formatClockTime(row.closingTime),
          formatComplianceFlag(row.closesOnTime, "cierre"),
          row.complianceStatus ?? "Sin dato",
        ])
      : [["Sin resultados", null, null, null, null, null, null]]),
  ];
}

function buildTopRows(rows: TopRow[]): SheetRow[] {
  return [
    [
      { value: "Sucursal", style: 2 },
      { value: "Evaluados", style: 2 },
      { value: "Cumplieron", style: 2 },
      { value: "Cumplimiento", style: 2 },
      { value: "Sin dato", style: 2 },
    ],
    ...(rows.length > 0
      ? rows.map((row) => [
          row.storeLabel,
          row.evaluatedCount,
          row.compliantCount,
          formatPercentage(row.complianceRate),
          row.missingCount,
        ])
      : [["Sin resultados", null, null, null, null]]),
  ];
}

function isEventRow(row: unknown): row is EventRow {
  if (!row || typeof row !== "object") {
    return false;
  }

  const candidate = row as Record<string, unknown>;
  return (
    typeof candidate.date === "string" &&
    typeof candidate.storeLabel === "string" &&
    typeof candidate.eventTime === "string"
  );
}

function isOpenCloseRow(row: unknown): row is OpenCloseRow {
  if (!row || typeof row !== "object") {
    return false;
  }

  const candidate = row as Record<string, unknown>;
  return (
    typeof candidate.date === "string" &&
    typeof candidate.storeLabel === "string" &&
    ("openingTime" in candidate || "closingTime" in candidate)
  );
}

function isTopRow(row: unknown): row is TopRow {
  if (!row || typeof row !== "object") {
    return false;
  }

  const candidate = row as Record<string, unknown>;
  return (
    typeof candidate.storeLabel === "string" &&
    typeof candidate.evaluatedCount === "number" &&
    typeof candidate.compliantCount === "number" &&
    typeof candidate.complianceRate === "number" &&
    typeof candidate.missingCount === "number"
  );
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

function getReportRangeLabel(input: ReportWorkbookInput) {
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

  if (input.fecha?.trim()) {
    return input.fecha.trim();
  }

  return "Sin datos";
}

function formatPercentage(value: number) {
  return `${(value * 100).toFixed(1)}%`;
}

function formatClockTime(value: string | null) {
  if (!value) {
    return "Sin dato";
  }

  const [hours = "0", minutes = "0", seconds = "0"] = value.split(":");
  return `${hours}:${minutes}:${seconds}`;
}

function formatComplianceFlag(
  value: boolean | null | undefined,
  label: "apertura" | "cierre",
) {
  if (value === null || value === undefined) {
    return `Sin ${label}`;
  }

  return value ? "Si" : "No";
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
    <sheetView workbookViewId="0"/>
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
  <fonts count="2">
    <font><sz val="11"/><name val="Aptos"/></font>
    <font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Aptos"/></font>
  </fonts>
  <fills count="3">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF1D4ED8"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="3">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFill="1" applyFont="1"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFill="1" applyFont="1"/>
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
