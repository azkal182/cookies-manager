import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(request: NextRequest) {
  const paramsId = request.nextUrl.searchParams.get("id");
  if (!paramsId) {
    return NextResponse.json({ message: "params id required" });
  }
  const id = parseInt(paramsId);
  await prisma.cookies.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
