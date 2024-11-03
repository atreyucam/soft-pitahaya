const trabajadorService = require('../services/trabajadorService');

exports.createTrabajador = async (req, res) => {
    try {
        const trabajador = await trabajadorService.createTrabajador(req.body);
        res.status(201).json(trabajador);
    } catch (error) {
        console.error('Error al crear el trabajador:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.getAllTrabajadores = async (req, res) => {
    try {
        const trabajadores = await trabajadorService.getAllTrabajadores();
        res.json(trabajadores);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los trabajadores' });
    }
};

exports.getTrabajadorById = async (req, res) => {
    try {
        const trabajador = await trabajadorService.getTrabajadorById(req.params.id);
        if (trabajador) {
            res.json(trabajador);
        } else {
            res.status(404).json({ error: 'Trabajador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el trabajador' });
    }
};

exports.updateTrabajador = async (req, res) => {
    try {
        const result = await trabajadorService.updateTrabajador(req.params.id, req.body);
        if (result[0] === 1) {
            res.json({ message: 'Trabajador actualizado correctamente' });
        } else {
            res.status(404).json({ error: 'Trabajador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el trabajador' });
    }
};

exports.deleteTrabajador = async (req, res) => {
    try {
        const result = await trabajadorService.deleteTrabajador(req.params.id);
        if (result === 1) {
            res.json({ message: 'Trabajador eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Trabajador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el trabajador' });
    }
};