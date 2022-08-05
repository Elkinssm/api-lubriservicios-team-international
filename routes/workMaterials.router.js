const express = require("express");

const WorkTypesService = require("./../services/workMaterials.service");
const validatorHandler = require("./../middlewares/validator.handler");
const {
  getworkMaterialSchema,
  createworkMaterialSchema,
  updateworkMaterialSchema,
} = require("./../schemas/workMaterials.schema");
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
      const workMaterials = await service.find();
      res.json(workMaterials);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("Admin", "Worker", "Mechanical"),
  validatorHandler(getworkMaterialSchema, "params"),
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
  checkRoles("Admin", "Worker"),
  validatorHandler(createworkMaterialSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newWorkMaterial = await service.create(body);
      res.status(201).json(newWorkMaterial);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("Admin", "Worker"),
  validatorHandler(getworkMaterialSchema, "params"),
  validatorHandler(updateworkMaterialSchema, "body"),
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
  validatorHandler(getworkMaterialSchema, "params"),
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
