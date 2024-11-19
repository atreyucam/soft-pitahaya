const notificacionRepository = require('../repositories/notificacionRepository');

exports.getAllNotificaciones = async () => await notificacionRepository.findAll();

exports.getNotificacionById = async (id) => {
    const notificacion = await notificacionRepository.findById(id);
    if (!notificacion) throw new Error('Notificación no encontrada');
    return notificacion;
};

exports.createNotificacion = async (data) => {
    if (!data.usuario_id || !data.mensaje) {
        throw new Error('Faltan campos obligatorios');
    }
    return await notificacionRepository.create(data);
};

exports.updateNotificacion = async (id, data) => {
    const result = await notificacionRepository.update(id, data);
    if (result[0] === 0) throw new Error('Notificación no encontrada');
    return result;
};

exports.deleteNotificacion = async (id) => {
    const result = await notificacionRepository.delete(id);
    if (result === 0) throw new Error('Notificación no encontrada');
    return result;
};
