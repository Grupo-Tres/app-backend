-- CreateTable
CREATE TABLE "opcoes" (
    "id" TEXT NOT NULL,
    "opcao" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "produtoId" TEXT NOT NULL,

    CONSTRAINT "opcoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "opcoes" ADD CONSTRAINT "opcoes_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
