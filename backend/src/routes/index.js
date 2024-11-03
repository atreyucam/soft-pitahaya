const express = require('express');
const router = express.Router();
// llamadas
const usuarioRoutes = require('./usuarioRoutes');
const trabajadorRoutes = require('./trabajadorRoutes');

// Ruta de prueba
router.get('/', (req, res) => {
  res.send('Bienvenido al backend de softPitahaya');
});

router.use('/usuarios', usuarioRoutes);
router.use('/trabajadores', trabajadorRoutes);


module.exports = router;
