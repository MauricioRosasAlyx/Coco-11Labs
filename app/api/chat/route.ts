import { NextResponse } from "next/server";
import type { ChatApiRequest } from "../../../src/lib/chatTypes";
import { runTeseoGraph } from "../../../src/lib/langgraph/teseoGraph";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ChatApiRequest;
    const message = body.message?.trim();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 },
      );
    }

    const result = await runTeseoGraph({
      message,
      history: Array.isArray(body.history) ? body.history : [],
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("LangGraph chat route error:", error);

    return NextResponse.json(
      { error: "No se pudo procesar la solicitud." },
      { status: 500 },
    );
  }
}
