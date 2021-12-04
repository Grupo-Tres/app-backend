/*
  Warnings:

  - Added the required column `bairro` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complemento` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rua` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "bairro" TEXT NOT NULL,
ADD COLUMN     "cidade" TEXT NOT NULL,
ADD COLUMN     "complemento" TEXT NOT NULL,
ADD COLUMN     "estado" TEXT NOT NULL,
ADD COLUMN     "numero" TEXT NOT NULL,
ADD COLUMN     "rua" TEXT NOT NULL;
