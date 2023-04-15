/*
  Warnings:

  - The primary key for the `Fav` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Fav` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `A` on the `_FavToList` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "_FavToList" DROP CONSTRAINT "_FavToList_A_fkey";

-- AlterTable
ALTER TABLE "Fav" DROP CONSTRAINT "Fav_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Fav_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_FavToList" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_FavToList_AB_unique" ON "_FavToList"("A", "B");

-- AddForeignKey
ALTER TABLE "_FavToList" ADD CONSTRAINT "_FavToList_A_fkey" FOREIGN KEY ("A") REFERENCES "Fav"("id") ON DELETE CASCADE ON UPDATE CASCADE;
