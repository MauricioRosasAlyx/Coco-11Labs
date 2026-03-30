import { useConversation } from "@elevenlabs/react";
import { useState } from "react";
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
        <div className="avatar-model-container">
          <model-viewer
            src="/coco-avatar.glb"
            auto-rotate
            auto-rotate-delay="0"
            rotation-per-second="28deg"
            disable-zoom
            disable-pan
            touch-action="none"
            interaction-prompt="none"
            camera-target="0m 0.15m 0m"
            camera-orbit="0deg 84deg 3.4m"
            min-camera-orbit="auto 84deg 3.4m"
            max-camera-orbit="auto 84deg 3.4m"
            field-of-view="36deg"
            min-field-of-view="36deg"
            max-field-of-view="36deg"
            scale="1 1 1"
            orientation="0deg 0deg 0deg"
            className="avatar-model"
            style={{
              position: "absolute",
              inset: "0",
              width: "100%",
              height: "100%",
              display: "block",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [status, setStatus] = useState("disconnected");
  const [presentation, setPresentation] =
    useState<PresentationState>(DEFAULT_PRESENTATION);

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

  const conversation = useConversation({
    clientTools: {
      setScreen: async ({ screen }: { screen: Screen }) => {
        setScreen(screen);
        return "ok";
      },
      diapositivas: handlePresentationTool,
      mostrarTema: handlePresentationTool,
      mostrarImagenTema: handlePresentationTool,
    },
    onStatusChange: ({ status }) => setStatus(status),
    onError: (message, context) => {
      console.error("ElevenLabs error:", message, context);
      setStatus("error");
    },
    onUnhandledClientToolCall: (tool) => {
      trackToolEvent("client", tool.tool_name, tool.tool_call_id, {
        parameters: tool.parameters,
      });
    },
    onAgentToolRequest: (tool) => {
      trackToolEvent("request", tool.tool_name, tool.tool_call_id, {
        toolType: tool.tool_type,
      });
    },
    onAgentToolResponse: (tool) => {
      trackToolEvent("response", tool.tool_name, tool.tool_call_id, {
        toolType: tool.tool_type,
        isError: tool.is_error,
        isCalled: tool.is_called,
      });
    },
  });

  const start = async () => {
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
      setStatus("error");
      return;
    }

    await conversation.startSession({
      agentId: ELEVENLABS_AGENT_ID,
      connectionType: "webrtc",
    });
  };

  const stop = async () => {
    await conversation.endSession();
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

        <PresenterVideo status={status} onStart={start} onStop={stop} />
      </div>
    </div>
  );
}
