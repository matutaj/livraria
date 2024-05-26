import { Router } from "express";
import { routerLivro } from "./livro.routes";


const routes = Router()

routes.use("/livro", routerLivro)

export {routes}