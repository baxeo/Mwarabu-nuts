import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  if (!payload.company || !payload.name || !payload.email) {
    return NextResponse.json(
      { success: false, message: "Please complete your company and contact details." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Wholesale request received. Our sales team will send pricing shortly.",
    data: { ...payload, submittedAt: new Date().toISOString() },
  });
}
