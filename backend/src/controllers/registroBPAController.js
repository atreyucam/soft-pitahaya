const registroBPAService = require('../services/registroBPAService');

exports.getAllRegistros = async (req, res) => {
    try {
        const registros = await registroBPAService.getAllRegistros();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getRegistroById = async (req, res) => {
    try {
        const registro = await registroBPAService.getRegistroById(req.params.id);
        res.json(registro);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.createRegistro = async (req, res) => {
    try {
        const registro = await registroBPAService.createRegistro(req.body);
        res.status(201).json(registro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateRegistro = async (req, res) => {
    try {
        await registroBPAService.updateRegistro(req.params.id, req.body);
        res.json({ message: 'Registro actualizado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteRegistro = async (req, res) => {
    try {
        await registroBPAService.deleteRegistro(req.params.id);
        res.json({ message: 'Registro eliminado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
