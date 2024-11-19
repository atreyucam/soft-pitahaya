const { Lote } = require('../models');

const loteRepository = {
    findAll: async () => {
        return await Lote.findAll();
    },
    findById: async (id) => {
        return await Lote.findByPk(id);
    },
    create: async (data) => {
        return await Lote.create(data);
    },
    update: async (id, data) => {
        return await Lote.update(data, { where: { lote_id: id } });
    },
    delete: async (id) => {
        return await Lote.destroy({ where: { lote_id: id } });
    },
};

module.exports = loteRepository;
