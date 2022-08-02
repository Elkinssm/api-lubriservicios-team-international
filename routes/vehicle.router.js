const express = require("express");

const VehicleService = require("./../services/vehicle.service");
const validatorHandler = require("./../middlewares/validator.handler");
//const passport = require("passport");
const {
  createVehicleSchema,
  getVehicleSchema,
  updateVehicleSchema,
} = require("./../schemas/vehicle.schema");

const router = express.Router();
const service = new VehicleService();

router.get(
  "/",
  // passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const vehicles = await service.find();
      res.json(vehicles);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  validatorHandler(getVehicleSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const vehicle = await service.findOne(id);
      res.json(vehicle);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createVehicleSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newVehicle = await service.create(body);
      res.status(201).json(newVehicle);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  validatorHandler(getVehicleSchema, "params"),
  validatorHandler(updateVehicleSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const vehicle = await service.update(id, body);
      res.json(vehicle);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validatorHandler(getVehicleSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
