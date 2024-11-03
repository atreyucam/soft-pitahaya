const Usuario = require('./Usuario');
const Trabajador = require('./Trabajador');
const Rol = require('./Rol');

// Configuración de relaciones
Rol.hasMany(Usuario, { foreignKey: 'rol_id' });
Usuario.belongsTo(Rol, { foreignKey: 'rol_id' });

Usuario.hasOne(Trabajador, { foreignKey: 'usuario_id' });
Trabajador.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = { Usuario, Trabajador, Rol};
