const User = require("./models/user.model");
const Rol = require("./models/roles.models");

// Uno a uno

// Usuario tiene una direccion
// añadir una clave foranea userId a la tabla addresses
Rol.hasOne(User, { as: "user", foreignKey: "id" });

// Añade una clave userId a la tabla addresses
User.belongsTo(Rol, { as: "rol", foreignKey: "id" });
