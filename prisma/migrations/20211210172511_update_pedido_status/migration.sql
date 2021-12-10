/*
  Warnings:

  - The `status` column on the `pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "pedido" DROP COLUMN "status",
ADD COLUMN     "status" INTEGER NOT NULL DEFAULT 1;
