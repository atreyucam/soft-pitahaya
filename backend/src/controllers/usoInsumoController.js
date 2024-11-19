const usoInsumoService = require('../services/usoInsumoService');

exports.getAllUsoInsumos = async (req, res) => {
    try {
        const usoInsumos = await usoInsumoService.getAllUsoInsumos();
        res.json(usoInsumos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUsoInsumoById = async (req, res) => {
    try {
        const usoInsumo = await usoInsumoService.getUsoInsumoById(req.params.id);
        res.json(usoInsumo);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.createUsoInsumo = async (req, res) => {
    try {
        const usoInsumo = await usoInsumoService.createUsoInsumo(req.body);
        res.status(201).json(usoInsumo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateUsoInsumo = async (req, res) => {
    try {
        await usoInsumoService.updateUsoInsumo(req.params.id, req.body);
        res.json({ message: 'Uso de insumo actualizado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteUsoInsumo = async (req, res) => {
    try {
        await usoInsumoService.deleteUsoInsumo(req.params.id);
        res.json({ message: 'Uso de insumo eliminado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
