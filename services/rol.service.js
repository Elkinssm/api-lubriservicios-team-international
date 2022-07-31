const boom = require("@hapi/boom");

const { models } = require("./../libs/sequelize");

class RolService {
  constructor() {}

  async create(data) {
    const newRol = await models.Rol.create(data);
    return newRol;
  }

  async find() {
    const response = await models.Rol.findAll();
    return response;
  }

  async findOne(id) {
    const rol = await models.Rol.findByPk(id);
    if (!rol) {
      throw boom.notFound("Rol not found");
    }
    return rol;
  }

  async update(id, changes) {
    const rol = await this.findOne(id);
    const response = rol.update(changes);
    return response;
  }

  async delete(id) {
    const rol = await this.findOne(id);
    await rol.destroy();
    return { id };
  }
}

module.exports = RolService;
