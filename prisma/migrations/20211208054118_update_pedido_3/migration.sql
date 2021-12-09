-- AlterTable
CREATE SEQUENCE "pedido_numeropedido_seq";
ALTER TABLE "pedido" ALTER COLUMN "numeroPedido" SET DEFAULT nextval('pedido_numeropedido_seq');
ALTER SEQUENCE "pedido_numeropedido_seq" OWNED BY "pedido"."numeroPedido";
