const costoGastoService = require('../services/costoGastoService');

exports.getAllCostosGastos = async (req, res) => {
    try {
        const costosGastos = await costoGastoService.getAllCostosGastos();
        res.json(costosGastos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCostoGastoById = async (req, res) => {
    try {
        const costoGasto = await costoGastoService.getCostoGastoById(req.params.id);
        res.json(costoGasto);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.createCostoGasto = async (req, res) => {
    try {
        const costoGasto = await costoGastoService.createCostoGasto(req.body);
        res.status(201).json(costoGasto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.updateCostoGasto = async (req, res) => {
    try {
        await costoGastoService.updateCostoGasto(req.params.id, req.body);
        res.json({ message: 'Costo o gasto actualizado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteCostoGasto = async (req, res) => {
    try {
        await costoGastoService.deleteCostoGasto(req.params.id);
        res.json({ message: 'Costo o gasto eliminado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
