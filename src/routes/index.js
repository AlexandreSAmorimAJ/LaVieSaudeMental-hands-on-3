const express = require("express");
const psicologosController = require("../controller/psicologos.controller");
const PacientesController = require("../controller/pacientes.controller");
const atendimentosController = require("../controller/atendimentos.controller");
const routes = express.Router();
const usuarioCreateValidation = require("../validations/usuarios/create"); 

// Rotas dos psicólogos

routes.post('/login', usuarioCreateValidation, psicologosController.createPsicologo);
routes.get('/psicologos', psicologosController.listAll);
routes.get('/psicologos/:id_psicologo', psicologosController.listOne );
routes.post('/psicologos', psicologosController.createPsicologo);
routes.put('/psicologos/:id_psicologo', psicologosController.editOne);
routes.delete('/psicologos/:id_psicologo', psicologosController.deleteOne);

// rotas dos pacientes

routes.get("/pacientes", PacientesController.listAll);
routes.post("/pacientes", PacientesController.insert);
routes.get("/pacientes/:id", PacientesController.getOne);
routes.put("/pacientes/:id", PacientesController.attPaciente);
routes.delete("/pacientes/:id", PacientesController.deletePaciente);

// rotas de atendimentos

routes.get("/atendimentos", atendimentosController.listar);
routes.get("/atendimentos/:id", atendimentosValidators.listarID, atendimentosController.listarID);
routes.post("/atendimentos",atendimentosValidators.cadastrar,  atendimentosController.cadastrar);

module.exports = routes;
