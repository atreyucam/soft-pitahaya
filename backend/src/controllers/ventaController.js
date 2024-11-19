const ventaService = require('../services/ventaService');

exports.getAllVentas = async (req, res) => {
    try {
        const ventas = await ventaService.getAllVentas();
        res.json(ventas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getVentaById = async (req, res) => {
    try {
        const venta = await ventaService.getVentaById(req.params.id);
        res.json(venta);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.createVenta = async (req, res) => {
    try {
        const venta = await ventaService.createVenta(req.body);
        res.status(201).json(venta);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateVenta = async (req, res) => {
    try {
        await ventaService.updateVenta(req.params.id, req.body);
        res.json({ message: 'Venta actualizada correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteVenta = async (req, res) => {
    try {
        await ventaService.deleteVenta(req.params.id);
        res.json({ message: 'Venta eliminada correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
