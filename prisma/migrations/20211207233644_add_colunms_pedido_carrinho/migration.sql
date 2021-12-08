/*
  Warnings:

  - Added the required column `Opcao` to the `carrinho` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `carrinho` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco` to the `carrinho` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `carrinho` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comentarios` to the `pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroPedido` to the `pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subTotal` to the `pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taxaEntrega` to the `pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `pedido` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "carrinho" ADD COLUMN     "Opcao" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "preco" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantidade" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "pedido" ADD COLUMN     "comentarios" TEXT NOT NULL,
ADD COLUMN     "numeroPedido" INTEGER NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT E'Realizado',
ADD COLUMN     "subTotal" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "taxaEntrega" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total" DOUBLE PRECISION NOT NULL;
