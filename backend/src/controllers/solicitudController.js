const solicitudService = require('../services/solicitudService');

exports.getAllSolicitudes = async (req, res) => {
    try {
        const solicitudes = await solicitudService.getAllSolicitudes();
        res.json(solicitudes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getSolicitudById = async (req, res) => {
    try {
        const solicitud = await solicitudService.getSolicitudById(req.params.id);
        res.json(solicitud);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.createSolicitud = async (req, res) => {
    try {
        const solicitud = await solicitudService.createSolicitud(req.body);
        res.status(201).json(solicitud);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateSolicitud = async (req, res) => {
    try {
        await solicitudService.updateSolicitud(req.params.id, req.body);
        res.json({ message: 'Solicitud actualizada correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteSolicitud = async (req, res) => {
    try {
        await solicitudService.deleteSolicitud(req.params.id);
        res.json({ message: 'Solicitud eliminada correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
