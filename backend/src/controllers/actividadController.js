const actividadService = require('../services/actividadService');

exports.getAllActividades = async (req, res) => {
    try {
        const actividades = await actividadService.getAllActividades();
        res.json(actividades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getActividadById = async (req, res) => {
    try {
        const actividad = await actividadService.getActividadById(req.params.id);
        res.json(actividad);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.createActividad = async (req, res) => {
    try {
        const data = {
            ...req.body,
            creador_id: req.user?.usuario_id, // Si el usuario autenticado está disponible, úsalo como creador
        };
        console.log("Datos para crear actividad:", data); // <-- Registra los datos

        const actividad = await actividadService.createActividad(data);
        res.status(201).json(actividad);
    } catch (error) {
        console.error("Error al crear la actividad:", error);
        res.status(400).json({ error: error.message });
    }
};


exports.updateActividad = async (req, res) => {
    try {
        await actividadService.updateActividad(req.params.id, req.body);
        res.json({ message: 'Actividad actualizada correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteActividad = async (req, res) => {
    try {
        await actividadService.deleteActividad(req.params.id);
        res.json({ message: 'Actividad eliminada correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
// nuevos
exports.getActividadesByLote = async (req, res) => {
    try {
        const actividades = await actividadService.getActividadesByLote(req.params.loteId);
        res.json(actividades);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las actividades por lote" });
    }
};

exports.getActividadesByUsuario = async (req, res) => {
    try {
        const actividades = await actividadService.getActividadesByUsuario(req.params.usuarioId);
        res.json(actividades);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las actividades del usuario" });
    }
};

exports.updateEstadoActividad = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;
        const actividad = await actividadService.updateEstadoActividad(id, estado);
        res.json(actividad);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.registrarHorasTrabajadas = async (req, res) => {
    try {
        const { id } = req.params; // ID de la actividad
        const { horas } = req.body; // Horas trabajadas desde el cuerpo de la solicitud

        const actividad = await actividadService.registrarHorasTrabajadas(id, horas);
        res.json(actividad);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.marcarEnProgreso = async (req, res) => {
    try {
        const actividad = await actividadService.marcarEnProgreso(req.params.id, req.user.usuario_id, req.user.rol);
        res.json(actividad);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.marcarCompletada = async (req, res) => {
    try {
        const actividad = await actividadService.marcarCompletada(req.params.id, req.user.usuario_id, req.user.rol);
        res.json(actividad);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.completarPorTecnico = async (req, res) => {
    try {
        const actividad = await actividadService.completarPorTecnico(req.params.id);
        res.json(actividad);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
