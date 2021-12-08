/*
  Warnings:

  - You are about to drop the column `Opcao` on the `carrinho` table. All the data in the column will be lost.
  - Added the required column `opcao` to the `carrinho` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "carrinho" DROP COLUMN "Opcao",
ADD COLUMN     "opcao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pedido" ALTER COLUMN "comentarios" DROP NOT NULL;
