const actividadRepository = require('../repositories/actividadRepository');

exports.getAllActividades = async () => {
    return await actividadRepository.findAll();
};

exports.getActividadById = async (id) => {
    const actividad = await actividadRepository.findById(id);
    if (!actividad) throw new Error('Actividad no encontrada');
    return actividad;
};

exports.createActividad = async (data) => {
    const { tipo_id, usuario_id, lote_id, fecha_inicio, fecha_fin, creador_id } = data;

    // Validar conflictos de horarios
    const conflicto = await actividadRepository.findConflictoHorario(
        usuario_id,
        fecha_inicio,
        fecha_fin
    );

    if (conflicto) {
        throw new Error("El trabajador ya tiene una actividad en este horario.");
    }

    // Crear la actividad con el creador_id
    return await actividadRepository.create({
        ...data, // Incluye todos los datos enviados
    });
};

exports.updateActividad = async (id, data) => {
    const result = await actividadRepository.update(id, data);
    if (result[0] === 0) throw new Error('Actividad no encontrada');
    return result;
};


exports.deleteActividad = async (id) => {
    const result = await actividadRepository.delete(id);
    if (result === 0) throw new Error('Actividad no encontrada');
    return result;
};

exports.getActividadesByLote = async (loteId) => {
    return await actividadRepository.findByLote(loteId);
};

exports.getActividadesByUsuario = async (usuarioId) => {
    return await actividadRepository.findByUsuario(usuarioId);
};

exports.registrarHorasTrabajadas = async (actividadId, horas) => {
    if (horas <= 0) throw new Error("Las horas trabajadas deben ser mayores a cero.");

    const actividad = await actividadRepository.registerHorasTrabajadas(actividadId, horas);
    return actividad;
};
exports.marcarEnProgreso = async (id, usuarioId, rol) => {
    const actividad = await actividadRepository.findById(id);
    if (!actividad) throw new Error("Actividad no encontrada.");

    if (actividad.estado !== "Pendiente") {
        throw new Error("Solo puedes iniciar actividades que están pendientes.");
    }

    // Validación por rol
    if (rol === "Trabajador" && actividad.usuario_id !== usuarioId) {
        throw new Error("No tienes permiso para iniciar esta actividad.");
    }

    actividad.estado = "En Progreso";
    actividad.inicio_real = new Date(); // Marca de tiempo real
    await actividad.save();
    return actividad;
};

exports.marcarCompletada = async (id, usuarioId, rol) => {
    const actividad = await actividadRepository.findById(id);
    if (!actividad) throw new Error("Actividad no encontrada.");

    if (rol === "Trabajador" && actividad.usuario_id !== usuarioId) {
        throw new Error("No tienes permiso para completar esta actividad.");
    }

    if (actividad.estado !== "En Progreso") {
        throw new Error("Solo puedes completar actividades en progreso.");
    }

    const finReal = new Date();
    const horasTrabajadas = (finReal - new Date(actividad.inicio_real)) / 3600000;

    console.log("Fin estimado:", new Date(actividad.fecha_fin));
    console.log("Fin real:", finReal);
    console.log("Horas trabajadas:", horasTrabajadas);

    // Determinar el estado final
    if (finReal <= new Date(actividad.fecha_fin)) {
        actividad.estado = "Completada";
    } else {
        actividad.estado = "Pendiente por Revisión";
        actividad.horas_extras_pendientes = horasTrabajadas - ((new Date(actividad.fecha_fin) - new Date(actividad.fecha_inicio)) / 3600000);
    }

    actividad.fin_real = finReal;
    actividad.horas_trabajadas = horasTrabajadas;
    await actividad.save();

    return actividad;
};


exports.completarPorTecnico = async (id) => {
    const actividad = await actividadRepository.findById(id);
    if (!actividad) throw new Error("Actividad no encontrada.");

    if (actividad.estado !== "En Progreso" && actividad.estado !== "Pendiente por Revisión") {
        throw new Error("Solo puedes completar actividades en progreso o pendientes por revisión.");
    }

    const finReal = new Date();
    const horasTrabajadas = (finReal - new Date(actividad.inicio_real)) / 3600000;

    actividad.estado = "Completada";
    actividad.fin_real = finReal;
    actividad.horas_trabajadas = horasTrabajadas;
    await actividad.save();
    return actividad;
};
