const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Lote = sequelize.define(
    "Lote",
    {
        lote_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        propietario: { // Nuevo: Propietario del lote
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        numero_plantas: { // Nuevo: Cantidad de plantas en el lote
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fecha_siembra: { // Nuevo: Fecha de siembra del lote
            type: DataTypes.DATE,
            allowNull: false,
        },
        ubicacion: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        tamano: {
            type: DataTypes.DECIMAL(5, 2), // Tamaño en hectáreas
            allowNull: true,
        },
        estado: {
            type: DataTypes.ENUM("En Preparación", "Abandonado", "Por Inspeccionar", "Al dia"),
            defaultValue: "Por Inspeccionar",
        },
    },
    {
        timestamps: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
        tableName: "lotes",
    }
);

module.exports = Lote;
