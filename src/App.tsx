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

const displayImages: Record<DisplayOption, string> = {
  [DisplayOption.Vitrina]: "/slides/vitrina.png",
  [DisplayOption.Tienda]: "/slides/tienda.png",
  [DisplayOption.Totem]: "/slides/totem.png",
};

const ELEVENLABS_AGENT_ID = import.meta.env.VITE_ELEVENLABS_AGENT_ID;
const DEFAULT_VIEW_IMAGE = "/macropay-default.png";

function getDisplayOptionFromValue(value: unknown) {
  if (typeof value !== "string") {
    return null;
  }

  const normalizedValue = value.trim().toLowerCase();

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

function getDisplayOptionFromParameters(parameters?: ToolDetails) {
  if (!parameters) {
    return null;
  }

  return (
    getDisplayOptionFromValue(parameters.dispositiva) ??
    getDisplayOptionFromValue(parameters.diapositiva) ??
    getDisplayOptionFromValue(parameters.opcion) ??
    getDisplayOptionFromValue(parameters.option) ??
    getDisplayOptionFromValue(parameters.tipo) ??
    getDisplayOptionFromValue(parameters.view)
  );
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
  const [lastToolEvent, setLastToolEvent] = useState<ToolEvent | null>(null);
  const [currentDisplay, setCurrentDisplay] = useState<DisplayOption | null>(
    null,
  );

  const currentSlide =
    currentDisplay === null ? null : displayImages[currentDisplay];

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

    // console.log("Tool event:", event);
    setLastToolEvent(event);

    const displayOption = getDisplayOptionFromParameters(event.parameters);

    if (displayOption === null) {
      return false;
    }

    setCurrentDisplay(displayOption);
    return true;
  };

  const conversation = useConversation({
    clientTools: {
      setScreen: async ({ screen }: { screen: Screen }) => {
        setScreen(screen);
        return "ok";
      },
      diapositivas: async (parameters: ToolDetails) => {
        trackToolEvent("client", "diapositivas", crypto.randomUUID(), {
          parameters,
        });
        return "tool diapositivas recibida";
      },
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
              <span className="display-indicator">
                {currentDisplay === null
                  ? "Sin vista"
                  : currentDisplay.charAt(0).toUpperCase() +
                    currentDisplay.slice(1)}
              </span>
            </div>

            {currentSlide ? (
              <img
                src={currentSlide}
                alt={currentDisplay ?? "Vista"}
                className="slide-image"
              />
            ) : (
              <img
                src={DEFAULT_VIEW_IMAGE}
                alt="Vista por defecto Macropay"
                className="slide-image"
              />
            )}
          </div>

          {/* {lastToolEvent && (
            <pre className="tool-event-log">
              {JSON.stringify(lastToolEvent, null, 2)}
            </pre>
          )} */}
        </div>

        <PresenterVideo status={status} onStart={start} onStop={stop} />
      </div>
    </div>
  );
}
