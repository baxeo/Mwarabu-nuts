import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  const required = [
    "fullName",
    "company",
    "businessEmail",
    "phone",
    "country",
    "quantityRequired",
    "destination",
  ];

  const missing = required.filter((key) => !payload[key]);

  if (missing.length > 0) {
    return NextResponse.json(
      { success: false, message: "Missing required export inquiry fields." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    message:
      "Thank you. Your export inquiry has been received. Our trade team will review your requirements and contact you.",
    data: { ...payload, submittedAt: new Date().toISOString() },
  });
}
