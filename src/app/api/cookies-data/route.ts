import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const cookies = await prisma.cookies.findMany({
    include: { streaming: true },
    orderBy: { id: "desc" },
  });
  return NextResponse.json(cookies);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newCookie = await prisma.cookies.create({
    data: {
      label: body.label,
      cookies: body.raw,
      streaming: {
        connect: { id: parseInt(body.domain) },
      },
    },
  });
  return NextResponse.json(newCookie);
}

export async function DELETE(request: NextRequest) {
  const paramsId = request.nextUrl.searchParams.get("id");
  console.log(paramsId);
  if (!paramsId) {
    return NextResponse.json({ message: "params id required" });
  }
  const id = parseInt(paramsId);
  await prisma.cookies.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
