const Joi = require("joi");

const id = Joi.number().integer();
const description = Joi.string();
const name = Joi.string();
const reference = Joi.string();
const category = Joi.string();
const brand = Joi.string();

const createMaterialSchema = Joi.object({
  description: description.required(),
  reference: reference.required(),
  category: category.required(),
  brand: brand.required(),
  name: name.required(),
});

const updateMaterialSchema = Joi.object({
  description: description,
  reference: reference,
  category: category,
  brand: brand,
  name: name,
});

const getMaterialSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createMaterialSchema,
  updateMaterialSchema,
  getMaterialSchema,
};
