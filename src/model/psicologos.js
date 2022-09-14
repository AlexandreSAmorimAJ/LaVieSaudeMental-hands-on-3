const sequelize = require("sequelize");
const db = require("../database"); //vai conectar a tabela

const psicologos = db.define(
    'psicologos',
    {
        id_psicologo: {
            type: sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: sequelize.DataTypes.STRING,
        },
        email: {
            type: sequelize.DataTypes.STRING,  //VARCHAR = STRING
        }, 
        senha: {
            type:sequelize.DataTypes.STRING,
        },       
        apresentacao: {
            type: sequelize.DataTypes.STRING,
        },
        createdAt: {
            type: sequelize.DataTypes.DATE,
        },
        updatedAt: {
            type: sequelize.DataTypes.DATE,
        },
    }, 
    {
        tableName: "psicologos",
        timestamps: true,
    }   
);

module.exports = psicologos;


