const { UsoInsumo } = require('../models');

const usoInsumoRepository = {
    findAll: async () => {
        return await UsoInsumo.findAll();
    },
    findById: async (id) => {
        return await UsoInsumo.findByPk(id);
    },
    create: async (data) => {
        return await UsoInsumo.create(data);
    },
    update: async (id, data) => {
        return await UsoInsumo.update(data, { where: { uso_id: id } });
    },
    delete: async (id) => {
        return await UsoInsumo.destroy({ where: { uso_id: id } });
    },
};

module.exports = usoInsumoRepository;
