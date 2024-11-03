const { Trabajador } = require('../models');

const trabajadorRepository = {
    findById: async (id) => {
        return await Trabajador.findByPk(id);
    },
    findAll: async () => {
        return await Trabajador.findAll();
    },
    create: async (data) => {
        return await Trabajador.create(data);
    },
    update: async (id, data) => {
        return await Trabajador.update(data, { where: { trabajador_id: id } });
    },
    delete: async (id) => {
        return await Trabajador.destroy({ where: { trabajador_id: id } });
    }
};

module.exports = trabajadorRepository;
