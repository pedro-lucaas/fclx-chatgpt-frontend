import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma";

export async function GET(_req: NextRequest, { params }: { params: { chatId: string } }) {
  const messages = await prisma.message.findMany({
    where: {
      chatId: params.chatId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return NextResponse.json(messages);
}

export async function POST(req: NextRequest, { params }: { params: { chatId: string } }) {
  // TODO: Check if chat exists
  await prisma.chat.findUniqueOrThrow({
    where: {
      id: params.chatId,
    },
  });

  const body = await req.json();
  const message = await prisma.message.create({
    data: {
      content: body.message,
      chatId: params.chatId,
    },
  });

  return NextResponse.json(message);
}