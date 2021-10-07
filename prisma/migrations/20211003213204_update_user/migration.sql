/*
  Warnings:

  - Added the required column `admin` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `user` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "admin" BOOLEAN NOT NULL,
ADD COLUMN     "cep" TEXT NOT NULL,
ALTER COLUMN "email" SET NOT NULL;
