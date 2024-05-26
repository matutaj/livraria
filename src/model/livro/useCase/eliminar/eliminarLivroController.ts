import { Request, Response } from "express";
import { EliminarLivroUseCase } from "./eliminarLivroUseCase";
import { AppError } from "../../../../errors/AppError";


class DeleteGradeController {
    async handle(req: Request, res: Response) {
        const useCaselivro = new EliminarLivroUseCase();
        const { id } = req.params;

        await useCaselivro.execute(id)

        return res.status(200).json("eliminado")

    }
}
export { DeleteGradeController }