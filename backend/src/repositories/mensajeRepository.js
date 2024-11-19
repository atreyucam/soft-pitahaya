const { Mensaje } = require('../models');

const mensajeRepository = {
    findAll: async () => await Mensaje.findAll(),
    findById: async (id) => await Mensaje.findByPk(id),
    create: async (data) => await Mensaje.create(data),
    update: async (id, data) => await Mensaje.update(data, { where: { mensaje_id: id } }),
    delete: async (id) => await Mensaje.destroy({ where: { mensaje_id: id } }),
};

module.exports = mensajeRepository;
