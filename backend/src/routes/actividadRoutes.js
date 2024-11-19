const express = require('express');
const router = express.Router();
const actividadController = require('../controllers/actividadController');
const authMiddleware = require("../middleware/authMiddleware");

// Rutas de actividades
router.post('/crear-actividad',authMiddleware, actividadController.createActividad);
router.get('/', actividadController.getAllActividades);
router.get('/:id', actividadController.getActividadById);
router.put('/:id', actividadController.updateActividad);
router.delete('/:id', actividadController.deleteActividad);

// Obtener actividades por lote
router.get("/lote/:loteId", actividadController.getActividadesByLote);

// Obtener actividades asignadas a un trabajador
router.get("/usuario/:usuarioId", actividadController.getActividadesByUsuario);

// Cambiar el estado de una actividad
router.put("/:id/estado", actividadController.updateEstadoActividad);


router.post("/:id/registrar-horas", authMiddleware, actividadController.registrarHorasTrabajadas);
router.put("/:id/en-progreso", authMiddleware, actividadController.marcarEnProgreso);
router.put("/:id/completar", authMiddleware, actividadController.marcarCompletada);
router.put("/:id/completar-tecnico", authMiddleware, actividadController.completarPorTecnico);


module.exports = router;
