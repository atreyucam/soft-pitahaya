const express = require('express');
const router = express.Router();
const loteController = require('../controllers/loteController');

// Rutas de lotes
router.post('/crear-lote', loteController.createLote);
router.get('/lotes', loteController.getAllLotes);
router.get('/:id', loteController.getLoteById);
router.put('/:id', loteController.updateLote);
router.delete('/:id', loteController.deleteLote);

module.exports = router;
