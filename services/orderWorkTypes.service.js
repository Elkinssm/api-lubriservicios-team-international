const boom = require("@hapi/boom");

const { models } = require("../libs/sequelize");

class OrderWorkTypesService {
  constructor() {}

  async create(data) {
    const newOrderWorkTypes = await models.OrderWorkTypes.create(data);
    return newOrderWorkTypes;
  }

  async find() {
    const response = await models.OrderWorkTypes.findAll();
    return response;
  }

  async findOne(id) {
    const orderWoorkTypes = await models.OrderWorkTypes.findByPk(id);
    if (!orderWoorkTypes) {
      throw boom.notFound("OrderWorkType not found");
    }
    return orderWoorkTypes;
  }

  async update(id, changes) {
    const orderWorkTypes = await this.findOne(id);
    const response = orderWorkTypes.update(changes);
    return response;
  }

  async delete(id) {
    const orderWorkTypes = await this.findOne(id);
    await orderWorkTypes.destroy();
    return { id };
  }
}

module.exports = OrderWorkTypesService;
