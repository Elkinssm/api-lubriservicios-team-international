const { Sequelize } = require("sequelize");

const { config } = require("./../config/config");
const setupModels = require("./../db/models");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: false,
});

setupModels(sequelize);

sequelize
  //.sync({ force: true })
  .sync({ force: false })
  .then(() => {
    console.log("Nos hemos conectado a la base de datos");
  })
  .catch((error) => {
    console.log("Se ha producido un error", error);
  });

//Crea la estructura con orm segun el schema

module.exports = sequelize;
