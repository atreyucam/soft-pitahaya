const express = require('express');
const router = express.Router();
const trabajadorController = require('../controllers/trabajadorController');

// Ruta para crear un trabajador
router.post('/', trabajadorController.createTrabajador);

module.exports = router;
