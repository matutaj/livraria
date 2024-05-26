/*
  Warnings:

  - You are about to drop the column `categoriaId` on the `Livro` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Livro" DROP CONSTRAINT "Livro_categoriaId_fkey";

-- AlterTable
ALTER TABLE "Livro" DROP COLUMN "categoriaId";
