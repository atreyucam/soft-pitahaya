const express = require('express');
const router = express.Router();
const usoInsumoController = require('../controllers/usoInsumoController');

// Rutas para Uso de Insumos
router.get('/', usoInsumoController.getAllUsoInsumos);
router.get('/:id', usoInsumoController.getUsoInsumoById);
router.post('/', usoInsumoController.createUsoInsumo);
router.put('/:id', usoInsumoController.updateUsoInsumo);
router.delete('/:id', usoInsumoController.deleteUsoInsumo);

module.exports = router;
