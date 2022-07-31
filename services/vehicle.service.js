const boom = require("@hapi/boom");

const { models } = require("./../libs/sequelize");

class VehicleService {
  constructor() {}

  async create(data) {
    const newVehicle = await models.Vehicle.create(data);
    return newVehicle;
  }

  async find() {
    const response = await models.Vehicle.findAll();
    return response;
  }

  async findOne(id) {
    const vehicle = await models.Vehicle.findByPk(id);
    if (!vehicle) {
      throw boom.notFound("Vehicle not found");
    }
    return vehicle;
  }

  async update(id, changes) {
    const vehicle = await this.findOne(id);
    const response = vehicle.update(changes);
    return response;
  }

  async delete(id) {
    const vehicle = await this.findOne(id);
    await vehicle.destroy();
    return { id };
  }
}

module.exports = VehicleService;
