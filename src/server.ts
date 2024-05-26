import express from "express"
import { routes } from "./routes";
import AppErrorHandler from "./errors/errorhandler";

const app = express();

const port = 2222;

app.use(express.json());

app.use(routes);
app.use(AppErrorHandler)

app.listen(port, ()=>{
    console.log("Livraria do Itel")
})