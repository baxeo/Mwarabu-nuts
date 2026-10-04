import { createHmac, timingSafeEqual } from "node:crypto";
import type { NextRequest } from "next/server";

const cookieName = "mwarabu_admin_session";

function sessionToken(password: string): string {
  return createHmac("sha256", password).update("mwarabu-admin-session").digest("hex");
}

export function isAdminRequest(request: NextRequest): boolean {
  const password = process.env.ADMIN_PASSWORD;
  const supplied = request.cookies.get(cookieName)?.value;
  if (!password || !supplied) return false;

  const expected = Buffer.from(sessionToken(password));
  const candidate = Buffer.from(supplied);
  return expected.length === candidate.length && timingSafeEqual(expected, candidate);
}

export function getAdminSessionCookie(password: string) {
  return {
    name: cookieName,
    value: sessionToken(password),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/",
    maxAge: 60 * 60 * 8,
  };
}