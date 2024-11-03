const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Rol = sequelize.define('Rol', {
    rol_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(20), allowNull: false, unique: true }, // Ej: 'Dueño', 'Técnico', 'Trabajador'
    permisos: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false } // Permisos como array de strings
}, {
    timestamps: false,
    tableName: 'roles'
});

module.exports = Rol;
