const express = require("express");

const server = express();

server.use(express.json());

const lojas = ["Masculina", "Feminina", "Infantil"];

// Retorna um loja
server.get("/lojas/:index", (req, res) => {
  const { index } = req.params;

  return res.json(lojas[index]);
});

// Retornar todas as lojas
server.get("/lojas", (req, res) => {
  return res.json(lojas);
});

// Criar nova loja
server.post("/lojas", (req, res) => {
  const { name } = req.body;
  lojas.push(name);

  return res.json(lojas);
});

// Atualizar loja
server.put("/lojas/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  lojas[index] = name;

  return res.json(lojas);
});

// Deletar curso
server.delete("/lojas/:index", (req, res) => {
  const { index } = req.params;

  lojas.splice(index, 1);
  return res.json({ message: "A loja foi deletado" });
});

server.listen(3000);
