const { Model, DataTypes, Sequelize } = require("sequelize");

const VEHICLE_TABLE = "vehicle";

const { USER_TABLE } = require("./user.model.js");

const vehicleSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  plate: {
    type: DataTypes.STRING,
    unique: true,
    alloNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    unique: true,
    alloNull: false,
  },
  model: {
    type: DataTypes.STRING,
    unique: true,
    alloNull: false,
  },
  serialChasis: {
    type: DataTypes.STRING,
    unique: true,
    alloNull: false,
  },
  serialEngine: {
    type: DataTypes.STRING,
    unique: true,
    alloNull: false,
  },
  color: {
    type: DataTypes.STRING,
    unique: true,
    alloNull: false,
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
    onDelete: "SET NULL",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
};

class Vehicle extends Model {
  static associate(models) {
    Vehicle.belongsTo(models.User, { as: "user" });
    Vehicle.hasMany(models.Order, { as: "order", foreignKey: "vehicle_id" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: VEHICLE_TABLE,
      modelName: "Vehicle",
      timestamps: false,
    };
  }
}

module.exports = { VEHICLE_TABLE, vehicleSchema, Vehicle };
