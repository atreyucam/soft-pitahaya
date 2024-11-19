const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventarioController');

// Rutas para el inventario
router.post('/registrar-item', inventarioController.createItem);
router.get('/', inventarioController.getAllItems);
router.get('/:id', inventarioController.getItemById);
router.put('/:id', inventarioController.updateItem);
router.delete('/:id', inventarioController.deleteItem);

module.exports = router;
