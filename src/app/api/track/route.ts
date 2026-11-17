import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ ok: false, error: "Missing id" }, { status: 400 });

  // TODO: hook up real tracking API
  return NextResponse.json({
    ok: true,
    shipment: { id, status: "in_transit", updatedAt: new Date().toISOString() },
  });
}