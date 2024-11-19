const loteService = require('../services/loteService');

exports.getAllLotes = async (req, res) => {
    try {
        const lotes = await loteService.getAllLotes();
        res.json(lotes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getLoteById = async (req, res) => {
    try {
        const lote = await loteService.getLoteById(req.params.id);
        res.json(lote);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.createLote = async (req, res) => {
    try {
        const lote = await loteService.createLote(req.body);
        res.status(201).json(lote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateLote = async (req, res) => {
    try {
        await loteService.updateLote(req.params.id, req.body);
        res.json({ message: 'Lote actualizado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteLote = async (req, res) => {
    try {
        await loteService.deleteLote(req.params.id);
        res.json({ message: 'Lote eliminado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
