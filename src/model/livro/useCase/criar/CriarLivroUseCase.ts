import { AppError } from "../../../../errors/AppError";
import { ILivroData } from "../../repositorio/Ilivro";
import { Livro } from "@prisma/client";
import { RepositorioDeLivro } from "../../repositorio/implementacao/RepositorioDeLivro";

class CriarLivroUseCase{
 async execute({autor,dataLancamento,nome,preco,quantidade,descricao}:ILivroData):Promise<Livro>{
    const repositorioLivro = new RepositorioDeLivro();

    const existNome = await repositorioLivro.listarLivroPeloNome(nome)
    if (existNome)  throw new AppError("Este Livro Já existe!")

        const result = await repositorioLivro.criar({
            autor,dataLancamento,nome,preco,quantidade,descricao
        })



        return result;

 }
}
export {CriarLivroUseCase}