const express = require('express');
const router = express.Router();
const pagoTrabajadorController = require('../controllers/pagoTrabajadorController');

// Rutas para pagos a trabajadores
router.get('/', pagoTrabajadorController.getAllPagos);
router.get('/:id', pagoTrabajadorController.getPagoById);
router.post('/', pagoTrabajadorController.createPago);
router.put('/:id', pagoTrabajadorController.updatePago);
router.delete('/:id', pagoTrabajadorController.deletePago);

module.exports = router;
