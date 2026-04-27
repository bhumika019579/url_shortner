-- CreateTable
CREATE TABLE "Url" (
    "id" SERIAL NOT NULL,
    "shortid" TEXT NOT NULL,
    "redirecturl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Visit" (
    "id" SERIAL NOT NULL,
    "timestamp" BIGINT NOT NULL,
    "urlId" INTEGER NOT NULL,

    CONSTRAINT "Visit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_shortid_key" ON "Url"("shortid");

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "Url"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
