const express = require("express");

const WorkTypesService = require("../services/workTypes.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  getWorkTypeSchema,
  createWorkTypesSchema,
  updateWorkTypeSchema,
} = require("./../schemas/workTypes.schema");
const passport = require("passport");
const { checkRoles } = require("../middlewares/auth.handler");

const router = express.Router();
const service = new WorkTypesService();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  checkRoles("Admin", "Worker", "Mechanical"),
  async (req, res, next) => {
    try {
      const workTypes = await service.find();
      res.json(workTypes);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("Admin", "Worker", "Mechanical"),
  validatorHandler(getWorkTypeSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const workType = await service.findOne(id);
      res.json(workType);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  checkRoles("Admin", "Worker", "Mechanical"),
  validatorHandler(createWorkTypesSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newWorkType = await service.create(body);
      res.status(201).json(newWorkType);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("Admin", "Worker", "Mechanical"),
  validatorHandler(getWorkTypeSchema, "params"),
  validatorHandler(updateWorkTypeSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const workType = await service.update(id, body);
      res.json(workType);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("Admin"),
  validatorHandler(getWorkTypeSchema, "params"),
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
