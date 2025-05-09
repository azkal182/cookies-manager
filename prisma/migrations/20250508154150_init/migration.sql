-- CreateTable
CREATE TABLE "Streaming" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "domain" TEXT NOT NULL,

    CONSTRAINT "Streaming_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cookies" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "cookies" JSONB NOT NULL,
    "streamingId" INTEGER,

    CONSTRAINT "Cookies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cookies" ADD CONSTRAINT "Cookies_streamingId_fkey" FOREIGN KEY ("streamingId") REFERENCES "Streaming"("id") ON DELETE SET NULL ON UPDATE CASCADE;
