import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  if (!payload.product || !payload.quantity || !payload.location) {
    return NextResponse.json(
      { success: false, message: "Please provide the product, quantity and customer location." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Your retail order request has been prepared for WhatsApp follow-up.",
    data: { ...payload, submittedAt: new Date().toISOString() },
  });
}
