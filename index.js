const express = require("express");
const { hasConection } = require("./src/database");
const routes = require("./src/routes");

const server = express();
hasConection();
server.use(express.json());

server.use(routes);

server.listen(8000, () => console.log("Servidor rodando na porta 8000"));