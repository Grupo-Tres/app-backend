/*
  Warnings:

  - You are about to drop the column `preco` on the `produto` table. All the data in the column will be lost.
  - You are about to drop the column `tamanho` on the `produto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "produto" DROP COLUMN "preco",
DROP COLUMN "tamanho";
