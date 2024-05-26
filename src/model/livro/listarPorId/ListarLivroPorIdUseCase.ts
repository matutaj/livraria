import { Livro } from "@prisma/client";
import { RepositorioDeLivro } from "../repositorio/implementacao/RepositorioDeLivro";
import { AppError } from "../../../errors/AppError";


class ListarLivroPorIdUseCase{
    async execute(id:string):Promise<Livro | undefined>{
        const repositorio = new RepositorioDeLivro();

        const existLivroId = await repositorio.listarLivroPeloId(id)
        if(! existLivroId) throw new AppError("Essa id Não foi Encontrado!", 400)

        return existLivroId

    }

}
export{ListarLivroPorIdUseCase}