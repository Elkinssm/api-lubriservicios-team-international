const { Model, DataTypes, Sequelize } = require("sequelize");

const MATERIAL_TABLE = "materials";

const materialSchema = {
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
  reference: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
};

class Material extends Model {
  static associate(models) {
    Material.belongsTo(models.WorksMaterials, {
      as: "work-material",
      foreignKey: "id",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MATERIAL_TABLE,
      modelName: "Material",
      timestamps: false,
    };
  }
}

module.exports = { MATERIAL_TABLE, materialSchema, Material };
