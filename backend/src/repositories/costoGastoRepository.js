const { CostoGasto } = require('../models');

const costoGastoRepository = {
    findAll: async () => {
        return await CostoGasto.findAll();
    },
    findById: async (id) => {
        return await CostoGasto.findByPk(id);
    },
    create: async (data) => {
        return await CostoGasto.create(data);
    },
    update: async (id, data) => {
        return await CostoGasto.update(data, { where: { gasto_id: id } });
    },
    delete: async (id) => {
        return await CostoGasto.destroy({ where: { gasto_id: id } });
    },
};

module.exports = costoGastoRepository;
