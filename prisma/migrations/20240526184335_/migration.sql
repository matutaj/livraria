-- CreateTable
CREATE TABLE "Livro" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "dataLancamento" TIMESTAMP(3) NOT NULL,
    "preco" DECIMAL(65,30) NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "descricao" TEXT,
    "categoriaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Livro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" TEXT NOT NULL,
    "designacao" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Livro" ADD CONSTRAINT "Livro_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;
