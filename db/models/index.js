const { User, userSchema } = require("./user.model");

const setupModels = (sequelize) => {
  User.init(userSchema, User.config(sequelize));
};

module.exports = setupModels;
