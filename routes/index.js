const express = require("express");

const usersRouter = require("./users.router");

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api/lubrisernorte/v1/", router);
  router.use("/users", usersRouter);
};

module.exports = routerApi;
