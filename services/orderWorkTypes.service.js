const boom = require("@hapi/boom");

const { models } = require("./../libs/sequelize");

class OrderWorkTypeService {
  constructor() { }

  async create(data) {

    const saveWorkType = async (workType) => {
      const newOrderWorkType = await models.OrderWorkType.create(workType);
      return newOrderWorkType;
    }

    const ids = [];
    data.workTypeId.forEach(async (element) => {
      const workType = {
        workTypeId: element,
        orderId: data.orderId
      };
      const id = await saveWorkType(workType);
      ids.push(id);
    });
    return ids;
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
