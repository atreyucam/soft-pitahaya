const notificacionService = require('../services/notificacionService');

exports.getAllNotificaciones = async (req, res) => {
    try {
        const notificaciones = await notificacionService.getAllNotificaciones();
        res.json(notificaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getNotificacionById = async (req, res) => {
    try {
        const notificacion = await notificacionService.getNotificacionById(req.params.id);
        res.json(notificacion);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.createNotificacion = async (req, res) => {
    try {
        const notificacion = await notificacionService.createNotificacion(req.body);
        res.status(201).json(notificacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateNotificacion = async (req, res) => {
    try {
        await notificacionService.updateNotificacion(req.params.id, req.body);
        res.json({ message: 'Notificación actualizada correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteNotificacion = async (req, res) => {
    try {
        await notificacionService.deleteNotificacion(req.params.id);
        res.json({ message: 'Notificación eliminada correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
