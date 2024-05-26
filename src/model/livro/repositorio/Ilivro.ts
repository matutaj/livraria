import { Categoria, Livro } from "@prisma/client";

export interface ILivroData{
    id?:string,
    nome:string,
    autor:string,
    dataLancamento:Date,
    preco:number,
    quantidade:number,
    descricao?:string,
    //categoriaId:string

}
export interface Ilivro{
    criar({}:ILivroData):Promise<Livro>
    listarTodoLivro():Promise<Livro []>
    listarLivroPeloNome(nome:string):Promise<Livro |undefined>
    listarLivroPeloId(id:string):Promise< Livro | undefined>
   // listarPorCategoria(categoriaId:string):Promise<Livro []>
    eliminarLivro(id:string):Promise<void>
    atualizar({}:ILivroData):Promise<Livro>
}