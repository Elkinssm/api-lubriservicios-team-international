const boom = require("@hapi/boom");

const { models } = require("./../libs/sequelize");

class WorksMaterialsService {
  constructor() {}

  async create(data) {
    const newWorkMaterial = await models.WorksMaterials.create(data);
    return newWorkMaterial;
  }

  async find() {
    const response = await models.WorksMaterials.findAll({
      include: ["material", "work-types"],
    });
    return response;
  }

  async findOne(id) {
    const workMaterial = await models.WorksMaterials.findByPk(id);
    if (!workMaterial) {
      throw boom.notFound("Order not found");
    }
    return workMaterial;
  }

  async update(id, changes) {
    const workMaterial = await this.findOne(id);
    const response = workMaterial.update(changes);
    return response;
  }

  async delete(id) {
    const workMaterial = await this.findOne(id);
    await workMaterial.destroy();
    return { id };
  }
}

module.exports = WorksMaterialsService;
