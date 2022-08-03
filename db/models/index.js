const { User, userSchema } = require("./user.model");
const { Material, materialSchema } = require("./materials.model");
const {
  OrderWorkType,
  orderWorkTypeSchema,
} = require("./order-work-type.models");
const { Order, orderSchema } = require("./order.model");
const { Rol, rolSchema } = require("./roles.models");
const { Vehicle, vehicleSchema } = require("./vehicle.models");
const {
  WorkMaterials,
  workMaterialsSchema,
} = require("./work-materials.models");
const { WorkTypes, workTypesSchema } = require("./work-types.model");

const setupModels = (sequelize) => {
  User.init(userSchema, User.config(sequelize));
  Material.init(materialSchema, Material.config(sequelize));
  OrderWorkType.init(orderWorkTypeSchema, OrderWorkType.config(sequelize));
  Order.init(orderSchema, Order.config(sequelize));
  Rol.init(rolSchema, Rol.config(sequelize));
  Vehicle.init(vehicleSchema, Vehicle.config(sequelize));
  WorkMaterials.init(workMaterialsSchema, WorkMaterials.config(sequelize));
  WorkTypes.init(workTypesSchema, WorkTypes.config(sequelize));

  Rol.associate(sequelize.models);
  User.associate(sequelize.models);
  WorkTypes.associate(sequelize.models);
  Material.associate(sequelize.models);
  Vehicle.associate(sequelize.models);
  WorkMaterials.associate(sequelize.models);
  Order.associate(sequelize.models);
  OrderWorkType.associate(sequelize.models);
};

module.exports = setupModels;
