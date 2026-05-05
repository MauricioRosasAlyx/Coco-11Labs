"use client";

import { useConversation } from "@elevenlabs/react";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  createReportWorkbook,
  type ReportWorkbookData,
  type ReportWorkbookFile,
  type ReportWorkbookInput,
} from "./reportExcel";
import type { ChatApiReport } from "./lib/chatTypes";
import { fetchReportData } from "./lib/reportApi";
import { listSucursalMapEntries } from "./sucursalesMap";

type ToolDetails = Record<string, unknown>;

type ChatMessage = {
  id: string;
  role: "user" | "agent" | "system";
  text: string;
  isStreaming?: boolean;
};

type ReportDownload = Omit<ReportWorkbookFile, "blob"> & {
  id: string;
  url: string;
};

type AssistantTab = "voice" | "chat";
type SessionMode = AssistantTab | null;

type ConversationMessage = {
  source?: "ai" | "user";
  role?: "agent" | "user";
  message?: string;
  event_id?: number;
};

type ReportApiPayload = {
  rows?: unknown[];
  summary?: {
    dateRange?: unknown;
  } | null;
};

type OpenCloseSummaryRow = {
  date: string;
  storeLabel: string;
  openingTime: string | null;
  closingTime: string | null;
  complianceStatus: string;
};

type TopSummaryRow = {
  storeLabel: string;
  complianceRate: number;
  compliantCount: number;
  evaluatedCount: number;
};

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

function isOpenCloseSummaryRow(row: unknown): row is OpenCloseSummaryRow {
  if (!row || typeof row !== "object") {
    return false;
  }

  const candidate = row as Record<string, unknown>;
  return (
    typeof candidate.date === "string" &&
    typeof candidate.storeLabel === "string" &&
    typeof candidate.complianceStatus === "string" &&
    (typeof candidate.openingTime === "string" || candidate.openingTime === null) &&
    (typeof candidate.closingTime === "string" || candidate.closingTime === null)
  );
}

function isTopSummaryRow(row: unknown): row is TopSummaryRow {
  if (!row || typeof row !== "object") {
    return false;
  }

  const candidate = row as Record<string, unknown>;
  return (
    typeof candidate.storeLabel === "string" &&
    typeof candidate.complianceRate === "number" &&
    typeof candidate.compliantCount === "number" &&
    typeof candidate.evaluatedCount === "number"
  );
}

function buildLookupSummaryFromRows(
  categoryLabel: string,
  reportData: ReportApiPayload,
) {
  const safeRows = Array.isArray(reportData.rows)
    ? reportData.rows.filter(isReportWorkbookRow)
    : [];
  const sampleLines = safeRows
    .slice(0, 5)
    .map((row) => `- ${row.date} | ${row.storeLabel} | ${row.eventTime}`)
    .join("\n");
  const total = safeRows.length;
  const distinctStores = new Set(safeRows.map((row) => row.storeLabel)).size;
  const rangeLabel =
    typeof reportData.summary?.dateRange === "string"
      ? reportData.summary.dateRange
      : DEFAULT_DATE_RANGE_LABEL;

  return [
    `Encontre ${total} ${categoryLabel}.`,
    `Rango aplicado: ${rangeLabel}.`,
    `Sucursales con coincidencias: ${distinctStores}.`,
    sampleLines ? `Muestra:\n${sampleLines}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildOpenCloseSummary(reportData: ReportApiPayload) {
  const safeRows = Array.isArray(reportData.rows)
    ? reportData.rows.filter(isOpenCloseSummaryRow)
    : [];
  const sampleLines = safeRows
    .slice(0, 5)
    .map(
      (row) =>
        `- ${row.date} | ${row.storeLabel} | apertura: ${row.openingTime ?? "sin dato"} | cierre: ${row.closingTime ?? "sin dato"} | ${row.complianceStatus}`,
    )
    .join("\n");
  const rangeLabel =
    typeof reportData.summary?.dateRange === "string"
      ? reportData.summary.dateRange
      : DEFAULT_DATE_RANGE_LABEL;

  return [
    `Encontre ${safeRows.length} registros open-close.`,
    `Rango aplicado: ${rangeLabel}.`,
    sampleLines ? `Muestra:\n${sampleLines}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildTopSummary(reportData: ReportApiPayload) {
  const safeRows = Array.isArray(reportData.rows)
    ? reportData.rows.filter(isTopSummaryRow)
    : [];
  const sampleLines = safeRows
    .slice(0, 5)
    .map(
      (row, index) =>
        `${index + 1}. ${row.storeLabel}: ${row.complianceRate}% (${row.compliantCount}/${row.evaluatedCount})`,
    )
    .join("\n");
  const rangeLabel =
    typeof reportData.summary?.dateRange === "string"
      ? reportData.summary.dateRange
      : DEFAULT_DATE_RANGE_LABEL;

  return [
    `Encontre ${safeRows.length} sucursales en el ranking.`,
    `Rango aplicado: ${rangeLabel}.`,
    sampleLines ? `Top actual:\n${sampleLines}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

const ELEVENLABS_AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;
const DEFAULT_DATE_RANGE_LABEL = "Sin rango seleccionado";
const STREAMING_PLACEHOLDER_TEXT = "Teseo esta respondiendo...";

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
}

function getStringValue(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function getNumberValue(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function inferStoreFromMessage(message: string) {
  const normalizedMessage = normalizeText(message);

  for (const entry of listSucursalMapEntries()) {
    const candidates = [
      entry.storeCode ?? "",
      entry.canonicalLabel,
      ...entry.allAliases,
    ].map(normalizeText);

    if (
      candidates.some(
        (candidate) => candidate && normalizedMessage.includes(candidate),
      )
    ) {
      return entry.canonicalLabel;
    }
  }

  const explicitStoreMatch = message.match(
    /(?:sucursal|tienda)\s+([a-z0-9áéíóúñ.\-_ ]{3,})/i,
  );

  return explicitStoreMatch?.[1]?.trim() ?? null;
}

function inferRangeFromMessage(message: string) {
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

function inferDbCategoryFromMessage(message: string) {
  const normalizedMessage = normalizeText(message);

  if (normalizedMessage.includes("top") || normalizedMessage.includes("ranking")) {
    return "top";
  }

  if (normalizedMessage.includes("apertura")) {
    return "aperturas";
  }

  if (normalizedMessage.includes("cierre")) {
    return "cierres";
  }

  if (normalizedMessage.includes("open-close") || normalizedMessage.includes("cumpl")) {
    return "open-close";
  }

  return null;
}

async function buildDbContextForMessage(message: string) {
  const categoria = inferDbCategoryFromMessage(message);

  if (!categoria) {
    return null;
  }

  const reportData = (await fetchReportData({
    categoria,
    sucursal: inferStoreFromMessage(message),
    rango: inferRangeFromMessage(message),
  })) as ReportApiPayload;

  if (!Array.isArray(reportData.rows) || reportData.rows.length === 0) {
    return null;
  }

  const summary =
    categoria === "aperturas"
      ? buildLookupSummaryFromRows("aperturas", reportData)
      : categoria === "cierres"
        ? buildLookupSummaryFromRows("cierres", reportData)
        : categoria === "top"
          ? buildTopSummary(reportData)
          : buildOpenCloseSummary(reportData);

  return [
    "Contexto interno de base de datos para responder mejor al usuario.",
    "Usa esto solo como apoyo factual y no menciones que recibiste una actualizacion interna.",
    summary,
  ].join("\n");
}

function isKnowledgeFallbackResponse(message: string) {
  const normalizedMessage = normalizeText(message);

  return (
    normalizedMessage.includes("no se") ||
    normalizedMessage.includes("no sab") ||
    normalizedMessage.includes("no tengo esa informacion") ||
    normalizedMessage.includes("no tengo informacion") ||
    normalizedMessage.includes("no cuento con esa informacion") ||
    normalizedMessage.includes("no encuentro esa informacion") ||
    normalizedMessage.includes("no puedo responder") ||
    normalizedMessage.includes("no puedo confirmar") ||
    normalizedMessage.includes("desconozco") ||
    normalizedMessage.includes("no dispongo de")
  );
}

function getDateFilterValues(parameters?: ToolDetails) {
  const range =
    getStringValue(parameters?.rango) ??
    getStringValue(parameters?.fecha) ??
    getStringValue(parameters?.periodo) ??
    getStringValue(parameters?.rango_fechas) ??
    getStringValue(parameters?.rango_fecha) ??
    getStringValue(parameters?.date_range) ??
    getStringValue(parameters?.dateRange);
  const fromDate =
    getStringValue(parameters?.desde) ??
    getStringValue(parameters?.fecha_inicio) ??
    getStringValue(parameters?.inicio) ??
    getStringValue(parameters?.from) ??
    getStringValue(parameters?.start_date) ??
    getStringValue(parameters?.startDate);
  const toDate =
    getStringValue(parameters?.hasta) ??
    getStringValue(parameters?.fecha_fin) ??
    getStringValue(parameters?.fin) ??
    getStringValue(parameters?.to) ??
    getStringValue(parameters?.end_date) ??
    getStringValue(parameters?.endDate);

  return { range, fromDate, toDate };
}

function mergeToolParameters(
  parameters: ToolDetails | undefined,
  overrides: ToolDetails,
) {
  return {
    ...(parameters ?? {}),
    ...overrides,
  };
}

function findLastStreamingMessageIndex(messages: ChatMessage[]) {
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    if (messages[index].isStreaming) {
      return index;
    }
  }

  return -1;
}

function getLastMessage(messages: ChatMessage[]) {
  return messages.length > 0 ? messages[messages.length - 1] : undefined;
}

function isReportToolName(value: string) {
  const normalizedValue = normalizeText(value);

  return (
    normalizedValue === "reporte" ||
    normalizedValue === "report" ||
    normalizedValue === "generar_reporte" ||
    normalizedValue === "reporte_open_close" ||
    normalizedValue === "generar_excel_open_close" ||
    normalizedValue === "reporte_top" ||
    normalizedValue === "generar_excel_top" ||
    normalizedValue === "reporte_aperturas" ||
    normalizedValue === "generar_excel_aperturas" ||
    normalizedValue === "reporte_cierres" ||
    normalizedValue === "generar_excel_cierres"
  );
}

function getReportInputFromParameters(
  parameters?: ToolDetails,
): ReportWorkbookInput {
  const dateFilters = getDateFilterValues(parameters);
  const rango = dateFilters.range ?? null;
  const categoria = getStringValue(parameters?.categoria) ?? "open-close";
  const sucursal =
    getStringValue(parameters?.sucursal) ??
    getStringValue(parameters?.tienda) ??
    getStringValue(parameters?.nombre);
  const desde = dateFilters.fromDate;
  const hasta = dateFilters.toDate;

  return { rango, categoria, sucursal, desde, hasta };
}

function isAperturasLookupToolName(value: string) {
  const normalizedValue = normalizeText(value);

  return (
    normalizedValue === "consultar_aperturas" ||
    normalizedValue === "consulta_aperturas" ||
    normalizedValue === "resumen_aperturas" ||
    normalizedValue === "aperturas"
  );
}

function isCierresLookupToolName(value: string) {
  const normalizedValue = normalizeText(value);

  return (
    normalizedValue === "consultar_cierres" ||
    normalizedValue === "consulta_cierres" ||
    normalizedValue === "resumen_cierres" ||
    normalizedValue === "cierres"
  );
}

function getAperturasLookupInputFromParameters(parameters?: ToolDetails) {
  const parsedLimit =
    getNumberValue(parameters?.limite) ??
    Number(getStringValue(parameters?.limite) ?? Number.NaN);
  const dateFilters = getDateFilterValues(parameters);

  return {
    range: dateFilters.range,
    fromDate: dateFilters.fromDate,
    toDate: dateFilters.toDate,
    storeQuery:
      getStringValue(parameters?.sucursal) ??
      getStringValue(parameters?.tienda) ??
      getStringValue(parameters?.nombre),
    limit: Number.isFinite(parsedLimit) ? parsedLimit : null,
  };
}

function decodeBase64ToBlob(base64: string, mimeType: string) {
  const binary = window.atob(base64);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new Blob([bytes], { type: mimeType });
}

function buildReportDownload(report: ChatApiReport): ReportDownload {
  const blob = decodeBase64ToBlob(report.contentBase64, report.mimeType);

  return {
    id: crypto.randomUUID(),
    filename: report.filename,
    title: report.title,
    range: report.range,
    category: report.category,
    generatedAt: report.generatedAt,
    url: URL.createObjectURL(blob),
  };
}

function PresenterVideo(props: {
  status: string;
  onStart: () => void;
  onStop: () => void;
}) {
  const { status, onStart, onStop } = props;
  const isDisconnected = status === "disconnected" || status === "idle";
  const isConnecting = status === "connecting";
  const [contactImageVisible, setContactImageVisible] = useState(true);

  return (
    <div className="presenter-video">
      <div className="video-controls">
        <div className="call-status-info">
          <span className="call-status-label">Llamada</span>
          <span className="call-status-value">{status}</span>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {!isDisconnected ? (
            <button
              onClick={onStop}
              className="hang-up-btn"
              aria-label="Colgar"
              title="Colgar"
            >
              ⏹
            </button>
          ) : null}
        </div>
      </div>

      {isDisconnected ? (
        <div className="disconnect-screen">
          {contactImageVisible ? (
            <img
              src="/teseo-contact.png"
              alt="Teseo"
              onError={() => setContactImageVisible(false)}
              className="contact-image"
            />
          ) : (
            <div className="fallback-avatar">
              <div className="avatar-eyes avatar-eye-left" />
              <div className="avatar-eyes avatar-eye-right" />
              <div className="avatar-cheek avatar-cheek-left" />
              <div className="avatar-cheek avatar-cheek-right" />
              <div className="avatar-mouth" />
              <div className="avatar-pupil avatar-pupil-left" />
              <div className="avatar-pupil avatar-pupil-right" />
              <div className="avatar-nose" />
              <div className="avatar-chin-line" />
              <div className="avatar-tongue" />
            </div>
          )}
          <div className="contact-info">
            <div className="contact-name">Teseo</div>
            <div className="contact-description">
              Contacto virtual disponible para iniciar llamada
            </div>
            <button
              onClick={onStart}
              className="call-btn"
              aria-label="Llamar a Teseo"
              title="Llamar a Teseo"
            >
              <span>Llamar</span>
            </button>
          </div>
        </div>
      ) : isConnecting ? (
        <div className="connecting-state" role="status" aria-live="polite">
          <img
            src="/teseo-connecting.png"
            alt="Conectando con Teseo"
            className="connecting-image"
          />
          <div className="connecting-overlay">
            <span className="connecting-loader" aria-hidden="true" />
            <span className="connecting-text">Conectando con Teseo</span>
          </div>
        </div>
      ) : (
        <img src="/teseo-live.jpeg" alt="Teseo" className="live-avatar-image" />
      )}
    </div>
  );
}

function ChatPanel(props: {
  status: string;
  draft: string;
  messages: ChatMessage[];
  onDraftChange: (value: string) => void;
  onSend: () => void | Promise<void>;
}) {
  const { status, draft, messages, onDraftChange, onSend } = props;
  const isBusy = status === "loading";
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = messagesRef.current;
    const end = messagesEndRef.current;

    if (!container || !end) {
      return;
    }

    requestAnimationFrame(() => {
      end.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
    });
  }, [messages]);

  return (
    <div className="chat-card">

      <div className="chat-messages" ref={messagesRef}>
        {messages.length > 0 ? (
          <>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-bubble chat-bubble-${message.role} ${
                  message.isStreaming ? "chat-bubble-streaming" : ""
                }`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </>
        ) : (
          <div className="chat-empty">
            Aqui apareceran los mensajes de texto de la conversacion.
          </div>
        )}
      </div>

      <div className="chat-input-row">
        <textarea
          value={draft}
          onChange={(event) => onDraftChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              onSend();
            }
          }}
          placeholder="Escribe un mensaje para Teseo..."
          className="chat-input"
          rows={3}
          disabled={isBusy}
        />
        <button
          onClick={onSend}
          className="chat-send-btn"
          disabled={isBusy || !draft.trim()}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

function ReportDownloadPanel({
  report,
  onDismiss,
}: {
  report: ReportDownload;
  onDismiss: () => void;
}) {
  return (
    <div className="report-download-panel" aria-live="polite">
      <div className="report-download-meta">
        <span className="report-download-label">Reporte listo</span>
        <span className="report-download-title">{report.title}</span>
        <span className="report-download-details">
          {report.category} | {report.range}
        </span>
      </div>
      <a
        className="report-download-link"
        href={report.url}
        download={report.filename}
      >
        Descargar Excel
      </a>
      <button
        type="button"
        className="report-download-close"
        onClick={onDismiss}
        aria-label="Quitar reporte"
        title="Quitar reporte"
      >
        x
      </button>
    </div>
  );
}

export default function App() {
  const [voiceStatus, setVoiceStatus] = useState("disconnected");
  const [chatStatus, setChatStatus] = useState("ready");
  const [activeTab, setActiveTab] = useState<AssistantTab>("voice");
  const [showVoiceEndDialog, setShowVoiceEndDialog] = useState(false);
  const [chatDraft, setChatDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: crypto.randomUUID(),
      role: "system",
      text: "Hola! Soy Teseo, tu asistente virtual para reportes de tiendas. Puedes hablar conmigo o escribir tus consultas. Puedo generar reportes Excel y responder preguntas sobre aperturas y cierres de tiendas. ¿En qué puedo ayudarte hoy?",
    },
  ]);
  const [reportDownload, setReportDownload] = useState<ReportDownload | null>(
    null,
  );
  const dateRangeTag = reportDownload?.range ?? DEFAULT_DATE_RANGE_LABEL;
  const activeTabRef = useRef<AssistantTab>(activeTab);
  const sessionModeRef = useRef<SessionMode>(null);
  const voiceStatusRef = useRef(voiceStatus);
  const chatStatusRef = useRef(chatStatus);
  const lastChatUserMessageRef = useRef<string | null>(null);
  const lastRetriedChatMessageRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (reportDownload) {
        URL.revokeObjectURL(reportDownload.url);
      }
    };
  }, [reportDownload]);

  useEffect(() => {
    activeTabRef.current = activeTab;
  }, [activeTab]);

  useEffect(() => {
    voiceStatusRef.current = voiceStatus;
  }, [voiceStatus]);

  useEffect(() => {
    chatStatusRef.current = chatStatus;
  }, [chatStatus]);

  const appendChatMessage = (message: ChatMessage) => {
    setMessages((current) => [...current, message]);
  };

  const appendUserMessageIfNeeded = (text: string) => {
    setMessages((current) => {
      const lastMessage = getLastMessage(current);

      if (lastMessage?.role === "user" && lastMessage.text === text) {
        return current;
      }

      return [...current, { id: crypto.randomUUID(), role: "user", text }];
    });
  };

  const updateVoiceStatus = (nextStatus: string) => {
    voiceStatusRef.current = nextStatus;
    setVoiceStatus(nextStatus);
  };

  const updateChatStatus = (nextStatus: string) => {
    chatStatusRef.current = nextStatus;
    setChatStatus(nextStatus);
  };

  const clearReportDownload = () => {
    setReportDownload((current) => {
      if (current) {
        URL.revokeObjectURL(current.url);
      }

      return null;
    });
  };

  const handleReportTool = async (parameters: ToolDetails = {}) => {
    const reportInput = getReportInputFromParameters(parameters);
    const reportData = (await fetchReportData({
      categoria: reportInput.categoria,
      sucursal: reportInput.sucursal,
      rango: reportInput.rango,
      desde: reportInput.desde,
      hasta: reportInput.hasta,
    })) as ReportApiPayload;

    if (!Array.isArray(reportData.rows) || reportData.rows.length === 0) {
      appendChatMessage({
        id: crypto.randomUUID(),
        role: "system",
        text: "No se encontraron datos en la base para generar ese reporte.",
      });

      return JSON.stringify({
        status: "empty",
        message: "No se encontraron datos para el reporte solicitado.",
      });
    }

    const reportWorkbookData: ReportWorkbookData = {
      rows: Array.isArray(reportData.rows) ? reportData.rows : [],
      summary:
        reportData && typeof reportData === "object" && reportData.summary
          ? {
              dateRange:
                typeof reportData.summary.dateRange === "string"
                  ? reportData.summary.dateRange
                  : null,
            }
          : null,
    };
    const reportFile = createReportWorkbook(reportInput, reportWorkbookData);
    const nextReport: ReportDownload = {
      id: crypto.randomUUID(),
      filename: reportFile.filename,
      title: reportFile.title,
      range: reportFile.range,
      category: reportFile.category,
      generatedAt: reportFile.generatedAt,
      url: URL.createObjectURL(reportFile.blob),
    };

    setReportDownload((current) => {
      if (current) {
        URL.revokeObjectURL(current.url);
      }

      return nextReport;
    });
    appendChatMessage({
      id: crypto.randomUUID(),
      role: "system",
      text: `Reporte Excel generado: ${nextReport.category} (${nextReport.range}) con ${reportData.rows.length} filas base desde la API.`,
    });

    return JSON.stringify({
      status: "ok",
      filename: nextReport.filename,
      message: "Reporte Excel generado y disponible para descarga en la UI.",
    });
  };

  const handleAperturasLookup = async (parameters: ToolDetails = {}) => {
    const lookup = getAperturasLookupInputFromParameters(parameters);
    const reportData = (await fetchReportData({
      categoria: "aperturas",
      sucursal: lookup.storeQuery,
      rango: lookup.range,
      desde: lookup.fromDate,
      hasta: lookup.toDate,
    })) as ReportApiPayload;

    return JSON.stringify({
      summary: buildLookupSummaryFromRows("aperturas", reportData),
      rows: Array.isArray(reportData.rows)
        ? reportData.rows.filter(isReportWorkbookRow).slice(0, lookup.limit ?? 5)
        : [],
    });
  };

  const handleCierresLookup = async (parameters: ToolDetails = {}) => {
    const lookup = getAperturasLookupInputFromParameters(parameters);
    const reportData = (await fetchReportData({
      categoria: "cierres",
      sucursal: lookup.storeQuery,
      rango: lookup.range,
      desde: lookup.fromDate,
      hasta: lookup.toDate,
    })) as ReportApiPayload;

    return JSON.stringify({
      summary: buildLookupSummaryFromRows("cierres", reportData),
      rows: Array.isArray(reportData.rows)
        ? reportData.rows.filter(isReportWorkbookRow).slice(0, lookup.limit ?? 5)
        : [],
    });
  };

  const ensureStreamingAgentPlaceholder = () => {
    setMessages((current) => {
      const hasStreamingMessage = findLastStreamingMessageIndex(current) !== -1;

      if (hasStreamingMessage) {
        return current;
      }

      return [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "agent",
          text: STREAMING_PLACEHOLDER_TEXT,
          isStreaming: true,
        },
      ];
    });
  };

  const clearStreamingAgentPlaceholder = () => {
    setMessages((current) => current.filter((message) => !message.isStreaming));
  };

  const setStreamingAgentPlaceholderText = (text: string) => {
    setMessages((current) => {
      const next = [...current];
      const index = findLastStreamingMessageIndex(next);

      if (index === -1) {
        return [
          ...current,
          {
            id: crypto.randomUUID(),
            role: "agent",
            text,
            isStreaming: true,
          },
        ];
      }

      next[index] = {
        ...next[index],
        text,
      };

      return next;
    });
  };

  const finalizeStreamingAgentMessage = (fallbackText?: string) => {
    setMessages((current) => {
      const next = [...current];
      const index = findLastStreamingMessageIndex(next);
      const normalizedFallback = fallbackText?.trim();

      if (index === -1) {
        if (!normalizedFallback) {
          return current;
        }

        return [
          ...current,
          {
            id: crypto.randomUUID(),
            role: "agent",
            text: normalizedFallback,
          },
        ];
      }

      const finalText = normalizedFallback || next[index].text.trim();

      if (!normalizedFallback && finalText === STREAMING_PLACEHOLDER_TEXT) {
        next.splice(index, 1);
        return next;
      }

      next[index] = {
        ...next[index],
        text: finalText,
        isStreaming: false,
      };

      return next;
    });
  };

  const sharedConversationConfig = {
    clientTools: {
      reporte: handleReportTool,
      reporte_open_close: (parameters: ToolDetails = {}) =>
        handleReportTool(
          mergeToolParameters(parameters, { categoria: "open-close" }),
        ),
      reporte_top: (parameters: ToolDetails = {}) =>
        handleReportTool(mergeToolParameters(parameters, { categoria: "top" })),
      reporte_aperturas: (parameters: ToolDetails = {}) =>
        handleReportTool(mergeToolParameters(parameters, { categoria: "open" })),
      reporte_cierres: (parameters: ToolDetails = {}) =>
        handleReportTool(mergeToolParameters(parameters, { categoria: "close" })),
      consultar_aperturas: handleAperturasLookup,
      resumen_aperturas: handleAperturasLookup,
      consultar_cierres: handleCierresLookup,
      resumen_cierres: handleCierresLookup,
    },
    onUnhandledClientToolCall: (tool: {
      tool_name: string;
      tool_call_id: string;
      parameters?: ToolDetails;
    }) => {
      if (isReportToolName(tool.tool_name)) {
        const categoryOverride = isCierresLookupToolName(tool.tool_name)
          ? { categoria: "close" }
          : isAperturasLookupToolName(tool.tool_name)
            ? { categoria: "open" }
            : normalizeText(tool.tool_name).includes("top")
              ? { categoria: "top" }
              : normalizeText(tool.tool_name).includes("cierre")
                ? { categoria: "close" }
                : {};
        void handleReportTool(
          mergeToolParameters(tool.parameters, categoryOverride),
        );
        return;
      }

      if (isAperturasLookupToolName(tool.tool_name)) {
        void handleAperturasLookup(tool.parameters ?? {});
        return;
      }

      if (isCierresLookupToolName(tool.tool_name)) {
        void handleCierresLookup(tool.parameters ?? {});
      }
    },
  };

  const enrichUnknownChatAnswer = async (agentText: string) => {
    const lastUserMessage = lastChatUserMessageRef.current;

    if (!lastUserMessage) {
      finalizeStreamingAgentMessage(agentText);
      updateChatStatus("ready");
      return;
    }

    if (!isKnowledgeFallbackResponse(agentText)) {
      lastRetriedChatMessageRef.current = null;
      finalizeStreamingAgentMessage(agentText);
      updateChatStatus("ready");
      return;
    }

    if (lastRetriedChatMessageRef.current === lastUserMessage) {
      finalizeStreamingAgentMessage(agentText);
      updateChatStatus("ready");
      return;
    }

    const dbContext = await buildDbContextForMessage(lastUserMessage);

    if (!dbContext) {
      finalizeStreamingAgentMessage(agentText);
      updateChatStatus("ready");
      return;
    }

    lastRetriedChatMessageRef.current = lastUserMessage;
    setStreamingAgentPlaceholderText("Teseo esta revisando la base...");
    conversation.sendContextualUpdate(dbContext);
    conversation.sendUserMessage(lastUserMessage);
  };

  const conversation = useConversation({
    ...sharedConversationConfig,
    onStatusChange: ({ status }) => {
      if (sessionModeRef.current === "voice") {
        updateVoiceStatus(status);
        return;
      }

      if (sessionModeRef.current === "chat") {
        updateChatStatus(
          status === "connecting"
            ? "loading"
            : status === "connected"
              ? "connected"
              : "ready",
        );
      }
    },
    onError: (message, context) => {
      console.error("ElevenLabs voice error:", message, context);
      if (sessionModeRef.current === "voice") {
        updateVoiceStatus("error");
        return;
      }

      if (sessionModeRef.current === "chat") {
        updateChatStatus("error");
        clearStreamingAgentPlaceholder();
        appendChatMessage({
          id: crypto.randomUUID(),
          role: "system",
          text: "No se pudo continuar el chat con Teseo. Intenta de nuevo.",
        });
      }
    },
    onMessage: (message: ConversationMessage) => {
      const text = message.message?.trim();

      if (!text) {
        return;
      }

      if (message.source === "ai" || message.role === "agent") {
        if (sessionModeRef.current === "chat") {
          void enrichUnknownChatAnswer(text);
          return;
        }

        if (activeTabRef.current === "voice") {
          appendChatMessage({
            id: crypto.randomUUID(),
            role: "agent",
            text,
          });
        }
        return;
      }

      if (message.source === "user" && activeTabRef.current === "voice") {
        appendUserMessageIfNeeded(text);
      }
    },
  });

  const ensureElevenLabsAgent = () => {
    if (ELEVENLABS_AGENT_ID) {
      return ELEVENLABS_AGENT_ID;
    }

    console.error(
      "Missing NEXT_PUBLIC_ELEVENLABS_AGENT_ID. Define it in your .env file.",
    );

    if (activeTabRef.current === "voice") {
      updateVoiceStatus("error");
    } else {
      updateChatStatus("error");
    }

    return null;
  };

  const stopCurrentSession = async () => {
    if (!sessionModeRef.current) {
      return;
    }

    await conversation.endSession();
    sessionModeRef.current = null;
    updateVoiceStatus("disconnected");
    updateChatStatus("ready");
  };

  const startVoiceSession = async () => {
    let grantedStream: MediaStream | null = null;

    try {
      grantedStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
    } catch (error) {
      console.error("Microphone permission error:", error);
      return;
    }

    grantedStream?.getTracks().forEach((track) => track.stop());
    const agentId = ensureElevenLabsAgent();

    if (!agentId) {
      return;
    }

    if (sessionModeRef.current === "chat") {
      await stopCurrentSession();
    }

    if (
      sessionModeRef.current === "voice" &&
      (voiceStatusRef.current === "connected" ||
        voiceStatusRef.current === "connecting")
    ) {
      return;
    }

    sessionModeRef.current = "voice";
    updateVoiceStatus("connecting");

    await conversation.startSession({
      agentId,
      connectionType: "webrtc",
    });
  };

  const stopVoiceSession = async () => {
    await stopCurrentSession();
  };

  const ensureChatSession = async () => {
    const agentId = ensureElevenLabsAgent();

    if (!agentId) {
      return false;
    }

    if (
      sessionModeRef.current === "chat" &&
      (chatStatusRef.current === "connected" || chatStatusRef.current === "loading")
    ) {
      return true;
    }

    if (sessionModeRef.current === "voice") {
      await stopCurrentSession();
    }

    sessionModeRef.current = "chat";
    updateChatStatus("loading");

    await conversation.startSession({
      agentId,
      connectionType: "webrtc",
      textOnly: true,
    });

    return true;
  };

  const openChatTab = async () => {
    setActiveTab("chat");
    setChatStatus("ready");
  };

  const handleAssistantTabChange = async (nextTab: AssistantTab) => {
    if (nextTab === activeTab) {
      return;
    }

    if (
      nextTab === "chat" &&
      (voiceStatus === "connected" || voiceStatus === "connecting")
    ) {
      setShowVoiceEndDialog(true);
      return;
    }

    if (nextTab === "chat") {
      await openChatTab();
      return;
    }

    setActiveTab("voice");
  };

  const confirmSwitchToChat = async () => {
    setShowVoiceEndDialog(false);
    await stopVoiceSession();
    await openChatTab();
  };

  const cancelSwitchToChat = () => {
    setShowVoiceEndDialog(false);
  };

  const handleSendChatMessage = async () => {
    const text = chatDraft.trim();

    if (!text || chatStatus === "loading") {
      return;
    }

    appendChatMessage({ id: crypto.randomUUID(), role: "user", text });
    ensureStreamingAgentPlaceholder();
    setChatDraft("");
    setChatStatus("loading");
    lastChatUserMessageRef.current = text;
    lastRetriedChatMessageRef.current = null;

    try {
      const isSessionReady = await ensureChatSession();

      if (!isSessionReady) {
        throw new Error("Missing ElevenLabs agent ID");
      }

      conversation.sendUserMessage(text);
    } catch (error) {
      console.error("ElevenLabs chat error:", error);
      updateChatStatus("error");
      clearStreamingAgentPlaceholder();
      appendChatMessage({
        id: crypto.randomUUID(),
        role: "system",
        text: "No se pudo continuar el chat con Teseo. Intenta de nuevo.",
      });
    }
  };

  return (
    <div className="app">
      <div className="app-layout">
        <div className="assistant-column">
          <div className="assistant-shell">
            <div className="assistant-topbar">
              <div
                className="assistant-tabs"
                role="tablist"
                aria-label="Canal de Teseo"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "voice"}
                  className={`assistant-tab ${activeTab === "voice" ? "assistant-tab-active" : ""}`}
                  onClick={() => void handleAssistantTabChange("voice")}
                >
                  Voz
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "chat"}
                  className={`assistant-tab ${activeTab === "chat" ? "assistant-tab-active" : ""}`}
                  onClick={() => void handleAssistantTabChange("chat")}
                >
                  Chat
                </button>
              </div>

              <div className="date-range-pill" aria-live="polite">
                <span className="date-range-value">{dateRangeTag}</span>
              </div>
            </div>

            {reportDownload ? (
              <ReportDownloadPanel
                report={reportDownload}
                onDismiss={clearReportDownload}
              />
            ) : null}

            <div className="assistant-panel">
              {activeTab === "voice" ? (
                <PresenterVideo
                  status={voiceStatus}
                  onStart={startVoiceSession}
                  onStop={stopVoiceSession}
                />
              ) : (
                <ChatPanel
                  status={chatStatus}
                  draft={chatDraft}
                  messages={messages}
                  onDraftChange={setChatDraft}
                  onSend={handleSendChatMessage}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {showVoiceEndDialog ? (
        <div className="modal-backdrop" role="presentation">
          <div
            className="confirm-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="switch-chat-title"
          >
            <h2 id="switch-chat-title" className="confirm-modal-title">
              Esto terminara la llamada
            </h2>
            <p className="confirm-modal-copy">
              Si cambias a la pestana de chat, la llamada de voz actual se
              cerrara y seguiremos en una conversacion distinta por texto.
            </p>
            <div className="confirm-modal-actions">
              <button
                type="button"
                className="modal-secondary-btn"
                onClick={cancelSwitchToChat}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="modal-primary-btn"
                onClick={() => void confirmSwitchToChat()}
              >
                Cambiar a chat
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
