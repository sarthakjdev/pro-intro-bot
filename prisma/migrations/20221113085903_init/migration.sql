-- CreateTable
CREATE TABLE "userprofile" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "name" TEXT,
    "description" TEXT,
    "email" TEXT,
    "title" TEXT,
    "skills" TEXT,
    "github" TEXT,
    "twitter" TEXT,
    "instagram" TEXT,
    "linkedin" TEXT,
    "resume" TEXT,
    "behance" TEXT,
    "personalPortfolio" TEXT,
    "medium" TEXT,

    CONSTRAINT "userprofile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "guild" (
    "id" TEXT NOT NULL,
    "profileCommandChannel" TEXT,
    "ownerId" TEXT,

    CONSTRAINT "guild_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userprofile_username_key" ON "userprofile"("username");
