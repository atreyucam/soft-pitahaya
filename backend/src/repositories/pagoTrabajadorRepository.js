const { PagoTrabajador } = require('../models');

const pagoTrabajadorRepository = {
    findAll: async () => {
        return await PagoTrabajador.findAll();
    },
    findById: async (id) => {
        return await PagoTrabajador.findByPk(id);
    },
    create: async (data) => {
        return await PagoTrabajador.create(data);
    },
    update: async (id, data) => {
        return await PagoTrabajador.update(data, { where: { pago_id: id } });
    },
    delete: async (id) => {
        return await PagoTrabajador.destroy({ where: { pago_id: id } });
    },
};

module.exports = pagoTrabajadorRepository;
