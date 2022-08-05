const express = require("express");

const MaterialService = require("./../services/materials.service");
const validatorHandler = require("./../middlewares/validator.handler");
const {
  createMaterialSchema,
  updateMaterialSchema,
  getMaterialSchema,
} = require("./../schemas/materials.schema");
const passport = require("passport");
const { checkRoles } = require("../middlewares/auth.handler");

const router = express.Router();
const service = new MaterialService();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  checkRoles("Admin", "Worker", "Mechanical"),
  async (req, res, next) => {
    try {
      const materials = await service.find();
      res.json(materials);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("Admin", "Worker", "Mechanical"),
  validatorHandler(getMaterialSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const material = await service.findOne(id);
      res.json(material);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  checkRoles("Admin", "Worker", "Mechanical"),
  validatorHandler(createMaterialSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newMaterial = await service.create(body);
      res.status(201).json(newMaterial);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("Admin", "Worker", "Mechanical"),
  validatorHandler(getMaterialSchema, "params"),
  validatorHandler(updateMaterialSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const material = await service.update(id, body);
      res.json(material);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles("Admin"),
  validatorHandler(getMaterialSchema, "params"),
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
