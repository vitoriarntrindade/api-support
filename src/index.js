const express = require("express");
const app = express();
const port = 3000;

const router = require("./routers/routersService");

app.use(express.json());

app.use(router);

app.listen(port, (error) => {
  if (error) {
    console.log("Algo deu errado com a conexão");
    return;
  }
  console.log(`Servidor rodando na porta ${port}`);
});
