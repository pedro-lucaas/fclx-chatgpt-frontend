import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../prisma/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const chat = await prisma.chat.create({
    data: {
      messages: {
        create: {
          content: body.message,
        },
      }
    },
    select: {
      id: true,
      messages: true,
    },
  });

  return NextResponse.json(chat);
}

export async function GET() {
  const chats = await prisma.chat.findMany({
    select: {
      id: true,
      messages: {
        orderBy: { createdAt: "asc" },
        take: 1,

      }
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  return NextResponse.json(chats);
}