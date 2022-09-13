const { Pacientes } = require("../model");

const PacientesController  = {
    insert: async (req,res) => {
        const { nome, email, idade } = req.body;
        const newPaciente = await Pacientes.create ({
            nome,
            email,
            idade
        });
        return res.status(201).json(newPaciente)
    },
    listAll: async (req,res) => {
        const pacientes = await Pacientes.findAll();
        return res.json(pacientes);
    }, 
    getOne: async (req,res)  => {
        const {id} = req.params;
    
        const paciente = await Pacientes.findByPk(id);
        return res.json(paciente);
        },
    async attPaciente (req, res){
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
    },
    async deletePaciente(req, res) {
        const { id } = req.params;
    
        await Pacientes.destroy({
          where: {
            id_paciente:id,
          },
        });
    
        return res.status(204);
      },
}

module.exports = PacientesController;