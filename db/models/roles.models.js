const { Model, DataTypes, Sequelize } = require("sequelize");

const ROL_TABLE = "rol";

const rolSchema = {
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

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
};

class Rol extends Model {
  static associate(models) {
    Rol.hasOne(models.User, { as: "user", foreignKey: "id" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ROL_TABLE,
      modelName: "Rol",
      timestamps: false,
    };
  }
}

module.exports = { ROL_TABLE, rolSchema, Rol };
