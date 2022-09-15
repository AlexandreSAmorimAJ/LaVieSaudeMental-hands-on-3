const { response } = require("express");
const psicologosModel = require("../model/psicologos");
const bcrypt = require("bcryptjs");



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
            
            const { nome, email,senha, apresentacao } = req.body;

            try {
                const senhaHash = bcrypt.hashSync(senha, 10);

                const userSaved = await psicologosModel.count({
                    where: {
                        email,
                    },
                });

                if(userSaved) {
                    return res.status(400).json("Email já cadastrado!");
                }

                const newPsicologo = await psicologosModel.create({
                    nome, 
                    email, 
                    senha: senhaHash,
                    apresentacao,
                });
                return res.status(201).json(newPsicologo);
                
            } catch (error) {
                console.log(error);
                
            }      
    },

    login: async ( req, res) => {
        const { email, senha } = req.body;

        const userSaved = await psicologosModel.findOne({
            where: {
                email,
            },
        });

        if(!userSaved) {
            return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
        }

        if(!bcrypt.compareSync(senha, userSaved.senha)){
            return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
        }

        return res.status(200).json("Login Efetuado");

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
