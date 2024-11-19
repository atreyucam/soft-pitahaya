const detalleVentaService = require('../services/detalleVentaService');

exports.getAllDetalles = async (req, res) => {
    try {
        const detalles = await detalleVentaService.getAllDetalles();
        res.json(detalles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getDetalleById = async (req, res) => {
    try {
        const detalle = await detalleVentaService.getDetalleById(req.params.id);
        res.json(detalle);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.createDetalle = async (req, res) => {
    try {
        const detalle = await detalleVentaService.createDetalle(req.body);
        res.status(201).json(detalle);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateDetalle = async (req, res) => {
    try {
        await detalleVentaService.updateDetalle(req.params.id, req.body);
        res.json({ message: 'Detalle actualizado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteDetalle = async (req, res) => {
    try {
        await detalleVentaService.deleteDetalle(req.params.id);
        res.json({ message: 'Detalle eliminado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
