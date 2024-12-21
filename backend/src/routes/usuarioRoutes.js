const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Ruta de inicio de sesión (no protegida)

router.post('/sign-in', usuarioController.login);
router.post('/refresh', usuarioController.refreshToken); // renovar el token
router.post('/register-admin', usuarioController.registerAdmin); // Ruta temporal para crear un usuario dueño

// recuperacion de contrasenas
router.post('/forgot-password', usuarioController.requestPasswordReset);
router.post('/reset-password', usuarioController.resetPassword);

// Rutas protegidas
router.get('/perfil', authMiddleware, usuarioController.getPerfil); 


// * funcionando
router.post('/crear', usuarioController.createUsuario); //Crea un usuario
router.get('/listarUsuarios', usuarioController.getAllUsuarios); //Lista a todos los usuarios
router.get('/:id', usuarioController.getUsuarioById); //consulta por usuario
router.put('/usuario/:id', usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario); //Para eliminar usuarios

// Todos los usuarios autenticados pueden ver su propia información
router.get('/usuario/:id', authMiddleware, usuarioController.getUsuarioById);

module.exports = router;
