const Atendimentos = require("../model/atendimentos.js");
const Pacientes = require("../model/pacientes.js");
const Psicologos = require("../model/psicologos.js");


const atendimentosController = {
  listAtendimento: async (req, res) => {
    try {
      const atendimentos = await Atendimentos.findAll({
        include: [
          {
            model: Pacientes,
          },
          {
            model: Psicologos,
          },
        ],
      });
      return res.json(atendimentos);
    } catch (error) {
      console.error(error);
    }
  },
  listOne: async (req, res) => {
    const { id } = req.params;
    try {
      const atendimento = await Atendimentos.findByPk(id, {
        include: [
          {
            model: Pacientes,
          },
          {
            model: Psicologos,
          },
        ],
      });
      if (!atendimento) {
        return res.status(404).json('Id não encontrado');
      } else {
        return res.json(atendimento);
      }
    } catch (error) {
      console.error(error);
    }
  },
  createAtendimento: async (req, res) => {
    console.log(req.auth);

    const { data_atendimento, observacao, id_psicologo, id_paciente } =
      req.body; 
    try {
      const newAtendimento = await Atendimentos.create({
        data_atendimento,
        observacao,
        id_psicologo,
        id_paciente
      });
      res.status(201).json(newAtendimento);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = atendimentosController;
