const Joi = require("joi");

const id = Joi.number().integer();
const dateIn = Joi.string();
const dateOut = Joi.string();
const totalValue = Joi.number().precision(2);
const kmsIn = Joi.number().precision(2);
const ownerDescription = Joi.string();
const diagnostic = Joi.string();
const workPerformed = Joi.string();
const status = Joi.string();
const userId = Joi.number().integer();
const vehicleId = Joi.number().integer();

const createOrderSchema = Joi.object({
  dateIn: dateIn.required(),
  dateOut: dateOut.required(),
  totalValue: totalValue.required(),
  kmsIn: kmsIn.required(),
  ownerDescription: ownerDescription.required(),
  diagnostic: diagnostic.required(),
  workPerformed: workPerformed.required(),
  status: status.required(),
  userId: userId.required(),
  vehicleId: vehicleId.required(),
});

const updateOrderSchema = Joi.object({
  dateIn: dateIn,
  dateOut: dateOut,
  totalValue: totalValue,
  kmsIn: kmsIn,
  ownerDescription: ownerDescription,
  diagnostic: diagnostic,
  workPerformed: workPerformed,
  status: status,
  userId: userId,
  vehicleId: vehicleId,
});

const getOrderSchema = Joi.object({
  id: id.required(),
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema };
