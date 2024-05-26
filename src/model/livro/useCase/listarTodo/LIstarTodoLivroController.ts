import { Request, Response } from "express";
import { ListarTodoLivroUseCase } from "./ListarTodoLivroUseCase";

class ListaTodoLivroController{

    async handle(req: Request, res:Response){
        const useCaseRegiao= new ListarTodoLivroUseCase();
  
        const result = await useCaseRegiao.execute()

        return res.status(200).json(result)
    }
}
export{ListaTodoLivroController}