import { Router } from "express";

import { CriarLivroController } from "../model/livro/useCase/criar/CriarLivroController";
import { ListarLivroPorIdController } from "../model/livro/useCase/listarPorId/ListarlivroPorIdController";
import { ListarLivroPorNomeController } from "../model/livro/useCase/listarPorNome/ListarLivroPorNomeController";
import { ListaTodoLivroController } from "../model/livro/useCase/listarTodo/LIstarTodoLivroController";

const routerLivro = Router();
const criarLivro = new CriarLivroController()
const listarPorNome = new ListarLivroPorNomeController()
const listarPorId = new ListarLivroPorIdController()
const listarTodo = new ListaTodoLivroController()


routerLivro.post("/", criarLivro.handle)
routerLivro.get("/:id", listarPorId.handle)
routerLivro.get("/:nome",listarPorNome.handle)
routerLivro.get("/", listarTodo.handle)
export {routerLivro}