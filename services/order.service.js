const boom = require("@hapi/boom");

const { models } = require("./../libs/sequelize");

class OrderService {
  constructor() {}

  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async find() {
    const response = await models.Order.findAll();
    return response;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id);
    if (!order) {
      throw boom.notFound("Order not found");
    }
    return order;
  }

  async update(id, changes) {
    const order = await this.findOne(id);
    const response = order.update(changes);
    return response;
  }

  async delete(id) {
    const order = await this.findOne(id);
    await order.destroy();
    return { id };
  }
}

module.exports = OrderService;
