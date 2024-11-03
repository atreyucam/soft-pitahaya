const usuarioRepository = require('../repositories/usuarioRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (email, password) => {
    // Buscar el usuario por email
    const usuario = await usuarioRepository.findByEmail(email);
    if (!usuario) {
        throw new Error('Correo electrónico o contraseña incorrectos');
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, usuario.password);
    if (!isPasswordValid) {
        throw new Error('Correo electrónico o contraseña incorrectos');
    }

    // Generar el token JWT
    const token = jwt.sign(
        {
            usuario_id: usuario.usuario_id,
            rol: usuario.rol_id,
            nombre: usuario.nombre,
            apellido: usuario.apellido
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // Retornar el token y la información básica del usuario
    return {
        token,
        usuario: {
            usuario_id: usuario.usuario_id,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            rol_id: usuario.rol_id
        }
    };
};
