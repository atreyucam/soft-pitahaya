const express = require('express');
const router = express.Router();
const compradorController = require('../controllers/compradorController');

router.get('/', compradorController.getAllCompradores);
router.get('/:id', compradorController.getCompradorById);
router.post('/', compradorController.createComprador);
router.put('/:id', compradorController.updateComprador);
router.delete('/:id', compradorController.deleteComprador);

module.exports = router;
