import { useConversation } from "@elevenlabs/react";
import { useEffect, useState, type ChangeEvent } from "react";

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
    <div
      style={{
        width: "min(30vw, 400px)",
        minWidth: 250,
        height: "100%",
        minHeight: 0,
        position: "relative",
        flexShrink: 0,
        alignSelf: "stretch",
        borderRadius: 28,
        overflow: "hidden",
        background: "#dbeafe",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: 16,
          right: 16,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          padding: 14,
          borderRadius: 24,
          background: "rgba(15, 23, 42, 0.6)",
          backdropFilter: "blur(18px)",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              color: "rgba(226, 232, 240, 0.78)",
            }}
          >
            Llamada
          </span>
          <span
            style={{
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 0.2,
            }}
          >
            {status}
          </span>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {!isDisconnected ? (
            <button
              onClick={onStop}
              style={{
                width: 58,
                height: 58,
                borderRadius: 999,
                border: "none",
                background: "#dc2626",
                color: "#fff",
                fontSize: 24,
                cursor: "pointer",
              }}
              aria-label="Colgar"
              title="Colgar"
            >
              ⏹
            </button>
          ) : null}
        </div>
      </div>

      {isDisconnected ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, #dbeafe 0%, #eff6ff 45%, #f8fafc 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 18,
            padding: "24px 24px 112px",
            textAlign: "center",
          }}
        >
          {contactImageVisible ? (
            <img
              src="/coco-contact.png"
              alt="Coco"
              onError={() => setContactImageVisible(false)}
              style={{
                width: 160,
                height: 160,
                borderRadius: 999,
                objectFit: "cover",
                border: "4px solid rgba(255, 255, 255, 0.9)",
              }}
            />
          ) : (
            <div
              style={{
                width: 132,
                height: 132,
                borderRadius: 999,
                background:
                  "radial-gradient(circle at 50% 35%, #fffdf8 0%, #fff7ed 70%, #e2e8f0 100%)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 22,
                  top: 12,
                  width: 28,
                  height: 44,
                  borderRadius: "20px 20px 6px 6px",
                  background: "#fff",
                  border: "2px solid #cbd5e1",
                  transform: "rotate(-18deg)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: 22,
                  top: 12,
                  width: 28,
                  height: 44,
                  borderRadius: "20px 20px 6px 6px",
                  background: "#fff",
                  border: "2px solid #cbd5e1",
                  transform: "rotate(18deg)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 30,
                  top: 22,
                  width: 12,
                  height: 20,
                  borderRadius: 999,
                  background: "#fecdd3",
                  transform: "rotate(-18deg)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: 30,
                  top: 22,
                  width: 12,
                  height: 20,
                  borderRadius: 999,
                  background: "#fecdd3",
                  transform: "rotate(18deg)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 16,
                  right: 16,
                  bottom: 0,
                  height: 56,
                  background: "#2563eb",
                  borderRadius: "22px 22px 0 0",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 30,
                  top: 46,
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  background: "#111827",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: 30,
                  top: 46,
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  background: "#111827",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 58,
                  width: 24,
                  height: 18,
                  borderRadius: "50% 50% 60% 60%",
                  background: "#111827",
                  transform: "translateX(-50%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 74,
                  width: 34,
                  height: 18,
                  borderRadius: "0 0 20px 20px",
                  borderBottom: "4px solid #111827",
                  transform: "translateX(-50%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 84,
                  width: 16,
                  height: 12,
                  borderRadius: "0 0 14px 14px",
                  background: "#fb7185",
                  transform: "translateX(-50%)",
                }}
              />
            </div>
          )}
          <div>
            <div
              style={{
                fontSize: 30,
                fontWeight: 800,
                color: "#0f172a",
                marginBottom: 8,
              }}
            >
              Coco
            </div>
            <div
              style={{
                fontSize: 16,
                color: "#475569",
                marginBottom: 14,
              }}
            >
              Contacto virtual disponible para iniciar llamada
            </div>
            <button
              onClick={onStart}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                borderRadius: 999,
                background: "#ffffff",
                color: "#1d4ed8",
                fontWeight: 700,
                border: "1px solid rgba(59, 130, 246, 0.18)",
                cursor: "pointer",
              }}
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
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            background: "#eff6ff",
          }}
        />
      ) : (
        <video
          src="/presenter.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            background: "#000",
          }}
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
    <div
      style={{
        height: "100vh",
        padding: 24,
        boxSizing: "border-box",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #f7efe4 0%, #edf4ff 48%, #dce8f7 100%)",
        fontFamily: '"Avenir Next", Avenir, "Segoe UI", system-ui, sans-serif',
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 24,
          alignItems: "stretch",
          height: "calc(100vh - 48px)",
          flexWrap: "wrap",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            flex: "1 1 720px",
            minWidth: 320,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            minHeight: 0,
          }}
        >
          <div
            style={{
              padding: 20,
              borderRadius: 28,
              background: "rgba(255, 255, 255, 0.9)",
              minHeight: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
                marginBottom: 16,
                flexWrap: "wrap",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#334155",
                  fontWeight: 700,
                }}
              >
                <span>Microfono</span>
                <select
                  value={selectedInputId}
                  onChange={handleInputDeviceChange}
                  style={{
                    minWidth: 220,
                    padding: "10px 14px",
                    borderRadius: 14,
                    border: "1px solid rgba(148, 163, 184, 0.35)",
                    background: "#fff",
                    color: "#0f172a",
                  }}
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
              <span
                style={{
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: "#dbeafe",
                  color: "#1d4ed8",
                  fontWeight: 700,
                }}
              >
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
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: 24,
                  border: "1px solid rgba(148, 163, 184, 0.2)",
                }}
              />
            ) : (
              <div
                style={{
                  minHeight: 320,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 24,
                  border: "1px dashed rgba(148, 163, 184, 0.5)",
                  color: "#64748b",
                  background: "rgba(248, 250, 252, 0.9)",
                  fontSize: 22,
                  fontWeight: 600,
                }}
              >
                Esperando una vista del tool
              </div>
            )}
          </div>

          {lastToolEvent && (
            <pre
              style={{
                margin: 0,
                padding: 16,
                borderRadius: 16,
                background: "#0f172a",
                color: "#e2e8f0",
                overflow: "auto",
                minHeight: 120,
                maxHeight: 220,
              }}
            >
              {JSON.stringify(lastToolEvent, null, 2)}
            </pre>
          )}
        </div>

        <PresenterVideo status={status} onStart={start} onStop={stop} />
      </div>
    </div>
  );
}
