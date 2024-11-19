const express = require('express');
const router = express.Router();
const costoGastoController = require('../controllers/costoGastoController');

// Rutas para costos y gastos
router.post('/nuevo-costo', costoGastoController.createCostoGasto);
router.get('/', costoGastoController.getAllCostosGastos);
router.get('/:id', costoGastoController.getCostoGastoById);
router.put('/:id', costoGastoController.updateCostoGasto);
router.delete('/:id', costoGastoController.deleteCostoGasto);

module.exports = router;
