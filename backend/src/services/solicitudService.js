const solicitudRepository = require('../repositories/solicitudRepository');

exports.getAllSolicitudes = async () => {
    return await solicitudRepository.findAll();
};

exports.getSolicitudById = async (id) => {
    const solicitud = await solicitudRepository.findById(id);
    if (!solicitud) throw new Error('Solicitud no encontrada');
    return solicitud;
};

exports.createSolicitud = async (data) => {
    if (!data.fecha_solicitud || !data.usuario_id || !data.tipo || !data.item_id || !data.cantidad_solicitada || !data.unidad_medida) {
        throw new Error('Faltan campos obligatorios');
    }
    return await solicitudRepository.create(data);
};

exports.updateSolicitud = async (id, data) => {
    const result = await solicitudRepository.update(id, data);
    if (result[0] === 0) throw new Error('Solicitud no encontrada');
    return result;
};

exports.deleteSolicitud = async (id) => {
    const result = await solicitudRepository.delete(id);
    if (result === 0) throw new Error('Solicitud no encontrada');
    return result;
};
