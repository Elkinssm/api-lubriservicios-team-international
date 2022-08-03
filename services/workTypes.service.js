const boom = require("@hapi/boom");

const { models } = require("./../libs/sequelize");

class WorkTypeService {
  constructor() {}

  async create(data) {
    const newWorkType = await models.WorksTypes.create(data);

    return newWorkType;
  }

  async find() {
    const response = await models.WorksTypes.findAll();
    return response;
  }

  async findOne(id) {
    const workType = await models.WorksTypes.findByPk(id);
    if (!workType) {
      throw boom.notFound("Work Type not found");
    }
    return workType;
  }

  async update(id, changes) {
    const workType = await this.findOne(id);
    const response = workType.update(changes);
    return response;
  }

  async delete(id) {
    const workType = await this.findOne(id);
    await workType.destroy();
    return { id };
  }
}

module.exports = WorkTypeService;
