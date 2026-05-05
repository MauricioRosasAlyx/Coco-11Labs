export function extractStoreCode(value?: string | null) {
  const normalizedValue = value?.trim() ?? "";
  const match = normalizedValue.match(/^(\d{4,})\b/);

  if (!match) {
    return null;
  }

  return Number(match[1]);
}

export function sanitizeStoreName(value?: string | null) {
  const normalizedValue = value?.trim() ?? "";

  if (!normalizedValue) {
    return "";
  }

  const cleanedValue = normalizedValue
    .replace(/^\d{4,}\s*(?:-\s*)?/, "")
    .trim();

  return cleanedValue || normalizedValue;
}
