const boom = require("@hapi/boom");

const { models } = require("./../libs/sequelize");

class WorkMaterialsService {
  constructor() {}

  async create(data) {
    const newWorkMaterials = await models.WorkMaterial.create(data);
    return newWorkMaterials;
  }

  async find() {
    const response = await models.WorkMaterial.findAll();
    return response;
  }

  async findOne(id) {
    const workMaterial = await models.WorkMaterial.findByPk(id);
    if (!workMaterial) {
      throw boom.notFound("WorkMaterial not found");
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

module.exports = WorkMaterialsService;
