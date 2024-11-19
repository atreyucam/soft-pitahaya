const { Solicitud } = require('../models');

const solicitudRepository = {
    findAll: async () => await Solicitud.findAll(),
    findById: async (id) => await Solicitud.findByPk(id),
    create: async (data) => await Solicitud.create(data),
    update: async (id, data) => await Solicitud.update(data, { where: { solicitud_id: id } }),
    delete: async (id) => await Solicitud.destroy({ where: { solicitud_id: id } }),
};

module.exports = solicitudRepository;
