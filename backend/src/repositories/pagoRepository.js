const { Pago, Usuario } = require('../models');

const pagoRepository = {
    findAll: async () => {
        return await Pago.findAll({ include: [Usuario] });
    },
    findById: async (id) => {
        return await Pago.findByPk(id, { include: [Usuario] });
    },
    findByUsuarioId: async (usuarioId) => {
        return await Pago.findAll({ where: { usuario_id: usuarioId }, include: [Usuario] });
    },
    create: async (data) => {
        return await Pago.create(data);
    },
    update: async (id, data) => {
        return await Pago.update(data, { where: { pago_id: id } });
    },
    delete: async (id) => {
        return await Pago.destroy({ where: { pago_id: id } });
    },
};

module.exports = pagoRepository;
