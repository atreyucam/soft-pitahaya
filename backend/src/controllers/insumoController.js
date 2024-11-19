const insumoService = require('../services/insumoService');

exports.getAllInsumos = async (req, res) => {
    try {
        const insumos = await insumoService.getAllInsumos();
        res.json(insumos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getInsumoById = async (req, res) => {
    try {
        const insumo = await insumoService.getInsumoById(req.params.id);
        res.json(insumo);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.createInsumo = async (req, res) => {
    try {
        const insumo = await insumoService.createInsumo(req.body);
        res.status(201).json(insumo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateInsumo = async (req, res) => {
    try {
        await insumoService.updateInsumo(req.params.id, req.body);
        res.json({ message: 'Insumo actualizado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteInsumo = async (req, res) => {
    try {
        await insumoService.deleteInsumo(req.params.id);
        res.json({ message: 'Insumo eliminado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
