const Joi = require("joi");

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const name = Joi.string();
const documentNumber = Joi.number().integer();
const cellPhone = Joi.number().integer();
const documentType = Joi.string().min(2);
const address = Joi.string();
const roleId = Joi.number().integer();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  documentNumber: documentNumber.required(),
  cellPhone: cellPhone.required(),
  documentType: documentType.required(),
  address: address.required(),
  name: name.required(),
  roleId: roleId.required(),
});

const updateUserSchema = Joi.object({
  email: email,
  password: password,
  documentNumber: documentNumber,
  cellPhone: cellPhone,
  documentType: documentType,
  address: address,
  name: name,
  roleId: roleId,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
