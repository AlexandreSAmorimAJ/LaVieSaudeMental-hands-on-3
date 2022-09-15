const { response } = require("express");
const psicologosModel = require("../model/psicologos");



const psicologosController = {
    listAll: async (req, res) => {
            try {
                const psicologo = await psicologosModel.findAll();

                return res.status(200).json(psicologo);
                
            } catch (error) {
                res.json("Não foi possível exibir a lista!");
                console.error(error);              
            }
    },

    listOne: async (req, res) => {

        try {

            const { id_psicologo } = req.params;
            const onePsicologo = await psicologosModel.findByPk(id_psicologo);
            if(!onePsicologo) {
                res.status(404).json("Id não encontrado");
            }
            res.status(200).json(onePsicologo);
            
        } catch (error) {
            console.error(error);         
        }
    },

    createPsicologo: async (req, res) => {
        try {
            const { nome, email,senha, apresentacao } = req.body;

            const newPsicologo = await psicologosModel.create({
                nome, 
                email, 
                senha,
                apresentacao,
            });

             res.status(201).json(newPsicologo);
            
        } catch (error) {
            console.error(error);
            
        }
        
    },

    deleteOne: async (req, res) => {
        try {
            const { id_psicologo } = req.params;
            const psicologoID = await psicologosModel.findByPk(id_psicologo);

            await psicologosModel.destroy({
                where:{
                    id_psicologo,
                },    
            });

            if (!psicologoID) {
                return res.status(404).json("Id não encontrado");} 
    
                res.status(204).json("ID deletado com sucesso");
            
        } catch (error){
            console.error(error);
         
        }
    },


    editOne: async(req, res) => {
        try {
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
    
            res.status(200).json("Atualizado");
            
        } catch {
            res.status(400);
            
        }

       
    },   
};

module.exports = psicologosController;
