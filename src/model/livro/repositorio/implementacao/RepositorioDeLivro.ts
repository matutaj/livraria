import { Decimal } from "@prisma/client/runtime/library";
import { prisma } from "../../../../prisma/client";
import { ILivroData, Ilivro } from "../Ilivro";
import { Livro } from "@prisma/client";


class RepositorioDeLivro implements Ilivro{
    async criar({nome,autor,categoriaId,dataLancamento,preco,quantidade,descricao }: ILivroData): Promise<Livro> {
        const cadastrarLivro = await prisma.livro.create({data:{
            nome,autor,categoriaId,dataLancamento,preco,quantidade,descricao
        }})
        return cadastrarLivro;
    }
    async listarLivroPeloId(id: string): Promise<Livro | undefined> {
        const listarPeloId = await prisma.livro.findFirst({where:{id}}) || undefined

        return listarPeloId

    }

     async listarLivroPeloNome(nome: string): Promise<Livro | undefined> {
        const listarPorNome = await prisma.livro.findFirst({where:{nome}}) || undefined;
        return listarPorNome;
    }
     async listarPorCategoria(categoriaId: string): Promise<Livro []> {
        const listarPorCategoriaId = await prisma.livro.findMany({where:{categoriaId}})
        return listarPorCategoriaId;
    }
     async listarTodoLivro(): Promise<Livro[]> {
        const listarTodo = await prisma.livro.findMany()
        return listarTodo;
        
    }
     async eliminarLivro(id: string): Promise<void> {
         await prisma.livro.delete({where:{id}})   
    }
     async atualizar({ id,  nome,autor,categoriaId,dataLancamento,preco,quantidade,descricao}: ILivroData): Promise<Livro> {
        const atualizar = await prisma.livro.update({where:{id}, data:{
            nome,autor,categoriaId,dataLancamento,preco,quantidade,descricao
        }})
        return atualizar
    }
}
export {RepositorioDeLivro}