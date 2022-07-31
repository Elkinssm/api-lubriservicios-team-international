const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string();
const description = Joi.string();

const createRolesSchema = Joi.object({
  name: name.required(),
  description: description.required(),
});

const updateRolesSchema = Joi.object({
  name: name,
  description: description,
});

const deleteRolesSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createRolesSchema,
  updateRolesSchema,
  deleteRolesSchema,
};
