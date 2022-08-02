const { Model, DataTypes, Sequelize } = require("sequelize");

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
  vehicleUserId: {
    field: "user_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    // references: {
    //   model: PRODUCT_TABLE,
    //   key: 'id',
    // },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  vehicleId: {
    field: "vehicle_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    // references: {
    //   model: PRODUCT_TABLE,
    //   key: 'id',
    // },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Order extends Model {
  static associate() {}

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
