import { Router } from "express";

import { CriarLivroController } from "../model/livro/criar/CriarLivroController";
import { ListarLivroPorIdController } from "../model/livro/listarPorId/ListarlivroPorIdController";
import { ListarLivroPorNomeController } from "../model/livro/listarPorNome/ListarLivroPorNomeController";

const routerLivro = Router();
const criarLivro = new CriarLivroController()
const listarPorNome = new ListarLivroPorNomeController()
const listarPorId = new ListarLivroPorIdController()


routerLivro.post("/", criarLivro.handle)
routerLivro.get("/", listarPorId.handle)
routerLivro.get("/",listarPorNome.handle)
export {routerLivro}