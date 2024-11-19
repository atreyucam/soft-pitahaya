const cosechaRepository = require('../repositories/cosechaRepository');

exports.getAllCosechas = async () => {
    return await cosechaRepository.findAll();
};

exports.getCosechaById = async (id) => {
    const cosecha = await cosechaRepository.findById(id);
    if (!cosecha) throw new Error('Cosecha no encontrada');
    return cosecha;
};

exports.createCosecha = async (data) => {
    if (!data.fecha_cosecha || !data.lote_id || !data.cantidad || !data.unidad_medida || !data.clasificacion || !data.trabajador_id) {
        throw new Error('Faltan campos obligatorios');
    }
    return await cosechaRepository.create(data);
};

exports.updateCosecha = async (id, data) => {
    const result = await cosechaRepository.update(id, data);
    if (result[0] === 0) throw new Error('Cosecha no encontrada');
    return result;
};

exports.deleteCosecha = async (id) => {
    const result = await cosechaRepository.delete(id);
    if (result === 0) throw new Error('Cosecha no encontrada');
    return result;
};
