import express from "express";

const app = express();

app.get("/", (req, res) =>{
    res.send("Hello tsc-watch");

})

app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000");

})
