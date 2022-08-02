const { Model, DataTypes, Sequelize } = require("sequelize");

const ORDER_WORK_TYPE_TABLE = "order_work_types";

const orderWorkTypeSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  workTypeId: {
    field: "work_type_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    // references: {
    //   model: PRODUCT_TABLE,
    //   key: 'id',
    // },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  orderId: {
    field: "order_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    // references: {
    //   model: PRODUCT_TABLE,
    //   key: 'id',
    // },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
};

class OrderWorkType extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_WORK_TYPE_TABLE,
      modelName: "OrderWorkType",
      timestamps: false,
    };
  }
}

module.exports = { ORDER_WORK_TYPE_TABLE, orderWorkTypeSchema, OrderWorkType };
