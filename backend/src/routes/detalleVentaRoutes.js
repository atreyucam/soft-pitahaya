const express = require('express');
const router = express.Router();
const detalleVentaController = require('../controllers/detalleVentaController');

router.get('/', detalleVentaController.getAllDetalles);
router.get('/:id', detalleVentaController.getDetalleById);
router.post('/', detalleVentaController.createDetalle);
router.put('/:id', detalleVentaController.updateDetalle);
router.delete('/:id', detalleVentaController.deleteDetalle);

module.exports = router;
