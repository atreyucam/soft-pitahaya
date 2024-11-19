const { Venta } = require('../models');

exports.findAll = async () => {
    return await Venta.findAll();
};

exports.findById = async (id) => {
    return await Venta.findByPk(id);
};

exports.create = async (data) => {
    return await Venta.create(data);
};

exports.update = async (id, data) => {
    return await Venta.update(data, { where: { venta_id: id } });
};

exports.delete = async (id) => {
    return await Venta.destroy({ where: { venta_id: id } });
};
