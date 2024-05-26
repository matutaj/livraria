import { Request, Response } from "express";
import { ListarLivroPorNomeUseCase } from "./ListarLivroPorNomeUseCase";



class ListarLivroPorNomeController{

    async handle(req: Request, res:Response){
        const listarPeloNome= new ListarLivroPorNomeUseCase();
        const {nome} = req.params

        const result = await listarPeloNome.execute(nome)

        return res.status(200).json(result)
    
    }

}
export{ListarLivroPorNomeController}