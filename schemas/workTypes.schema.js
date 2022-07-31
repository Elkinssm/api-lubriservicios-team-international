const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string();
const description = Joi.string();

const createWorkTypesSchema = Joi.object({
  name: name.required(),
  description: description.required(),
});

const updateWorkTypeSchema = Joi.object({
  name: name,
  description: description,
});

const deleteWorkTypeSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createWorkTypesSchema,
  updateWorkTypeSchema,
  deleteWorkTypeSchema,
};
