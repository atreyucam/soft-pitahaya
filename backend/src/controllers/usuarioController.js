const usuarioService = require('../services/usuarioService');
const authService = require('../services/authService');

// Servicio de login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await authService.login(email, password);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPerfil = (req, res) => {
    res.json({
        usuario_id: req.user.usuario_id,
        nombre: req.user.nombre,
        apellido: req.user.apellido,
        rol: req.user.rol
    });
};

exports.registerAdmin = async (req, res) => {
    try {
        const data = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: req.body.password,
            rol_id: 1 // Supongamos que el ID del rol "Dueño" es 1
        };
        const usuario = await usuarioService.createUsuario(data);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Servicios de usuarios
exports.getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioService.getAllUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

exports.getUsuarioById = async (req, res) => {
    try {
        const { usuario_id, rol } = req.user;
        const userId = parseInt(req.params.id);

        if (rol === 'Trabajador' && userId !== usuario_id) {
            return res.status(403).json({ error: 'Acceso denegado: solo puedes ver tu propio perfil' });
        }

        const usuario = await usuarioService.getUsuarioById(userId);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};

exports.createUsuario = async (req, res) => {
    try {
        const usuario = await usuarioService.createUsuario(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateUsuario = async (req, res) => {
    try {
        const result = await usuarioService.updateUsuario(req.params.id, req.body);
        if (result[0] === 1) {
            res.json({ message: 'Usuario actualizado correctamente' });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};

exports.deleteUsuario = async (req, res) => {
    try {
        const result = await usuarioService.deleteUsuario(req.params.id);
        if (result === 1) {
            res.json({ message: 'Usuario eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};
