const inventarioService = require('../services/inventarioService');

exports.getAllItems = async (req, res) => {
    try {
        const items = await inventarioService.getAllItems();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await inventarioService.getItemById(req.params.id);
        res.json(item);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.createItem = async (req, res) => {
    try {
        const item = await inventarioService.createItem(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateItem = async (req, res) => {
    try {
        await inventarioService.updateItem(req.params.id, req.body);
        res.json({ message: 'Item actualizado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        await inventarioService.deleteItem(req.params.id);
        res.json({ message: 'Item eliminado correctamente' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
