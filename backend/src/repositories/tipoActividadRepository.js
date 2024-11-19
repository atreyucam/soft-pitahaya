const { TipoActividad } = require("../models");

const tipoActividadRepository = {
    findById: async (id) => {
        return await TipoActividad.findByPk(id);
    },
    findAll: async () => {
        return await TipoActividad.findAll();
    },
    create: async (data) => {
        return await TipoActividad.create(data);
    },
    update: async (id, data) => {
        const result = await TipoActividad.update(data, { where: { tipo_id: id } });
        return result[0] === 1; // Devuelve true si se actualizó, false si no
    },
    delete: async (id) => {
        const result = await TipoActividad.destroy({ where: { tipo_id: id } });
        return result === 1; // Devuelve true si se eliminó, false si no
    },
};

module.exports = tipoActividadRepository;
