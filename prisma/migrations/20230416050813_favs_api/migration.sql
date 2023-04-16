/*
  Warnings:

  - You are about to drop the column `listId` on the `Fav` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Fav" DROP COLUMN "listId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "token" TEXT;
