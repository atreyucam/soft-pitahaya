const express = require('express');
const router = express.Router();
const pagoController = require('../controllers/pagoController');

// Rutas de pagos
router.get('/', pagoController.getAllPagos); // Obtener todos los pagos
router.get('/:id', pagoController.getPagoById); // Obtener un pago por ID
router.get('/usuario/:usuarioId', pagoController.getPagosByUsuario); // Obtener pagos de un usuario específico
router.post('/crear', pagoController.createPago); // Crear un nuevo pago
router.put('/:id', pagoController.updatePago); // Actualizar un pago existente
router.delete('/:id', pagoController.deletePago); // Eliminar un pago

module.exports = router;
