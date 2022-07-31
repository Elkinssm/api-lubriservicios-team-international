const boom = require("@hapi/boom");

const { models } = require("./../libs/sequelize");

class MaterialService {
  constructor() {}

  async create(data) {
    const newMaterial = await models.Material.create(data);

    return newMaterial;
  }

  async find() {
    const response = await models.Material.findAll();
    return response;
  }

  async findOne(id) {
    const material = await models.Material.findByPk(id);
    if (!material) {
      throw boom.notFound("Material not found");
    }
    return material;
  }

  async update(id, changes) {
    const material = await this.findOne(id);
    const response = material.update(changes);
    return response;
  }

  async delete(id) {
    const material = await this.findOne(id);
    await material.destroy();
    return { id };
  }
}

module.exports = MaterialService;
