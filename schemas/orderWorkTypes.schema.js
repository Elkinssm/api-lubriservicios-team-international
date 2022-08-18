const Joi = require("joi");

const id = Joi.number().integer();
const workTypeId = Joi.array();
const orderId = Joi.number().integer();

const createOrderWorkTypeSchema = Joi.object({
  workTypeId: workTypeId.required(),
  orderId: orderId.required(),
});

const updateOrderWorkTypeSchema = Joi.object({
  workTypeId: workTypeId,
  orderId: orderId,
});

const getOrderWorkTypeSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createOrderWorkTypeSchema,
  updateOrderWorkTypeSchema,
  getOrderWorkTypeSchema,
};
