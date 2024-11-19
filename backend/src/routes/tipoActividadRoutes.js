const express = require("express");
const router = express.Router();
const tipoActividadController = require("../controllers/tipoActividadController");

// Rutas de TipoActividad
router.post("/crear-tipo", tipoActividadController.createTipoActividad);
router.get("/", tipoActividadController.getAllTipoActividades);
router.get("/:id", tipoActividadController.getTipoActividadById);
router.put("/:id", tipoActividadController.updateTipoActividad);
router.delete("/:id", tipoActividadController.deleteTipoActividad);

module.exports = router;
