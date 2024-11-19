const { Inventario } = require('../models');

const inventarioRepository = {
    findAll: async () => {
        return await Inventario.findAll();
    },
    findById: async (id) => {
        return await Inventario.findByPk(id);
    },

    findByNombre: async (nombre) => {
        return await Inventario.findOne({ where: { nombre } });
    },
    create: async (data) => {
        return await Inventario.create(data);
    },
    update: async (id, data) => {
        return await Inventario.update(data, { where: { item_id: id } });
    },
    updateCantidad: async (id, cantidad) => {
        return await Inventario.update({ cantidad_disponible: cantidad }, { where: { item_id: id } });
    },
    delete: async (id) => {
        return await Inventario.destroy({ where: { item_id: id } });
    },
};

module.exports = inventarioRepository;
