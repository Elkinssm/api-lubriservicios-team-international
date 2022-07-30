const Joi = require("joi");

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const name = Joi.string();
const documentNumber = Joi.number().integer();
const cellPhone = Joi.number().integer();
const documentType = Joi.string().min(2);
const address = Joi.string();
const role = Joi.string().min(3);

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role.required(),
  documentNumber: documentNumber.required(),
  cellPhone: cellPhone.required(),
  documentType: documentType.required(),
  address: address.required(),
  name: name.required(),
});

const updateUserSchema = Joi.object({
  email: email,
  role: role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
