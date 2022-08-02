const Joi = require("joi");

const id = Joi.number().integer();
const plate = Joi.string();
const brand = Joi.string();
const model = Joi.string();
const serialChasis = Joi.string();
const serialMotor = Joi.string();
const serialEngine = Joi.string();
const color = Joi.string();
const userId = Joi.number().integer();

const createVehicleSchema = Joi.object({
  plate: plate.required(),
  brand: brand.required(),
  model: model.required(),
  serialChasis: serialChasis.required(),
  serialMotor: serialMotor.required(),
  serialEngine: serialEngine.required(),
  color: color.required(),
  userId: userId.required(),
});

const updateVehicleSchema = Joi.object({
  plate: plate,
  brand: brand,
  model: model,
  serialChasis: serialChasis,
  serialMotor: serialMotor,
  serialEngine: serialEngine,
  color: color,
  userId: userId,
});

const getVehicleSchema = Joi.object({
  id: id.required(),
});

module.exports = { createVehicleSchema, updateVehicleSchema, getVehicleSchema };
