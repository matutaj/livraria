import { Request, Response } from "express";
import { ListarLivroPorIdUseCase } from "./ListarLivroPorIdUseCase";



class ListarLivroPorIdController{

    async handle(req: Request, res:Response){
        const listarLivroPorId= new ListarLivroPorIdUseCase();
        const {id} = req.params

        const result = await listarLivroPorId.execute(id)

        return res.status(200).json(result)
    
    }

}
export{ListarLivroPorIdController}