import { Livro } from "@prisma/client";
import { RepositorioDeLivro } from "../repositorio/implementacao/RepositorioDeLivro";
import { AppError } from "../../../errors/AppError";

class ListarLivroPorNomeUseCase{
    async execute(nome:string):Promise<Livro | undefined>{
        const repositorio = new RepositorioDeLivro();

        const existNome = await repositorio.listarLivroPeloNome(nome)
        if(! existNome) throw new AppError("Nome desse livro Não Encontrado!", 400)

        return existNome

    }

}
export{ListarLivroPorNomeUseCase}