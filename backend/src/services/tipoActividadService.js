const tipoActividadRepository = require("../repositories/tipoActividadRepository");

exports.createTipoActividad = async (data) => {
    return await tipoActividadRepository.create(data);
};

exports.getAllTipoActividades = async () => {
    return await tipoActividadRepository.findAll();
};

exports.getTipoActividadById = async (id) => {
    return await tipoActividadRepository.findById(id);
};

exports.updateTipoActividad = async (id, data) => {
    return await tipoActividadRepository.update(id, data);
};

exports.deleteTipoActividad = async (id) => {
    return await tipoActividadRepository.delete(id);
};
