const db = require("../database");
const sequelize = require("sequelize");
const Pacientes = require("../model/pacientes");
const Psicologos = require("../model/psicologos");
const Atendimentos = db.define(
  "Atendimentos",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    data_atendimento: {
      type: sequelize.DATE,
      allowNull: false
    },
    observacao: {
      type: sequelize.STRING,
      allowNull: false
    },
    id_paciente: {
      type: sequelize.INTEGER,
      allowNull: false,
      Reference: {
        model: Pacientes,
        key: "id_paciente"
      },
    },
    id_psicologo: {
      type: sequelize.INTEGER,
      allowNull: false,
      Reference: {
        model: Psicologos,
        key: "id_psicologo"
      },
    },
  },
  {
    tableName: "atendimentos",
    underscored: true,
    timestamps: false
  }
);
module.exports = Atendimentos;
