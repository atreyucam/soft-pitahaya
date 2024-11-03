const { Usuario } = require('../models');

exports.findAll = async () => {
    return await Usuario.findAll();
};

exports.findById = async (id) => {
    return await Usuario.findByPk(id);
};

exports.create = async (data) => {
    return await Usuario.create(data);
};

exports.update = async (id, data) => {
    return await Usuario.update(data, { where: { usuario_id: id } });
};

exports.delete = async (id) => {
    return await Usuario.destroy({ where: { usuario_id: id } });
};

// Añadir el método findByEmail
exports.findByEmail = async (email) => {
    return await Usuario.findOne({ where: { email } });
};