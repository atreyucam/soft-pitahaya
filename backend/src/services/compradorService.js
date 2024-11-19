const compradorRepository = require('../repositories/compradorRepository');

exports.getAllCompradores = async () => {
    return await compradorRepository.findAll();
};

exports.getCompradorById = async (id) => {
    const comprador = await compradorRepository.findById(id);
    if (!comprador) throw new Error('Comprador no encontrado');
    return comprador;
};

exports.createComprador = async (data) => {
    if (!data.nombre) {
        throw new Error('El nombre del comprador es obligatorio');
    }
    return await compradorRepository.create(data);
};

exports.updateComprador = async (id, data) => {
    const result = await compradorRepository.update(id, data);
    if (result[0] === 0) throw new Error('Comprador no encontrado');
    return result;
};

exports.deleteComprador = async (id) => {
    const result = await compradorRepository.delete(id);
    if (result === 0) throw new Error('Comprador no encontrado');
    return result;
};
