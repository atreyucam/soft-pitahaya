const tipoActividadService = require("../services/tipoActividadService");

exports.createTipoActividad = async (req, res) => {
    try {
        const tipoActividad = await tipoActividadService.createTipoActividad(req.body);
        res.status(201).json(tipoActividad);
    } catch (error) {
        console.error("Error al crear el tipo de actividad:", error);
        res.status(500).json({ error: error.message });
    }
};

exports.getAllTipoActividades = async (req, res) => {
    try {
        const tipoActividades = await tipoActividadService.getAllTipoActividades();
        res.json(tipoActividades);
    } catch (error) {
        console.error("Error al obtener los tipos de actividad:", error);
        res.status(500).json({ error: error.message });
    }
};

exports.getTipoActividadById = async (req, res) => {
    try {
        const tipoActividad = await tipoActividadService.getTipoActividadById(req.params.id);
        if (tipoActividad) {
            res.json(tipoActividad);
        } else {
            res.status(404).json({ error: "Tipo de actividad no encontrado" });
        }
    } catch (error) {
        console.error("Error al obtener el tipo de actividad:", error);
        res.status(500).json({ error: error.message });
    }
};

exports.updateTipoActividad = async (req, res) => {
    try {
        const updated = await tipoActividadService.updateTipoActividad(req.params.id, req.body);
        if (updated) {
            res.json({ message: "Tipo de actividad actualizado correctamente" });
        } else {
            res.status(404).json({ error: "Tipo de actividad no encontrado" });
        }
    } catch (error) {
        console.error("Error al actualizar el tipo de actividad:", error);
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTipoActividad = async (req, res) => {
    try {
        const deleted = await tipoActividadService.deleteTipoActividad(req.params.id);
        if (deleted) {
            res.json({ message: "Tipo de actividad eliminado correctamente" });
        } else {
            res.status(404).json({ error: "Tipo de actividad no encontrado" });
        }
    } catch (error) {
        console.error("Error al eliminar el tipo de actividad:", error);
        res.status(500).json({ error: error.message });
    }
};
