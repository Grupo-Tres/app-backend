-- AlterTable
ALTER TABLE "pedido" ALTER COLUMN "status" SET DEFAULT E'Pendente',
ALTER COLUMN "subTotal" DROP NOT NULL,
ALTER COLUMN "taxaEntrega" DROP NOT NULL,
ALTER COLUMN "total" DROP NOT NULL;