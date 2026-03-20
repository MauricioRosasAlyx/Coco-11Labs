import { useConversation } from "@elevenlabs/react";
import { useEffect, useState, type ChangeEvent } from "react";
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

type AudioInputDevice = {
  deviceId: string;
  label: string;
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

function looksExternalMic(label: string) {
  const normalizedLabel = label.toLowerCase();

  return !["macbook", "built-in", "built in", "internal", "default"].some(
    (term) => normalizedLabel.includes(term),
  );
}

function getPreferredInputDevice(devices: AudioInputDevice[]) {
  return devices.find((device) => looksExternalMic(device.label)) ?? devices[0];
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
        <img
          src="/coco-connecting.svg"
          alt="Conectando con Coco"
          className="connecting-image"
        />
      ) : (
        <video
          src="/presenter.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="video-element"
        />
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
  const [audioInputs, setAudioInputs] = useState<AudioInputDevice[]>([]);
  const [selectedInputId, setSelectedInputId] = useState("");

  const currentSlide =
    currentDisplay === null ? null : displayImages[currentDisplay];

  useEffect(() => {
    let isMounted = true;

    const loadAudioInputs = async (preferExternal = false) => {
      if (
        typeof navigator === "undefined" ||
        !navigator.mediaDevices?.enumerateDevices
      ) {
        return [] as AudioInputDevice[];
      }

      const devices = await navigator.mediaDevices.enumerateDevices();
      const nextInputs = devices
        .filter((device) => device.kind === "audioinput")
        .map((device, index) => ({
          deviceId: device.deviceId,
          label: device.label || `Microfono ${index + 1}`,
        }));

      if (!isMounted) {
        return nextInputs;
      }

      setAudioInputs(nextInputs);
      setSelectedInputId((currentValue) => {
        if (
          currentValue &&
          !preferExternal &&
          nextInputs.some((device) => device.deviceId === currentValue)
        ) {
          return currentValue;
        }

        return getPreferredInputDevice(nextInputs)?.deviceId ?? "";
      });

      return nextInputs;
    };

    void loadAudioInputs();
    const handleDeviceChange = () => {
      void loadAudioInputs(true);
    };

    navigator.mediaDevices?.addEventListener?.(
      "devicechange",
      handleDeviceChange,
    );

    return () => {
      isMounted = false;
      navigator.mediaDevices?.removeEventListener?.(
        "devicechange",
        handleDeviceChange,
      );
    };
  }, []);

  const refreshAudioInputs = async (preferExternal = false) => {
    if (
      typeof navigator === "undefined" ||
      !navigator.mediaDevices?.enumerateDevices
    ) {
      return [] as AudioInputDevice[];
    }

    const devices = await navigator.mediaDevices.enumerateDevices();
    const nextInputs = devices
      .filter((device) => device.kind === "audioinput")
      .map((device, index) => ({
        deviceId: device.deviceId,
        label: device.label || `Microfono ${index + 1}`,
      }));

    setAudioInputs(nextInputs);
    setSelectedInputId((currentValue) => {
      if (
        currentValue &&
        !preferExternal &&
        nextInputs.some((device) => device.deviceId === currentValue)
      ) {
        return currentValue;
      }

      return getPreferredInputDevice(nextInputs)?.deviceId ?? "";
    });

    return nextInputs;
  };

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

    console.log("Tool event:", event);
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

    const refreshedInputs = await refreshAudioInputs(true);
    const preferredInputId =
      getPreferredInputDevice(refreshedInputs)?.deviceId || selectedInputId;

    grantedStream?.getTracks().forEach((track) => track.stop());

    await conversation.startSession({
      agentId: "agent_7301km18p09wed2r8eeb8c2r4jwm", //agent_7301km18p09wed2r8eeb8c2r4jwm (Glider) || agent_1001km138rkbebxv2xaabqpd0ace (Mario)
      connectionType: "webrtc",
      inputDeviceId: preferredInputId || undefined,
    });
  };

  const stop = async () => {
    await conversation.endSession();
  };

  const handleInputDeviceChange = async (
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    const nextDeviceId = event.target.value;

    setSelectedInputId(nextDeviceId);

    if (status === "disconnected" || status === "idle") {
      return;
    }

    await conversation.changeInputDevice({
      format: "pcm",
      sampleRate: 16000,
      inputDeviceId: nextDeviceId || undefined,
    });
  };

  return (
    <div className="app">
      <div className="app-layout">
        <div className="app-content">
          <div className="slide-card">
            <div className="slide-header">
              <label className="microphone-label">
                <span>Microfono</span>
                <select
                  value={selectedInputId}
                  onChange={handleInputDeviceChange}
                  className="microphone-select"
                >
                  {audioInputs.length === 0 ? (
                    <option value="">Detectando microfonos...</option>
                  ) : (
                    audioInputs.map((device) => (
                      <option key={device.deviceId} value={device.deviceId}>
                        {device.label}
                      </option>
                    ))
                  )}
                </select>
              </label>
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
              <div className="slide-placeholder">
                Esperando una vista del tool
              </div>
            )}
          </div>

          {lastToolEvent && (
            <pre className="tool-event-log">
              {JSON.stringify(lastToolEvent, null, 2)}
            </pre>
          )}
        </div>

        <PresenterVideo status={status} onStart={start} onStop={stop} />
      </div>
    </div>
  );
}
