import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const data = await prisma?.streaming.findMany();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, domain } = body;

  if (!name || !domain) {
    return NextResponse.json(
      { error: "Name and domain are required." },
      { status: 400 }
    );
  }

  const newWebsite = await prisma.streaming.create({
    data: { name, domain },
  });

  return NextResponse.json(newWebsite, { status: 201 });
}
