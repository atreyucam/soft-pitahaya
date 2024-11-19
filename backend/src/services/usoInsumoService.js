const usoInsumoRepository = require('../repositories/usoInsumoRepository');

exports.getAllUsoInsumos = async () => {
    return await usoInsumoRepository.findAll();
};

exports.getUsoInsumoById = async (id) => {
    const usoInsumo = await usoInsumoRepository.findById(id);
    if (!usoInsumo) throw new Error('Uso de insumo no encontrado');
    return usoInsumo;
};

exports.createUsoInsumo = async (data) => {
    if (!data.insumo_id || !data.actividad_id || !data.cantidad_utilizada || !data.fecha_uso) {
        throw new Error('Faltan campos obligatorios');
    }
    return await usoInsumoRepository.create(data);
};

exports.updateUsoInsumo = async (id, data) => {
    const result = await usoInsumoRepository.update(id, data);
    if (result[0] === 0) throw new Error('Uso de insumo no encontrado');
    return result;
};

exports.deleteUsoInsumo = async (id) => {
    const result = await usoInsumoRepository.delete(id);
    if (result === 0) throw new Error('Uso de insumo no encontrado');
    return result;
};
