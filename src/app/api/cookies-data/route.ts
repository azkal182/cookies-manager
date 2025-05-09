import { NextResponse } from "next/server";
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
