const insumoRepository = require('../repositories/insumoRepository');

exports.getAllInsumos = async () => {
    return await insumoRepository.findAll();
};

exports.getInsumoById = async (id) => {
    const insumo = await insumoRepository.findById(id);
    if (!insumo) throw new Error('Insumo no encontrado');
    return insumo;
};

exports.createInsumo = async (data) => {
    if (!data.item_id || !data.cantidad_total || !data.estado_insumo) {
        throw new Error('Faltan campos obligatorios');
    }
    return await insumoRepository.create(data);
};

exports.updateInsumo = async (id, data) => {
    const result = await insumoRepository.update(id, data);
    if (result[0] === 0) throw new Error('Insumo no encontrado');
    return result;
};

exports.deleteInsumo = async (id) => {
    const result = await insumoRepository.delete(id);
    if (result === 0) throw new Error('Insumo no encontrado');
    return result;
};
