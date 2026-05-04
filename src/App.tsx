import { useConversation } from "@elevenlabs/react";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  buildAperturasLookupResult,
  getAperturasDateRangeLabel,
} from "./aperturasKnowledgeBase";
import { buildCierresLookupResult } from "./cierresKnowledgeBase";
import {
  createReportWorkbook,
  type ReportWorkbookFile,
  type ReportWorkbookInput,
} from "./reportExcel";

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

type ConversationMessage = {
  source?: "ai" | "user";
  role?: "agent" | "user";
  message?: string;
  event_id?: number;
};

type AgentChatResponsePart = {
  text?: string;
  type?: "start" | "delta" | "stop";
  event_id?: number;
};

const ELEVENLABS_AGENT_ID = import.meta.env.VITE_ELEVENLABS_AGENT_ID;
const APERTURAS_DATE_RANGE_LABEL = getAperturasDateRangeLabel();
const STREAMING_PLACEHOLDER_TEXT = "Teseo está respondiendo...";
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
  const rango =
    dateFilters.range ??
    (dateFilters.fromDate || dateFilters.toDate ? null : APERTURAS_DATE_RANGE_LABEL);
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
              <span>☎</span>
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
  const isConnected = status === "connected";
  const isConnecting = status === "connecting";
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
      <div className="chat-header">
        <div>
          <div className="chat-title">Chat</div>
          <div className="chat-subtitle">
            {isConnected
              ? "Esta es una conversacion independiente y se mantiene activa."
              : isConnecting
                ? "Conectando el chat con Teseo..."
                : "Abre esta pestaña para iniciar una conversacion de chat aparte."}
          </div>
        </div>
      </div>

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
          disabled={!isConnected}
        />
        <button
          onClick={onSend}
          className="chat-send-btn"
          disabled={!isConnected || !draft.trim()}
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
        ×
      </button>
    </div>
  );
}

export default function App() {
  const [voiceStatus, setVoiceStatus] = useState("disconnected");
  const [chatStatus, setChatStatus] = useState("disconnected");
  const [activeTab, setActiveTab] = useState<AssistantTab>("voice");
  const [showVoiceEndDialog, setShowVoiceEndDialog] = useState(false);
  const [chatDraft, setChatDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: crypto.randomUUID(),
      role: "system",
      text: "Las bases de aperturas y cierres estan cargadas. Puedes consultar cualquiera y generar su Excel filtrado.",
    },
  ]);
  const [reportDownload, setReportDownload] = useState<ReportDownload | null>(
    null,
  );
  const dateRangeTag = reportDownload?.range ?? APERTURAS_DATE_RANGE_LABEL;

  useEffect(() => {
    return () => {
      if (reportDownload) {
        URL.revokeObjectURL(reportDownload.url);
      }
    };
  }, [reportDownload]);

  const appendChatMessage = (message: ChatMessage) => {
    setMessages((current) => [...current, message]);
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
    const reportFile = createReportWorkbook(
      getReportInputFromParameters(parameters),
    );
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
      text: `Reporte Excel generado: ${nextReport.category} (${nextReport.range}).`,
    });

    return JSON.stringify({
      status: "ok",
      filename: nextReport.filename,
      message: "Reporte Excel generado y disponible para descarga en la UI.",
    });
  };

  const handleAperturasLookup = async (parameters: ToolDetails = {}) => {
    return JSON.stringify(
      buildAperturasLookupResult(getAperturasLookupInputFromParameters(parameters)),
    );
  };

  const handleCierresLookup = async (parameters: ToolDetails = {}) => {
    return JSON.stringify(
      buildCierresLookupResult(getAperturasLookupInputFromParameters(parameters)),
    );
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

  const startStreamingAgentMessage = (text: string) => {
    const initialText = text.trim();

    if (!initialText || initialText === "...") {
      return;
    }

    setMessages((current) => {
      const next = [...current];
      const index = findLastStreamingMessageIndex(next);

      if (index !== -1) {
        next[index] = {
          ...next[index],
          text: initialText,
        };

        return next;
      }

      return [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "agent",
          text: initialText,
          isStreaming: true,
        },
      ];
    });
  };

  const updateStreamingAgentMessage = (textPart: string) => {
    setMessages((current) => {
      const next = [...current];
      const index = findLastStreamingMessageIndex(next);

      if (index === -1) {
        return [
          ...current,
          {
            id: crypto.randomUUID(),
            role: "agent",
            text: textPart,
            isStreaming: true,
          },
        ];
      }

      next[index] = {
        ...next[index],
        text:
          next[index].text === STREAMING_PLACEHOLDER_TEXT
            ? textPart
            : `${next[index].text}${textPart}`,
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

        const lastAgentMessage = [...current]
          .reverse()
          .find((message) => message.role === "agent" && !message.isStreaming);

        if (lastAgentMessage?.text.trim() === normalizedFallback) {
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

      const previousAgentMessage = [...next.slice(0, index)]
        .reverse()
        .find((message) => message.role === "agent" && !message.isStreaming);

      if (previousAgentMessage?.text.trim() === finalText) {
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

  const voiceConversation = useConversation({
    ...sharedConversationConfig,
    onStatusChange: ({ status }) => setVoiceStatus(status),
    onError: (message, context) => {
      console.error("ElevenLabs voice error:", message, context);
      setVoiceStatus("error");
    },
  });

  const chatConversation = useConversation({
    ...sharedConversationConfig,
    textOnly: true,
    onAgentChatResponsePart: (part: AgentChatResponsePart) => {
      if (part.type === "start") {
        startStreamingAgentMessage(part.text ?? "...");
        return;
      }

      if (part.type === "delta" && part.text) {
        updateStreamingAgentMessage(part.text);
        return;
      }

      if (part.type === "stop") {
        finalizeStreamingAgentMessage();
      }
    },
    onMessage: (message: ConversationMessage) => {
      const text = message.message?.trim();

      if (!text) {
        return;
      }

      if (message.source === "ai" || message.role === "agent") {
        finalizeStreamingAgentMessage(text);
        return;
      }

      if (message.source === "user" && activeTab === "chat") {
        setMessages((current) => {
          const lastMessage = getLastMessage(current);

          if (lastMessage?.role === "user" && lastMessage.text === text) {
            return current;
          }

          return [...current, { id: crypto.randomUUID(), role: "user", text }];
        });
      }
    },
    onStatusChange: ({ status }) => setChatStatus(status),
    onError: (message, context) => {
      console.error("ElevenLabs chat error:", message, context);
      setChatStatus("error");
      clearStreamingAgentPlaceholder();
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "system",
          text: "No se pudo continuar el chat con Teseo. Intenta abrir la pestaña otra vez.",
        },
      ]);
    },
  });

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

    if (!ELEVENLABS_AGENT_ID) {
      console.error(
        "Missing VITE_ELEVENLABS_AGENT_ID. Define it in your .env file.",
      );
      setVoiceStatus("error");
      return;
    }

    await voiceConversation.startSession({
      agentId: ELEVENLABS_AGENT_ID,
      connectionType: "webrtc",
    });
  };

  const stopVoiceSession = async () => {
    await voiceConversation.endSession();
  };

  const ensureChatSession = async () => {
    if (chatStatus === "connected" || chatStatus === "connecting") {
      return;
    }

    if (!ELEVENLABS_AGENT_ID) {
      console.error(
        "Missing VITE_ELEVENLABS_AGENT_ID. Define it in your .env file.",
      );
      setChatStatus("error");
      return;
    }

    await chatConversation.startSession({
      agentId: ELEVENLABS_AGENT_ID,
      connectionType: "websocket",
      textOnly: true,
    });
  };

  const openChatTab = async () => {
    setActiveTab("chat");
    await ensureChatSession();
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

    if (!text) {
      return;
    }

    if (chatStatus !== "connected") {
      await ensureChatSession();
    }

    if (chatStatus !== "connected" && chatConversation.status !== "connected") {
      return;
    }

    chatConversation.sendUserMessage(text);
    appendChatMessage({ id: crypto.randomUUID(), role: "user", text });
    ensureStreamingAgentPlaceholder();
    setChatDraft("");
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
                  onDraftChange={(value) => {
                    setChatDraft(value);
                    if (value.trim()) {
                      chatConversation.sendUserActivity();
                    }
                  }}
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
              Si cambias a la pestaña de chat, la llamada de voz actual se
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
