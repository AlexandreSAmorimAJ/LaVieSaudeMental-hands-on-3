const { response } = require("express");
const psicologosModel = require("../model/psicologos");
const psicologosController = {
    listAll: async (req, res) => {
        const psicologo = await psicologosModel.findAll();
        return res.json(psicologo);
    },
    listOne: async (req, res) => {
        const { id_psicologo } = req.params;
        const onePsicologo = await psicologosModel.findByPk(id_psicologo);
        res.json(onePsicologo);
    },
    createPsicologo: async (req, res) => {
        const { nome, email,senha, apresentacao } = req.body;
        const newPsicologo = await psicologosModel.create({
            nome, 
            email, 
            senha,
            apresentacao,
        });
        res.json(newPsicologo);
    },
    deleteOne: async (req, res) => {
        const { id_psicologo } = req.params;
        await psicologosModel.destroy({
            where:{
                id_psicologo,
            },    
        });
        res.json("ID deletado com sucesso");
    },
    editOne: async(req, res) => {
        const { id_psicologo } = req.params;
        const { nome, email, senha, apresentacao } = req.body;
        const psicologoUpdated = await psicologosModel.update(
            {
                nome, email, senha, apresentacao 
            },
            {
                where: {
                    id_psicologo,
                },
            }
        );
        res.json("Cadastro Atualizado");
    },
};
module.exports = psicologosController;
