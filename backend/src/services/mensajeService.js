const mensajeRepository = require('../repositories/mensajeRepository');

exports.getAllMensajes = async () => await mensajeRepository.findAll();

exports.getMensajeById = async (id) => {
    const mensaje = await mensajeRepository.findById(id);
    if (!mensaje) throw new Error('Mensaje no encontrado');
    return mensaje;
};

exports.createMensaje = async (data) => {
    if (!data.emisor_id || !data.receptor_id || !data.asunto) {
        throw new Error('Faltan campos obligatorios');
    }
    return await mensajeRepository.create(data);
};

exports.updateMensaje = async (id, data) => {
    const result = await mensajeRepository.update(id, data);
    if (result[0] === 0) throw new Error('Mensaje no encontrado');
    return result;
};

exports.deleteMensaje = async (id) => {
    const result = await mensajeRepository.delete(id);
    if (result === 0) throw new Error('Mensaje no encontrado');
    return result;
};
