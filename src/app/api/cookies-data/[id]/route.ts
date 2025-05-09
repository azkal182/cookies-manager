import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  await prisma.cookies.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
