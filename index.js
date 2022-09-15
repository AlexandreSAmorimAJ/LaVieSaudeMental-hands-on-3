const express = require("express");
const { hasConection } = require("./src/database");
const routes = require("./src/routes");
const handleError = require("./src/middlewares/handleError");
const server = express();

hasConection();

server.use(express.json());
server.use(routes);
server.use(handleError);

server.listen(8000, () => console.log("Servidor rodando na porta 8000"));
