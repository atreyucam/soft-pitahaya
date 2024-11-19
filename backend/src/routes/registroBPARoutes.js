const express = require('express');
const router = express.Router();
const registroBPAController = require('../controllers/registroBPAController');

router.get('/', registroBPAController.getAllRegistros);
router.get('/:id', registroBPAController.getRegistroById);
router.post('/', registroBPAController.createRegistro);
router.put('/:id', registroBPAController.updateRegistro);
router.delete('/:id', registroBPAController.deleteRegistro);

module.exports = router;
