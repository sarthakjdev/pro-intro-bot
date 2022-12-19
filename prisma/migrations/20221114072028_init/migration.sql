/*
  Warnings:

  - You are about to drop the column `personalPortfolio` on the `userprofile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "userprofile" DROP COLUMN "personalPortfolio",
ADD COLUMN     "portfolio" TEXT;
