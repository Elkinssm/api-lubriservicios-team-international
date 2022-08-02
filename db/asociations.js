const User = require("./models/user.model");
const Rol = require("./models/roles.models");
const Vehicle = require("./models/vehicle.models");
const Order = require("./models/order.model");
// const  = require('')
// const  = require('')

// Uno a uno

// Usuario tiene un Rol
// añadir una clave foranea rolId a la tabla users
Rol.hasOne(User, { as: "user", foreignKey: "id" });

// Añade una clave rolId a la tabla users
User.belongsTo(Rol, { as: "rol", foreignKey: "id" });

// Uno a muchos, 1 a N
// Usuario va a tener muchos vehiculos
// Se añade una clave userId a la tabla vehiculos
User.hasMany(Vehicle, { as: "vehicle", foreignKey: "user_id" });

// Se añade una clave userId a la tabla vehiculos
Vehicle.belongsTo(User, { as: "user" });

// Uno a muchos, 1 a N
// Usuario va a tener muchos vehiculos
// Se añade una clave userId a la tabla vehiculos
Vehicle.hasMany(Order, { as: "order", foreignKey: "vehicle_id" });

// Se añade una clave userId a la tabla vehiculos
Order.belongsTo(Vehicle, { as: "vehicle" });
