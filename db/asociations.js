const User = require("./models/user.model");
const Rol = require("./models/roles.models");
const Vehicle = require("./models/vehicle.models");
const Order = require("./models/order.model");
const WorksMaterials = require("./models/work-materials.models");
const Material = require("./models/materials.model");
const WorksTypes = require("./models/work-types.model");
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
// Vehiculo va a tener muchas ordenes
// Se añade una clave userId a la tabla vehiculos
Vehicle.hasMany(Order, { as: "order", foreignKey: "vehicle_id" });

// Se añade una clave vehicleId a la tabla order
Order.belongsTo(Vehicle, { as: "vehicle" });

// Uno a muchos, 1 a N
// Vehiculo va a tener muchas ordenes
// Se añade una clave userId a la tabla vehiculos
WorksMaterials.hasMany(Material, { as: "material", foreignKey: "material_id" });

// Se añade una clave vehicleId a la tabla order
Material.belongsTo(WorksMaterials, { as: "work-material" });

// Uno a muchos, 1 a N
// Vehiculo va a tener muchas ordenes
// Se añade una clave userId a la tabla vehiculos
WorksMaterials.hasMany(WorksTypes, {
  as: "work-types",
  foreignKey: "work_type_id",
});

// Se añade una clave vehicleId a la tabla order
WorksTypes.belongsTo(WorksMaterials, { as: "work-material" });
