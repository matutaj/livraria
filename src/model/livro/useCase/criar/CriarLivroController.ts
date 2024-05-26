import { Request, Response } from "express";
import { CriarLivroUseCase } from "./CriarLivroUseCase";

class CriarLivroController{
    async handle(req:Request, res:Response){
        const criarLivroUseCase = new CriarLivroUseCase()
        const {autor,dataLancamento,nome,preco,quantidade,descricao} = req.body

        const result = await criarLivroUseCase.execute({
            autor,dataLancamento,nome,preco,quantidade,descricao
        })

        return res.status(200).json(result)
    }
}
export{CriarLivroController}