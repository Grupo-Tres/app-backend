/*
  Warnings:

  - You are about to drop the column `categoriaName` on the `categoria` table. All the data in the column will be lost.
  - Added the required column `sessaoName` to the `categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tamanho` to the `produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categoria" DROP COLUMN "categoriaName",
ADD COLUMN     "sessaoName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "produto" ADD COLUMN     "tamanho" TEXT NOT NULL;
