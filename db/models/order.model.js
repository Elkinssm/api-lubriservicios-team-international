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
  dateIn: {
    type: DataTypes.STRING,
    allowNUll: false,
  },
  dateOut: {
    type: DataTypes.STRING,
    allowNUll: false,
  },
  totalValue: {
    type: DataTypes.DECIMAL,
    allowNUll: false,
  },
  kmsIn: {
    type: DataTypes.DECIMAL,
    allowNUll: false,
  },
  ownerDescription: {
    type: DataTypes.TEXT,
    allowNUll: true,
  },
  diagnostic: {
    type: DataTypes.TEXT,
    allowNUll: false,
  },
  workPerformed: {
    type: DataTypes.TEXT,
    allowNUll: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNUll: false,
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
    Order.belongsTo(models.Vehicle, { as: "vehicle", foreignKey: "vehicleId" });
    Order.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
    });
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
