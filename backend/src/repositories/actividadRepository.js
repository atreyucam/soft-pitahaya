const { Actividad} = require('../models');
const { Op } = require("sequelize"); //

const actividadRepository = {
    findAll: async () => {
        return await Actividad.findAll();
    },
    findById: async (id) => {
        return await Actividad.findByPk(id);
    },
    create: async (data) => {
        return await Actividad.create(data);
    },
    update: async (id, data) => {
        return await Actividad.update(data, { where: { actividad_id: id } });
    },
    delete: async (id) => {
        return await Actividad.destroy({ where: { actividad_id: id } });
    },
    // nuevos
    findByLote: async (loteId) => {
        return await Actividad.findAll({ where: { lote_id: loteId } });
    },
    findByUsuario: async (usuarioId) => {
        return await Actividad.findAll({ where: { usuario_id: usuarioId } });
    },
    findConflictoHorario: async (usuarioId, fechaInicio, fechaFin) => {
        return await Actividad.findOne({
            where: {
                usuario_id: usuarioId,
                fecha_inicio: { [Op.lt]: fechaFin },
                fecha_fin: { [Op.gt]: fechaInicio },
            },
        });
    },
    updateEstado: async (id, estado) => {
        const actividad = await Actividad.findByPk(id);
        if (!actividad) throw new Error("Actividad no encontrada.");
        actividad.estado = estado;
        await actividad.save();
        return actividad;
    },
    registerHorasTrabajadas: async (actividadId, horas) => {
        const actividad = await Actividad.findByPk(actividadId);
        if (!actividad) throw new Error("Actividad no encontrada.");
    
        actividad.horas_trabajadas += horas; // Sumar las horas trabajadas
        await actividad.save();
        return actividad;
    },
    
};

module.exports = actividadRepository;
