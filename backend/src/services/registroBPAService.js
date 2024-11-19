const registroBPARepository = require('../repositories/registroBPARepository');

exports.getAllRegistros = async () => {
    return await registroBPARepository.findAll();
};

exports.getRegistroById = async (id) => {
    const registro = await registroBPARepository.findById(id);
    if (!registro) throw new Error('Registro no encontrado');
    return registro;
};

exports.createRegistro = async (data) => {
    if (!data.fecha || !data.actividad || !data.usuario_id) {
        throw new Error('Faltan campos obligatorios');
    }
    return await registroBPARepository.create(data);
};

exports.updateRegistro = async (id, data) => {
    const result = await registroBPARepository.update(id, data);
    if (result[0] === 0) throw new Error('Registro no encontrado');
    return result;
};

exports.deleteRegistro = async (id) => {
    const result = await registroBPARepository.delete(id);
    if (result === 0) throw new Error('Registro no encontrado');
    return result;
};
