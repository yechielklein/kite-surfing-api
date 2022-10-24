/*
  Warnings:

  - You are about to drop the column `description` on the `Kite` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Kite" DROP COLUMN "description",
ADD COLUMN     "notes" TEXT;
