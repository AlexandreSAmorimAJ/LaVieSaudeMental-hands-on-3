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

        return res.json(token);
        
    },
};



module.exports = AuthController;