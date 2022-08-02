const { Model, DataTypes, Sequelize } = require("sequelize");

const { MATERIAL_TABLE } = require("./materials.model");
const { WORK_TYPES_TABLE } = require("./work-types.model");

const WORK_MATERIALS_TABLE = "works_materials";

const workMaterialsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  quantity: {
    type: DataTypes.INTEGER,
    unique: true,
    alloNull: false,
  },
  materialId: {
    field: "material_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MATERIAL_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  workTypeId: {
    field: "work_type_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: WORK_TYPES_TABLE,
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

class WorkMaterials extends Model {
  static associate(models) {
    this.belongsTo(models.WorksTypes, {
      as: "worktypes",
      foreignKey: "workTypeId",
    });
    this.belongsTo(models.Material, {
      as: "wmaterial",
      foreignKey: "materialId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: WORK_MATERIALS_TABLE,
      modelName: "WorksMaterials",
      timestamps: false,
    };
  }
}

module.exports = {
  WORK_MATERIALS_TABLE,
  workMaterialsSchema,
  WorkMaterials,
};
