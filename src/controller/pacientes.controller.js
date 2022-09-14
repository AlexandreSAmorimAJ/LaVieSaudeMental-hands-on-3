const { Pacientes } = require("../model");

const PacientesController  = {
    insert: async (req,res) => {
        try{
            const { nome, email, idade } = req.body;
            const newPaciente = await Pacientes.create ({
                nome,
                email,
                idade
            });
            return res.status(201).json(newPaciente);
        }catch{
            return res.status(400);
        }
    },
    listAll: async (req,res) => {
        try{
            const pacientes = await Pacientes.findAll();
            return res.json(pacientes);
        }catch{
            res.status(200).json();
        }
    }, 
    getOne: async (req,res)  => {
        try{
            const {id} = req.params;
    
            const paciente = await Pacientes.findByPk(id);
            return res.status(200).json(paciente);
        }catch{
            return res.status(404).json("Id não encontrado");
        }
        },
    async attPaciente (req, res){
        try{
            const { id } = req.params;
            const { nome, email, idade } = req.body;

            const pacienteAtualizado = await Pacientes.update(
                {
                    nome,
                    email,
                    idade,
                },
                {
                    where: {
                    id_paciente:id,
                    },
                }
            );
            res.status(200).json("Atualizado com sucesso");
        }catch{
            res.status(400);
        }
    },
    async deletePaciente(req, res) {
        try{
            const { id } = req.params;
    
            await Pacientes.destroy({
            where: {
            id_paciente:id,
            },
            });
    
            return res.status(204);
        }catch{
            return res.status();
        }
    },
}

module.exports = PacientesController;
