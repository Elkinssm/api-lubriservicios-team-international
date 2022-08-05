const express = require("express");

const OrderWorkTypeService = require("./../services/orderWorkTypes.service");
const validatorHandler = require("./../middlewares/validator.handler");
const {
  getOrderWorkTypeSchema,
  createOrderWorkTypeSchema,
  updateOrderWorkTypeSchema,
} = require("./../schemas/orderWorkTypes.schema");
const passport = require("passport");
const { checkRoles } = require("../middlewares/auth.handler");

const router = express.Router();
const service = new OrderWorkTypeService();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  checkRoles("Admin", "Worker", "Mechanical"),
  async (req, res, next) => {
    try {
      const orderWorkTypes = await service.find();
      res.json(orderWorkTypes);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("Admin", "Worker", "Mechanical"),
  validatorHandler(getOrderWorkTypeSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const orderWorkType = await service.findOne(id);
      res.json(orderWorkType);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  checkRoles("Admin", "Worker", "Mechanical"),
  validatorHandler(createOrderWorkTypeSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrderWorkType = await service.create(body);
      res.status(201).json(newOrderWorkType);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("Admin", "Worker", "Mechanical"),
  validatorHandler(getOrderWorkTypeSchema, "params"),
  validatorHandler(updateOrderWorkTypeSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const orderWorkType = await service.update(id, body);
      res.json(orderWorkType);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("Admin"),
  validatorHandler(getOrderWorkTypeSchema, "params"),
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
