import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { getProducts, saveProducts } from "@/lib/product-store";
import type { Product } from "@/lib/site-data";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json(await getProducts());
}

export async function PUT(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Admin sign-in required." }, { status: 401 });
  }

  const payload = await request.json().catch(() => null) as unknown;
  if (!Array.isArray(payload) || payload.length > 200) {
    return NextResponse.json({ error: "Invalid product list." }, { status: 400 });
  }

  const requiredFields: (keyof Product)[] = [
    "id", "slug", "name", "category", "description", "grade", "origin",
    "processing", "availability", "stockQuantity", "retailPrice", "wholesaleFrom",
    "exportMOQ", "packaging", "lastUpdated",
  ];
  const valid = payload.every((item) =>
    item && typeof item === "object" && requiredFields.every((field) => typeof item[field] === "string")
  );
  if (!valid) {
    return NextResponse.json({ error: "Each product must include all required information." }, { status: 400 });
  }

  const normalized = (payload as Product[]).map((product) => ({
    ...product,
    lastUpdated: new Date().toISOString().slice(0, 10),
  }));
  await saveProducts(normalized);
  return NextResponse.json(normalized);
}