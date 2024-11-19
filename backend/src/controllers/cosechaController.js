const cosechaService = require('../services/cosechaService');

exports.getAllCosechas = async (req, res) => {
    try {
        const cosechas = await cosechaService.getAllCosechas();
        res.json(cosechas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCosechaById = async (req, res) => {
    try {
        const cosecha = await cosechaService.getCosechaById(req.params.id);
        res.json(cosecha);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.createCosecha = async (req, res) => {
    try {
        const cosecha = await cosechaService.createCosecha(req.body);
        res.status(201).json(cosecha);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateCosecha = async (req, res) => {
    try {
        await cosechaService.updateCosecha(req.params.id, req.body);
        res.json({ message: 'Cosecha actualizada correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteCosecha = async (req, res) => {
    try {
        await cosechaService.deleteCosecha(req.params.id);
        res.json({ message: 'Cosecha eliminada correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
