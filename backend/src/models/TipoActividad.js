// src/models/TipoActividad.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const TipoActividad = sequelize.define(
    "TipoActividad",
    {
        tipo_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        timestamps: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
        tableName: "tipos_actividad",
    }
);

module.exports = TipoActividad;
