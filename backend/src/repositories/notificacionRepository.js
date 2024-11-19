const { Notificacion } = require('../models');

const notificacionRepository = {
    findAll: async () => await Notificacion.findAll(),
    findById: async (id) => await Notificacion.findByPk(id),
    create: async (data) => await Notificacion.create(data),
    update: async (id, data) => await Notificacion.update(data, { where: { notificacion_id: id } }),
    delete: async (id) => await Notificacion.destroy({ where: { notificacion_id: id } }),
};

module.exports = notificacionRepository;
