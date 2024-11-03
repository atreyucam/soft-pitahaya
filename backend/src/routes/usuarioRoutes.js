const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Ruta de inicio de sesión (no protegida)
router.post('/login', usuarioController.login);

// Ruta temporal para crear un usuario dueño
router.post('/register-admin', usuarioController.registerAdmin);

// Rutas protegidas
router.get('/perfil', authMiddleware, usuarioController.getPerfil); 

// Rutas de usuarios con restricciones específicas
router.post('/nuevoUsuario', authMiddleware, roleMiddleware(['crear_usuario']), usuarioController.createUsuario);
router.delete('/usuario/:id', authMiddleware, roleMiddleware(['eliminar_usuario']), usuarioController.deleteUsuario);
router.get('/listarUsuarios', authMiddleware, roleMiddleware(['ver_usuario']), usuarioController.getAllUsuarios);
router.put('/usuario/:id', authMiddleware, roleMiddleware(['editar_usuario']), usuarioController.updateUsuario);

// Todos los usuarios autenticados pueden ver su propia información
router.get('/usuario/:id', authMiddleware, usuarioController.getUsuarioById);

module.exports = router;
