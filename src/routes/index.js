const express = require("express");
const psicologosController = require("../controller/psicologos.controller");
const PacientesController = require("../controller/pacientes.controller");
const atendimentosController = require("../controller/atendimentos.controller");
const atendimentosValidators = require("../validations/usuarios/atendimentos");
const routes = express.Router();
const usuarioCreateValidation = require("../validations/usuarios/create"); 
const authLoginValidation = require("../validations/usuarios/auth/login");
const authController = require("../controller/authController");


// Rotas dos psicólogos


routes.get('/psicologos', psicologosController.listAll);
routes.get('/psicologos/:id_psicologo', psicologosController.listOne );
routes.post('/psicologos', usuarioCreateValidation, psicologosController.createPsicologo);
routes.post('/login', authLoginValidation, authController.login);
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
