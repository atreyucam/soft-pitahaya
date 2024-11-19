const compradorService = require('../services/compradorService');

exports.getAllCompradores = async (req, res) => {
    try {
        const compradores = await compradorService.getAllCompradores();
        res.json(compradores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCompradorById = async (req, res) => {
    try {
        const comprador = await compradorService.getCompradorById(req.params.id);
        res.json(comprador);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.createComprador = async (req, res) => {
    try {
        const comprador = await compradorService.createComprador(req.body);
        res.status(201).json(comprador);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateComprador = async (req, res) => {
    try {
        await compradorService.updateComprador(req.params.id, req.body);
        res.json({ message: 'Comprador actualizado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteComprador = async (req, res) => {
    try {
        await compradorService.deleteComprador(req.params.id);
        res.json({ message: 'Comprador eliminado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
