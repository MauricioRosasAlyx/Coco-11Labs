export type ReportDataRequest = {
  categoria?: string | null;
  sucursal?: string | null;
  rango?: string | null;
  desde?: string | null;
  hasta?: string | null;
};

export async function fetchReportData(input: ReportDataRequest) {
  const response = await fetch("/api/reports/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error(`Report data request failed with status ${response.status}`);
  }

  return response.json();
}
