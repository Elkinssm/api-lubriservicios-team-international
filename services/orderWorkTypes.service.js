const boom = require("@hapi/boom");

const { models } = require("./../libs/sequelize");

class OrderWorkTypeService {
  constructor() {}

  async create(data) {
    const newOrderWorkType = await models.OrderWorkType.create(data);

    return newOrderWorkType;
  }

  async find() {
    const response = await models.OrderWorkType.findAll({
      include: ["work-type", "order"],
    });
    return response;
  }

  async findOne(id) {
    const ordeWorkType = await models.OrderWorkType.findByPk(id);
    if (!ordeWorkType) {
      throw boom.notFound("Orden Work Type not found");
    }
    return ordeWorkType;
  }

  async update(id, changes) {
    const ordeWorkType = await this.findOne(id);
    const response = ordeWorkType.update(changes);
    return response;
  }

  async delete(id) {
    const ordeWorkType = await this.findOne(id);
    await ordeWorkType.destroy();
    return { id };
  }
}

module.exports = OrderWorkTypeService;
