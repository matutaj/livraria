import express from "express"

const app = express();

const port = 2222;

app.use(express.json());

app.listen(port, ()=>{
    console.log("Livraria do Itel")
})