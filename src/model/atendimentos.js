const db = require("../database");
const sequelize = require("sequelize");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");
const Atendimentos = db.define(
  "Atendimentos",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    data: {
      type: sequelize.DATE,
      allowNull: false
    },
    observacao: {
      type: sequelize.STRING,
      allowNull: false
    },
    pacientes_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      Reference: {
        model: Pacientes,
        key: "id"
      },
    },
    psicologos_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      Reference: {
        model: Psicologos,
        key: "id"
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