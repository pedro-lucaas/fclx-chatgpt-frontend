-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "remoteChatId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);
