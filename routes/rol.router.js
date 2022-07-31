const express = require("express");

const RolService = require("./../services/rol.service");
const validatorHandler = require("./../middlewares/validator.handler");
const {
  createRolesSchema,
  getRolesSchema,
  updateRolesSchema,
} = require("./../schemas/roles.schema");

const router = express.Router();
const service = new RolService();

router.get("/", async (req, res, next) => {
  try {
    const roles = await service.find();
    res.json(roles);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  validatorHandler(getRolesSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rol = await service.findOne(id);
      res.json(rol);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createRolesSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newRol = await service.create(body);
      res.status(201).json(newRol);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  validatorHandler(getRolesSchema, "params"),
  validatorHandler(updateRolesSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const rol = await service.update(id, body);
      res.json(rol);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validatorHandler(getRolesSchema, "params"),
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
