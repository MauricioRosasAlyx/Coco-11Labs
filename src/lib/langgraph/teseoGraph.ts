import { HumanMessage, type BaseMessage } from "@langchain/core/messages";
import { Annotation, END, START, StateGraph } from "@langchain/langgraph";
import { listSucursalMapEntries } from "../../sucursalesMap";
import type { ChatHistoryItem } from "../chatTypes";
import { getReportData } from "../../server/reports/reportData";

type Intent = "lookup_aperturas" | "lookup_cierres" | "answer";

type ParsedInput = {
  range: string | null;
  fromDate: string | null;
  toDate: string | null;
  storeQuery: string | null;
  category: string | null;
};

const TeseoState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (left, right) => left.concat(Array.isArray(right) ? right : [right]),
    default: () => [],
  }),
  userMessage: Annotation<string>(),
  history: Annotation<ChatHistoryItem[]>({
    reducer: (_left, right) => right,
    default: () => [],
  }),
  intent: Annotation<Intent>({
    reducer: (_left, right) => right,
    default: () => "answer",
  }),
  parsedInput: Annotation<ParsedInput>({
    reducer: (_left, right) => right,
    default: () => ({
      range: null,
      fromDate: null,
      toDate: null,
      storeQuery: null,
      category: null,
    }),
  }),
  toolResultText: Annotation<string | null>({
    reducer: (_left, right) => right,
    default: () => null,
  }),
  response: Annotation<string>({
    reducer: (_left, right) => right,
    default: () => "",
  }),
});

type TeseoStateType = typeof TeseoState.State;
const DEFAULT_DATE_RANGE_LABEL = "Sin rango seleccionado";

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function inferIntent(message: string): Intent {
  const text = normalizeText(message);

  if (text.includes("apertura")) {
    return "lookup_aperturas";
  }

  if (text.includes("cierre")) {
    return "lookup_cierres";
  }

  return "answer";
}

function inferCategory(message: string) {
  const text = normalizeText(message);

  if (text.includes("top") || text.includes("ranking")) {
    return "top";
  }

  if (text.includes("apertura")) {
    return "aperturas";
  }

  if (text.includes("cierre")) {
    return "cierres";
  }

  return "open-close";
}

function inferStore(message: string) {
  const normalizedMessage = normalizeText(message);

  for (const entry of listSucursalMapEntries()) {
    const candidates = [
      entry.storeCode ?? "",
      entry.canonicalLabel,
      ...entry.allAliases,
    ].map(normalizeText);

    if (candidates.some((candidate) => candidate && normalizedMessage.includes(candidate))) {
      return entry.canonicalLabel;
    }
  }

  const explicitStoreMatch = message.match(
    /(?:sucursal|tienda)\s+([a-z0-9áéíóúñ.\-_ ]{3,})/i,
  );

  return explicitStoreMatch?.[1]?.trim() ?? null;
}

function inferRange(message: string) {
  const compactMessage = message.replace(/\s+/g, " ").trim();
  const rangeMatch = compactMessage.match(
    /(?:del|de)\s+(.+?)\s+(?:al|a)\s+(.+?)(?:$|,|\.)/i,
  );

  if (rangeMatch) {
    return `${rangeMatch[1]} al ${rangeMatch[2]}`;
  }

  const singleDateMatch = compactMessage.match(
    /(\d{1,2}\s+de\s+[a-záéíóúñ]+(?:\s+de\s+\d{4})?)/i,
  );

  return singleDateMatch?.[1] ?? null;
}

function isReportWorkbookRow(
  row: unknown,
): row is { date: string; storeLabel: string; eventTime: string } {
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

function formatLookupSummary(
  rows: unknown[],
  rangeLabel: string | null | undefined,
  label: string,
) {
  const safeRows = rows.filter(isReportWorkbookRow);
  const sampleLines = safeRows
    .slice(0, 5)
    .map((item) => `- ${item.date} | ${item.storeLabel} | ${item.eventTime}`)
    .join("\n");
  const total = safeRows.length;
  const matchingStores = new Set(safeRows.map((row) => row.storeLabel)).size;

  return [
    `Encontre ${total} ${label}.`,
    `Rango aplicado: ${rangeLabel ?? DEFAULT_DATE_RANGE_LABEL}.`,
    `Sucursales con coincidencias: ${matchingStores}.`,
    sampleLines ? `Muestra:\n${sampleLines}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

const classifyNode = async (state: TeseoStateType) => {
  const intent = inferIntent(state.userMessage);

  return {
    intent,
    parsedInput: {
      range: inferRange(state.userMessage),
      fromDate: null,
      toDate: null,
      storeQuery: inferStore(state.userMessage),
      category: inferCategory(state.userMessage),
    },
  };
};

const executeNode = async (state: TeseoStateType) => {
  if (state.intent === "lookup_aperturas") {
    const result = await getReportData({
      categoria: "aperturas",
      rango: state.parsedInput.range,
      desde: state.parsedInput.fromDate,
      hasta: state.parsedInput.toDate,
      sucursal: state.parsedInput.storeQuery,
    });

    return {
      toolResultText: formatLookupSummary(
        Array.isArray(result.rows) ? result.rows : [],
        result.summary?.dateRange,
        "aperturas",
      ),
    };
  }

  if (state.intent === "lookup_cierres") {
    const result = await getReportData({
      categoria: "cierres",
      rango: state.parsedInput.range,
      desde: state.parsedInput.fromDate,
      hasta: state.parsedInput.toDate,
      sucursal: state.parsedInput.storeQuery,
    });

    return {
      toolResultText: formatLookupSummary(
        Array.isArray(result.rows) ? result.rows : [],
        result.summary?.dateRange,
        "cierres",
      ),
    };
  }

  return {
    toolResultText: null,
  };
};

const respondNode = async (state: TeseoStateType) => {
  if (state.toolResultText) {
    return {
      response: state.toolResultText,
    };
  }

  return {
    response: "",
  };
};

export function createTeseoGraph() {
  return new StateGraph(TeseoState)
    .addNode("classify", classifyNode)
    .addNode("execute", executeNode)
    .addNode("respond", respondNode)
    .addEdge(START, "classify")
    .addEdge("classify", "execute")
    .addEdge("execute", "respond")
    .addEdge("respond", END)
    .compile();
}

export async function runTeseoGraph(input: {
  message: string;
  history: ChatHistoryItem[];
}) {
  const graph = createTeseoGraph();

  const result = await graph.invoke({
    messages: [new HumanMessage(input.message)],
    userMessage: input.message,
    history: input.history,
  });

  return {
    message: result.response,
  };
}
