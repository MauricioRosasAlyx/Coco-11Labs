import { NextResponse } from "next/server";
import { getReportData, type ReportDataInput } from "../../../../src/server/reports/reportData.ts";

function readInputFromUrl(request: Request): ReportDataInput {
  const { searchParams } = new URL(request.url);

  return {
    categoria: searchParams.get("categoria"),
    sucursal: searchParams.get("sucursal"),
    rango: searchParams.get("rango"),
    desde: searchParams.get("desde"),
    hasta: searchParams.get("hasta"),
  };
}

export async function GET(request: Request) {
  try {
    const result = await getReportData(readInputFromUrl(request));
    return NextResponse.json(result);
  } catch (error) {
    console.error("Report data GET error:", error);
    return NextResponse.json(
      { error: "No se pudo obtener la data del reporte." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ReportDataInput;
    const result = await getReportData(body ?? {});
    return NextResponse.json(result);
  } catch (error) {
    console.error("Report data POST error:", error);
    return NextResponse.json(
      { error: "No se pudo obtener la data del reporte." },
      { status: 500 },
    );
  }
}
