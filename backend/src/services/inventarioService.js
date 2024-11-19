const inventarioRepository = require('../repositories/inventarioRepository');

exports.getAllItems = async () => {
    return await inventarioRepository.findAll();
};

exports.getItemById = async (id) => {
    const item = await inventarioRepository.findById(id);
    if (!item) throw new Error('Item no encontrado');
    return item;
};

exports.createItem = async (data) => {
    if (!data.nombre || !data.categoria || !data.cantidad_disponible || !data.unidad_medida) {
        throw new Error('Faltan campos obligatorios');
    }
    return await inventarioRepository.create(data);
};

exports.updateItem = async (id, data) => {
    const result = await inventarioRepository.update(id, data);
    if (result[0] === 0) throw new Error('Item no encontrado');
    return result;
};

exports.deleteItem = async (id) => {
    const result = await inventarioRepository.delete(id);
    if (result === 0) throw new Error('Item no encontrado');
    return result;
};
