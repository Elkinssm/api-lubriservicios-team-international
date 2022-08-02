const { Model, DataTypes, Sequelize } = require("sequelize");

const { VEHICLE_TABLE } = require("./vehicle.models");
const { USER_TABLE } = require("./user.model");
const ORDER_TABLE = "orders";

const orderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
  reference: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
  userId: {
    field: "user_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  vehicleId: {
    field: "vehicle_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: VEHICLE_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
};

class Order extends Model {
  static associate(models) {
    this.hasMany(models.User, {
      as: "vehicles",
      foreignKey: "userId",
    });
    this.hasMany(models.Vehicle, {
      as: "vehicles",
      foreignKey: "vehicleId",
    });
    this.belongsTo(models.OrderWorkType, { as: "orderWorkType" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: "Order",
      timestamps: false,
    };
  }
}

module.exports = { ORDER_TABLE, orderSchema, Order };
