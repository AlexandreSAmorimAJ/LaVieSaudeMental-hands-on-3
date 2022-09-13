const express = require("express");
const psicologosController = require("../controller/psicologos.controller");
const routes = express.Router();

routes.get('/psicologos', psicologosController.listAll);
//routes.get('/psicologos/:id_psicologo', psicologosController.listOne );
routes.post('/psicologos', psicologosController.postOne);
//routes.put('/psicologos/:id_psicologo', psicologosController.editOne);
//routes.delete('/psicologos/:id_psicologo', psicologosController.deleteOne);


module.exports = routes;
