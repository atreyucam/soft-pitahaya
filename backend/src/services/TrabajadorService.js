const trabajadorRepository = require('../repositories/trabajadorRepository');
const usuarioRepository = require('../repositories/usuarioRepository');

exports.getAllTrabajadores = async () => {
    return await trabajadorRepository.findAll();
};

exports.getTrabajadorById = async (id) => {
    return await trabajadorRepository.findById(id);
};

exports.updateTrabajador = async (id, data) => {
    return await trabajadorRepository.update(id, data);
};

exports.deleteTrabajador = async (id) => {
    return await trabajadorRepository.delete(id);
};

exports.createTrabajador = async (data) => {
    const { usuario_id, habilidades, calificaciones, sueldo, fecha_contratacion } = data;

    // Verifica si el usuario existe
    const usuario = await usuarioRepository.findById(usuario_id);
    if (!usuario) {
        throw new Error('Usuario no encontrado');
    }

    // Verifica si el usuario ya está asignado como trabajador
    const trabajadorExistente = await trabajadorRepository.findById(usuario_id);
    if (trabajadorExistente) {
        throw new Error('El usuario ya está registrado como trabajador');
    }

    // Crea el trabajador vinculado al usuario
    return await trabajadorRepository.create({
        usuario_id,
        habilidades,
        calificaciones,
        sueldo,
        fecha_contratacion
    });
};
