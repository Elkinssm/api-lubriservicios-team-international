const Joi = require("joi");

const id = Joi.number().integer();
const quantity = Joi.number().integer();
const materialId = Joi.number().integer();
const workTypeId = Joi.number().integer();

const createworkMaterialSchema = Joi.object({
  quantity: quantity.required(),
  materialId: materialId.required(),
  workTypeId: workTypeId.required(),
});

const updateworkMaterialSchema = Joi.object({
  quantity: quantity,
  materialId: materialId,
  workTypeId: workTypeId,
});

const deleteworkMaterialSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createworkMaterialSchema,
  updateworkMaterialSchema,
  deleteworkMaterialSchema,
};
