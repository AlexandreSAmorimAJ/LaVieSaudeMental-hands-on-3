const bcrypt = require("bcryptjs");

const senha = "123";

const hash = bcrypt.hashSync(senha, 10);

bcrypt.compareSync(senha, hash) // true or false