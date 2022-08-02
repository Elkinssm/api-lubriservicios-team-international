const express = require("express");

const usersRouter = require("./users.router");
const materialsRouter = require("./materials.router");
const ordersRouter = require("./order.router");
const rolRouter = require("./rol.router");
const vehicleRouter = require("./vehicle.router");
const workTypeRouter = require("./workTypes.router");
const workMaterialRouter = require("./workMaterials.router");
const orderWorkTypeRouter = require("./orderWorkType.router");
const authRouter = require("./auth.router");

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api/lubrisernorte/v1/", router);
  router.use("/users", usersRouter);
  router.use("/materials", materialsRouter);
  router.use("/orders", ordersRouter);
  router.use("/rols", rolRouter);
  router.use("/vehicles", vehicleRouter);
  router.use("/wort-types", workTypeRouter);
  router.use("/work-materials", workMaterialRouter);
  router.use("/order-work-types", orderWorkTypeRouter);
  router.use("/auth", authRouter);
};

module.exports = routerApi;
