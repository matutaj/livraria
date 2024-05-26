

import { AppError } from "../../../../errors/AppError";
import { RepositorioDeLivro } from "../../repositorio/implementacao/RepositorioDeLivro";


class EliminarLivroUseCase {
    async execute(id: string): Promise<void> {
        const repository = new RepositorioDeLivro();

        const existLivroId = await repository.listarLivroPeloId(id)
        if (!existLivroId) throw new AppError("Não existe este Livro!", 400)

        await repository.eliminarLivro(id)


    }
}

export { EliminarLivroUseCase }