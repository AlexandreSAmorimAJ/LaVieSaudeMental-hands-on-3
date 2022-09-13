
const psicologosModel = require("../model/psicologos");



const psicologosController = {
    listAll: async (req, res) => {
        const psicologo = await psicologosModel.findAll();

        return res.json(psicologo);
    },

    async postOne(req, res) {
        const { psicologos } = req.body;
        
        const newPsicologo = await psicologosModel.create({
            nome,
            email,
            apresentacao
        });

        res.json(newPsicologo);
    },
}

module.exports = psicologosController;