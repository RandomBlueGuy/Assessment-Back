-- DropForeignKey
ALTER TABLE "Fav" DROP CONSTRAINT "Fav_listId_fkey";

-- CreateTable
CREATE TABLE "_FavToList" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FavToList_AB_unique" ON "_FavToList"("A", "B");

-- CreateIndex
CREATE INDEX "_FavToList_B_index" ON "_FavToList"("B");

-- AddForeignKey
ALTER TABLE "_FavToList" ADD CONSTRAINT "_FavToList_A_fkey" FOREIGN KEY ("A") REFERENCES "Fav"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavToList" ADD CONSTRAINT "_FavToList_B_fkey" FOREIGN KEY ("B") REFERENCES "List"("id") ON DELETE CASCADE ON UPDATE CASCADE;
