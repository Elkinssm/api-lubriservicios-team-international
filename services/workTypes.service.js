const boom = require("@hapi/boom");

const { models } = require("./../libs/sequelize");

class WorkTypesService {
  constructor() {}

  async create(data) {
    const newWorkType = await models.WorkType.create(data);
    return newWorkType;
  }

  async find() {
    const response = await models.WorkType.findAll();
    return response;
  }

  async findOne(id) {
    const workType = await models.WorkType.findByPk(id);
    if (!workType) {
      throw boom.notFound("WorkType not found");
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

module.exports = WorkTypesService;
