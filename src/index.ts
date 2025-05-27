import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) =>{
    res.send("Hello tsc-watch");
});

let usuarios = [{
    nome: "Enildo Martins",
    idade: 20
}, {
    nome: "João da Silva",
    idade: 33
}];


app.get("/users", (req: Request, res: Response) =>{
    res.send(usuarios);
});

app.post("/users", (req: Request, res: Response) =>{
    let user = req.body;
    usuarios.push(user);
    res.send({
        message: "Usuario criado com sucesso!"
    });
});

app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000");

});
