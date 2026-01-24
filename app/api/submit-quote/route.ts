import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const webhookUrl = process.env.WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("WEBHOOK_URL is not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Webhook responded with status: ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting quote:", error);
    return NextResponse.json(
      { error: "Failed to submit quote" },
      { status: 500 }
    );
  }
}
