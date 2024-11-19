const express = require('express');
const router = express.Router();
const cosechaController = require('../controllers/cosechaController');

router.get('/', cosechaController.getAllCosechas);
router.get('/:id', cosechaController.getCosechaById);
router.post('/', cosechaController.createCosecha);
router.put('/:id', cosechaController.updateCosecha);
router.delete('/:id', cosechaController.deleteCosecha);

module.exports = router;
