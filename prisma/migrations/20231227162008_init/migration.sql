-- CreateTable
CREATE TABLE "message" (
    "id" UUID NOT NULL,
    "fullName" VARCHAR(250) NOT NULL,
    "email" VARCHAR(250) NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "message_email_key" ON "message"("email");
