import { Livro } from "@prisma/client";
import { RepositorioDeLivro } from "../../repositorio/implementacao/RepositorioDeLivro";


class ListarTodoLivroUseCase{
    async execute():Promise<Livro[]>{
        const livreoRepository = new RepositorioDeLivro();

        const result = await livreoRepository.listarTodoLivro();

        return result

    }

}
export{ListarTodoLivroUseCase}