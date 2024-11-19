const loteRepository = require('../repositories/loteRepository');

exports.getAllLotes = async () => {
    return await loteRepository.findAll();
};

exports.getLoteById = async (id) => {
    const lote = await loteRepository.findById(id);
    if (!lote) throw new Error('Lote no encontrado');
    return lote;
};

exports.createLote = async (data) => {
    if (!data.nombre) throw new Error('El nombre del lote es obligatorio');
    return await loteRepository.create(data);
};

exports.updateLote = async (id, data) => {
    const result = await loteRepository.update(id, data);
    if (result[0] === 0) throw new Error('Lote no encontrado');
    return result;
};

exports.deleteLote = async (id) => {
    const result = await loteRepository.delete(id);
    if (result === 0) throw new Error('Lote no encontrado');
    return result;
};
