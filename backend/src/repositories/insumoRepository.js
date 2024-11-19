const { Insumo } = require('../models');

const insumoRepository = {
    findAll: async () => {
        return await Insumo.findAll();
    },
    findById: async (id) => {
        return await Insumo.findByPk(id);
    },
    create: async (data) => {
        return await Insumo.create(data);
    },
    update: async (id, data) => {
        return await Insumo.update(data, { where: { insumo_id: id } });
    },
    delete: async (id) => {
        return await Insumo.destroy({ where: { insumo_id: id } });
    },
};

module.exports = insumoRepository;
