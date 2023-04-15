/*
  Warnings:

  - Added the required column `listName` to the `List` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Fav" DROP CONSTRAINT "Fav_listId_fkey";

-- AlterTable
ALTER TABLE "Fav" ALTER COLUMN "listId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "List" ADD COLUMN     "listName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Fav" ADD CONSTRAINT "Fav_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE SET NULL ON UPDATE CASCADE;
