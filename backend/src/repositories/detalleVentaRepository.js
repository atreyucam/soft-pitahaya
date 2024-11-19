const { DetalleVenta } = require('../models');

exports.findAll = async () => {
    return await DetalleVenta.findAll();
};

exports.findById = async (id) => {
    return await DetalleVenta.findByPk(id);
};

exports.create = async (data) => {
    return await DetalleVenta.create(data);
};

exports.update = async (id, data) => {
    return await DetalleVenta.update(data, { where: { detalle_id: id } });
};

exports.delete = async (id) => {
    return await DetalleVenta.destroy({ where: { detalle_id: id } });
};
