const mensajeService = require('../services/mensajeService');

exports.getAllMensajes = async (req, res) => {
    try {
        const mensajes = await mensajeService.getAllMensajes();
        res.json(mensajes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getMensajeById = async (req, res) => {
    try {
        const mensaje = await mensajeService.getMensajeById(req.params.id);
        res.json(mensaje);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.createMensaje = async (req, res) => {
    try {
        const mensaje = await mensajeService.createMensaje(req.body);
        res.status(201).json(mensaje);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateMensaje = async (req, res) => {
    try {
        await mensajeService.updateMensaje(req.params.id, req.body);
        res.json({ message: 'Mensaje actualizado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteMensaje = async (req, res) => {
    try {
        await mensajeService.deleteMensaje(req.params.id);
        res.json({ message: 'Mensaje eliminado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
