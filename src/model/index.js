const Psicologos = require("./psicologos");
const Atendimentos = require("./atendimentos");
const Pacientes = require("./pacientes");

Atendimentos.belongsTo(Pacientes, {
    foreignKey: "id_paciente"
});

Pacientes.hasMany(Atendimentos,{
    foreignKey: "id_paciente"
});

Atendimentos.belongsTo(Psicologos, {
    foreignKey: "id_psicologo"
});

Psicologos.hasMany(Atendimentos, {
    foreignKey: "id_psicologo"
});

module.exports = {
    Psicologos,
    Atendimentos,
    Pacientes
};