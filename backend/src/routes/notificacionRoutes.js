const express = require('express');
const router = express.Router();
const notificacionController = require('../controllers/notificacionController');

router.get('/', notificacionController.getAllNotificaciones);
router.get('/:id', notificacionController.getNotificacionById);
router.post('/', notificacionController.createNotificacion);
router.put('/:id', notificacionController.updateNotificacion);
router.delete('/:id', notificacionController.deleteNotificacion);

module.exports = router;
