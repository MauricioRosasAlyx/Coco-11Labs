import { useConversation } from "@elevenlabs/react";
import { useEffect, useRef, useState } from "react";
import "./App.css";

type Screen = "home" | "plans" | "checkout";
type ToolDetails = Record<string, unknown>;

type ToolEvent = {
  source: "client" | "request" | "response";
  toolName: string;
  toolCallId: string;
  toolType?: string;
  parameters?: ToolDetails;
  isError?: boolean;
  isCalled?: boolean;
};

type ChatMessage = {
  id: string;
  role: "user" | "agent" | "system";
  text: string;
  isStreaming?: boolean;
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

enum DisplayOption {
  Vitrina = "vitrinas",
  Tienda = "tienda",
  Totem = "totems",
}

type TopicKey =
  | "demanda_fisica"
  | "captura_flujo"
  | "funnel_comercial"
  | "espacio_layout"
  | "inventario"
  | "experiencia"
  | "demografia"
  | "credito"
  | "ventas";

type TopicDefinition = {
  label: string;
  summary: string;
  imageSrc: string;
  tags: string[];
};

type PresentationState = {
  label: string;
  summary: string;
  imageSrc: string;
  tags: string[];
  topicKey: TopicKey | null;
};

const displayImages: Record<DisplayOption, string> = {
  [DisplayOption.Vitrina]: "/slides/vitrina.png",
  [DisplayOption.Tienda]: "/slides/tienda.png",
  [DisplayOption.Totem]: "/slides/totem.png",
};

const TOPIC_CATALOG: Record<TopicKey, TopicDefinition> = {
  demanda_fisica: {
    label: "Demanda Fisica",
    summary:
      "Coco esta hablando del trafico real de la tienda, entradas, salidas y volumen de visitantes observados.",
    imageSrc: "/slides/demanda_fisica.png",
    tags: ["trafico", "entradas", "visitas", "footfall"],
  },
  captura_flujo: {
    label: "Captura de Flujo",
    summary:
      "Coco esta explicando cuantas personas pasan frente a la tienda, cuantas entran y donde se pierde demanda.",
    imageSrc: "/slides/captura_flujo.png",
    tags: ["captura", "fachada", "no capturados", "conversion de paso"],
  },
  funnel_comercial: {
    label: "Funnel Comercial",
    summary:
      "Coco esta conectando entradas, presolicitudes, completadas, convertidas y ventas dentro del embudo de tienda.",
    imageSrc: "/slides/funnel_comercial.png",
    tags: ["funnel", "conversion", "presolicitudes", "ventas"],
  },
  espacio_layout: {
    label: "Espacio y Layout",
    summary:
      "Coco esta describiendo heatmaps, zonas calientes, zonas frias y la exploracion del cliente dentro de la tienda.",
    imageSrc: "/slides/espacio_layout.png",
    tags: ["heatmap", "layout", "zonas", "exploracion"],
  },
  inventario: {
    label: "Inventario",
    summary:
      "Coco esta relacionando inventario libre, categorias, stock y productividad economica del espacio.",
    imageSrc: "/slides/inventario.png",
    tags: ["stock", "categorias", "productividad", "mix comercial"],
  },
  experiencia: {
    label: "Experiencia Cliente",
    summary:
      "Coco esta describiendo espera, colas, friccion y calidad de la experiencia dentro del punto de venta.",
    imageSrc: "/slides/experiencia.png",
    tags: ["colas", "espera", "friccion", "journey"],
  },
  demografia: {
    label: "Demografia",
    summary:
      "Coco esta explicando el perfil del cliente que entra a la tienda y su relacion con la oferta comercial.",
    imageSrc: "/slides/demografia.png",
    tags: ["perfil", "mujeres", "adultos", "segmentacion"],
  },
  credito: {
    label: "Credito",
    summary:
      "Coco esta hablando del proceso financiero, aprobacion, conversion crediticia y salud del funnel.",
    imageSrc: "/slides/credito.png",
    tags: ["credito", "aprobacion", "intencion", "formalizacion"],
  },
  ventas: {
    label: "Ventas y Monetizacion",
    summary:
      "Coco esta enfocando la explicacion en venta neta, ticket, categorias lideres e ingreso por visitante.",
    imageSrc: "/slides/ventas.png",
    tags: ["venta neta", "ticket", "monetizacion", "ingreso por visitante"],
  },
};

const TOPIC_ALIASES: Record<string, TopicKey> = {
  demanda: "demanda_fisica",
  demanda_fisica: "demanda_fisica",
  demanda_real: "demanda_fisica",
  trafico: "demanda_fisica",
  trafico_real: "demanda_fisica",
  flujo: "captura_flujo",
  captura: "captura_flujo",
  captura_de_flujo: "captura_flujo",
  captura_flujo: "captura_flujo",
  fachada: "captura_flujo",
  no_captura: "captura_flujo",
  embudo: "funnel_comercial",
  funnel: "funnel_comercial",
  funnel_comercial: "funnel_comercial",
  conversion: "funnel_comercial",
  layout: "espacio_layout",
  espacio: "espacio_layout",
  heatmap: "espacio_layout",
  heatmaps: "espacio_layout",
  espacio_layout: "espacio_layout",
  tienda: "espacio_layout",
  inventario: "inventario",
  stock: "inventario",
  experiencia: "experiencia",
  experiencia_cliente: "experiencia",
  colas: "experiencia",
  espera: "experiencia",
  demografia: "demografia",
  perfil: "demografia",
  cliente: "demografia",
  credito: "credito",
  financiero: "credito",
  ventas: "ventas",
  monetizacion: "ventas",
  venta: "ventas",
  comercial: "ventas",
};

const ELEVENLABS_AGENT_ID = import.meta.env.VITE_ELEVENLABS_AGENT_ID;
const DEFAULT_VIEW_IMAGE = "/macropay-default.png";
const STREAMING_PLACEHOLDER_TEXT = "Coco está respondiendo...";
const DEFAULT_PRESENTATION: PresentationState = {
  label: "Análisis de tema...",
  summary:
    "Cuando Coco use la herramienta, aqui mostraremos la imagen, el tema detectado y un resumen corto para acompanar la explicacion.",
  imageSrc: DEFAULT_VIEW_IMAGE,
  tags: ["tema", "imagen", "elevenlabs"],
  topicKey: null,
};

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

function getDisplayOptionFromValue(value: unknown) {
  if (typeof value !== "string") {
    return null;
  }

  const normalizedValue = normalizeText(value);

  if (normalizedValue === DisplayOption.Vitrina) {
    return DisplayOption.Vitrina;
  }

  if (normalizedValue === DisplayOption.Tienda) {
    return DisplayOption.Tienda;
  }

  if (normalizedValue === DisplayOption.Totem) {
    return DisplayOption.Totem;
  }

  return null;
}

function getValueFromParameters(
  parameters: ToolDetails | undefined,
  keys: string[],
) {
  if (!parameters) {
    return null;
  }

  for (const key of keys) {
    const value = getStringValue(parameters[key]);

    if (value) {
      return value;
    }
  }

  return null;
}

function getDisplayOptionFromParameters(parameters?: ToolDetails) {
  const value = getValueFromParameters(parameters, [
    "dispositiva",
    "diapositiva",
    "opcion",
    "option",
    "tipo",
    "view",
  ]);

  return value ? getDisplayOptionFromValue(value) : null;
}

function getTopicKeyFromValue(value: unknown) {
  if (typeof value !== "string") {
    return null;
  }

  const normalizedValue = normalizeText(value);
  return TOPIC_ALIASES[normalizedValue] ?? null;
}

function getTopicKeyFromParameters(parameters?: ToolDetails) {
  const value = getValueFromParameters(parameters, [
    "tema",
    "topic",
    "categoria",
    "asunto",
    "dimension",
    "insight",
    "seccion",
  ]);

  return value ? getTopicKeyFromValue(value) : null;
}

function buildPresentation(parameters?: ToolDetails) {
  const topicKey = getTopicKeyFromParameters(parameters);
  const displayOption = getDisplayOptionFromParameters(parameters);

  if (topicKey) {
    const topic = TOPIC_CATALOG[topicKey];

    return {
      label: topic.label,
      summary: topic.summary,
      imageSrc: topic.imageSrc,
      tags: topic.tags,
      topicKey,
    } satisfies PresentationState;
  }

  if (displayOption) {
    const label =
      displayOption.charAt(0).toUpperCase() + displayOption.slice(1);

    return {
      label,
      summary:
        "Coco solicito mostrar una vista puntual de apoyo para su explicacion.",
      imageSrc: displayImages[displayOption],
      tags: ["visual", "soporte", displayOption],
      topicKey: null,
    } satisfies PresentationState;
  }

  return null;
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
              src="/coco-contact.png"
              alt="Coco"
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
            <div className="contact-name">Coco</div>
            <div className="contact-description">
              Contacto virtual disponible para iniciar llamada
            </div>
            <button
              onClick={onStart}
              className="call-btn"
              aria-label="Llamar a Coco"
              title="Llamar a Coco"
            >
              <span>☎</span>
              <span>Llamar</span>
            </button>
          </div>
        </div>
      ) : isConnecting ? (
        <div className="connecting-state" role="status" aria-live="polite">
          <img
            src="/coco-connecting.png"
            alt="Conectando con Coco"
            className="connecting-image"
          />
          <div className="connecting-overlay">
            <span className="connecting-loader" aria-hidden="true" />
            <span className="connecting-text">Conectando con Coco</span>
          </div>
        </div>
      ) : (
        <img src="/coco-live.jpeg" alt="Coco" className="live-avatar-image" />
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
                ? "Conectando el chat con Coco..."
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
          placeholder="Escribe un mensaje para Coco"
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

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [voiceStatus, setVoiceStatus] = useState("disconnected");
  const [chatStatus, setChatStatus] = useState("disconnected");
  const [presentation, setPresentation] =
    useState<PresentationState>(DEFAULT_PRESENTATION);
  const [activeTab, setActiveTab] = useState<AssistantTab>("voice");
  const [showVoiceEndDialog, setShowVoiceEndDialog] = useState(false);
  const [chatDraft, setChatDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: crypto.randomUUID(),
      role: "system",
      text: "El chat y la llamada funcionan como conversaciones separadas.",
    },
  ]);
  const dateRangeTag = "01-03-2026 a 29-03-2026";

  const trackToolEvent = (
    source: ToolEvent["source"],
    toolName: string,
    toolCallId: string,
    extra?: Partial<ToolEvent>,
  ) => {
    const event: ToolEvent = {
      source,
      toolName,
      toolCallId,
      ...extra,
    };

    const nextPresentation = buildPresentation(event.parameters);

    if (nextPresentation) {
      setPresentation(nextPresentation);
      return true;
    }

    return false;
  };

  const handlePresentationTool = async (parameters: ToolDetails) => {
    trackToolEvent("client", "mostrarTema", crypto.randomUUID(), {
      parameters,
    });
    return "tema actualizado";
  };

  const appendChatMessage = (message: ChatMessage) => {
    setMessages((current) => [...current, message]);
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
      setScreen: async ({ screen }: { screen: Screen }) => {
        setScreen(screen);
        return "ok";
      },
      diapositivas: handlePresentationTool,
      mostrarTema: handlePresentationTool,
      mostrarImagenTema: handlePresentationTool,
    },
    onUnhandledClientToolCall: (tool: {
      tool_name: string;
      tool_call_id: string;
      parameters?: ToolDetails;
    }) => {
      trackToolEvent("client", tool.tool_name, tool.tool_call_id, {
        parameters: tool.parameters,
      });
    },
    onAgentToolRequest: (tool: {
      tool_name: string;
      tool_call_id: string;
      tool_type: string;
    }) => {
      trackToolEvent("request", tool.tool_name, tool.tool_call_id, {
        toolType: tool.tool_type,
      });
    },
    onAgentToolResponse: (tool: {
      tool_name: string;
      tool_call_id: string;
      tool_type: string;
      is_error: boolean;
      is_called: boolean;
    }) => {
      trackToolEvent("response", tool.tool_name, tool.tool_call_id, {
        toolType: tool.tool_type,
        isError: tool.is_error,
        isCalled: tool.is_called,
      });
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
          text: "No se pudo continuar el chat con Coco. Intenta abrir la pestaña otra vez.",
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
        <div className="app-content">
          <div className="slide-card">
            <div className="slide-header">
              <span className="display-indicator">{presentation.label}</span>
              {screen !== "home" ? (
                <span className="screen-indicator">{screen}</span>
              ) : null}
            </div>

            <img
              src={presentation.imageSrc}
              alt={presentation.label}
              className="slide-image"
            />
          </div>
        </div>

        <div className="assistant-column">
          <div className="assistant-shell">
            <div className="assistant-topbar">
              <div
                className="assistant-tabs"
                role="tablist"
                aria-label="Canal de Coco"
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
