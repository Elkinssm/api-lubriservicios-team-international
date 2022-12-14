const { Model, DataTypes, Sequelize } = require("sequelize");

const WORK_TYPES_TABLE = "work_types";

const workTypesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
};

class WorkTypes extends Model {
  static associate(models) {
    WorkTypes.belongsTo(models.WorksMaterials, {
      as: "work-material",
      foreignKey: "id",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: WORK_TYPES_TABLE,
      modelName: "WorksTypes",
      timestamps: false,
    };
  }
}

module.exports = { WORK_TYPES_TABLE, workTypesSchema, WorkTypes };
