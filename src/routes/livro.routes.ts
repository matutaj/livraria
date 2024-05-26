import { Router } from "express";

import { CriarLivroController } from "../model/livro/criar/CriarLivroController";


const routerLivro = Router();
const criarLivro = new CriarLivroController()


routerLivro.post("/", criarLivro.handle)
export {routerLivro}