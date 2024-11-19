const { Comprador } = require('../models');

exports.findAll = async () => {
    return await Comprador.findAll();
};

exports.findById = async (id) => {
    return await Comprador.findByPk(id);
};

exports.create = async (data) => {
    return await Comprador.create(data);
};

exports.update = async (id, data) => {
    return await Comprador.update(data, { where: { comprador_id: id } });
};

exports.delete = async (id) => {
    return await Comprador.destroy({ where: { comprador_id: id } });
};
