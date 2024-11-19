const { Cosecha } = require('../models');

const cosechaRepository = {
    findAll: async () => await Cosecha.findAll(),
    findById: async (id) => await Cosecha.findByPk(id),
    create: async (data) => await Cosecha.create(data),
    update: async (id, data) => await Cosecha.update(data, { where: { cosecha_id: id } }),
    delete: async (id) => await Cosecha.destroy({ where: { cosecha_id: id } }),
};

module.exports = cosechaRepository;
