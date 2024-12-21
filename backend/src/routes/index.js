const express = require('express');
const router = express.Router();

const usuarioRoutes = require('./usuarioRoutes');
const loteRoutes = require('./loteRoutes');
const tipoActividadRoutes = require("./tipoActividadRoutes");
const actividadRoutes = require('./actividadRoutes');
const inventarioRoutes = require('./inventarioRoutes');
const insumoRoutes = require('./insumoRoutes');
const usoInsumoRoutes = require('./usoInsumoRoutes');
const costoGastoRoutes = require('./costoGastoRoutes');
const pagoRoutes = require('./pagoRoutes');
const compradorRoutes = require('./compradorRoutes');
const ventaRoutes = require('./ventaRoutes');
const detalleVentaRoutes = require('./detalleVentaRoutes');
const mensajeRoutes = require('./mensajeRoutes');
const notificacionRoutes = require('./notificacionRoutes');
const registroBPARoutes = require('./registroBPARoutes');
const cosechaRoutes = require('./cosechaRoutes');
const solicitudRoutes = require('./solicitudRoutes');

// Ruta de prueba
router.get('/', (req, res) => {
  res.send('Bienvenido al backend de softPitahaya');
});

// Asociar rutas
router.use('/usuarios', usuarioRoutes);
router.use('/lotes', loteRoutes);
router.use("/tipo-actividades", tipoActividadRoutes);
router.use('/actividades', actividadRoutes);
router.use('/inventario', inventarioRoutes);
router.use('/insumos', insumoRoutes);
router.use('/uso-insumos', usoInsumoRoutes);
router.use('/costos-gastos', costoGastoRoutes);
router.use('/pagos', pagoRoutes);
router.use('/compradores', compradorRoutes);
router.use('/ventas', ventaRoutes);
router.use('/detalles-venta', detalleVentaRoutes);
router.use('/mensajes', mensajeRoutes);
router.use('/notificaciones', notificacionRoutes);
router.use('/registro-bpa', registroBPARoutes);
router.use('/cosechas', cosechaRoutes);
router.use('/solicitudes', solicitudRoutes);

module.exports = router;
