const psicologosModel = require("../model/psicologos");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");

const AuthController =  {

    async login(req, res){
        const { email, senha } = req.body

        const psicologo = await psicologosModel.findOne({
            where: {
                email,
            },
        });

        if(!psicologo) {
            return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
        }

        if(!bcrypt.compareSync(senha, psicologo.senha)) {
            return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
        }
        
        const token = jwt.sign(
            {id: psicologo.id_psicologo,
             email: psicologo.email,
             nome: psicologo.nome,  
            },
            secret.key
            );

        return res.status(200).json(token); // Caso as informações estejam corretas, deve ser gerado um token JWT que contenha o id, email e nome do psicólogo que fez o login dentro do seu conteúdo. Esse token deve ser enviado como resposta com o status 200.
        
    },
};



module.exports = AuthController;
