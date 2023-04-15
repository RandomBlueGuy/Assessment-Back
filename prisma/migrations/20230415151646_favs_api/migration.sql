/*
  Warnings:

  - The primary key for the `Fav` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `fav_id` on the `Fav` table. All the data in the column will be lost.
  - The primary key for the `List` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `list_id` on the `List` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `User` table. All the data in the column will be lost.
  - The required column `id` was added to the `Fav` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `listId` to the `Fav` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `List` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Fav" DROP CONSTRAINT "Fav_pkey",
DROP COLUMN "fav_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "listId" INTEGER NOT NULL,
ADD CONSTRAINT "Fav_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "List" DROP CONSTRAINT "List_pkey",
DROP COLUMN "list_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "ownerId" TEXT NOT NULL,
ADD CONSTRAINT "List_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "List" ADD CONSTRAINT "List_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fav" ADD CONSTRAINT "Fav_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
