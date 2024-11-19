const express = require('express');
const router = express.Router();
const solicitudController = require('../controllers/solicitudController');

router.get('/', solicitudController.getAllSolicitudes);
router.get('/:id', solicitudController.getSolicitudById);
router.post('/', solicitudController.createSolicitud);
router.put('/:id', solicitudController.updateSolicitud);
router.delete('/:id', solicitudController.deleteSolicitud);

module.exports = router;
