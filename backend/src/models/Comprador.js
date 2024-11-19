const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Comprador = sequelize.define(
    "Comprador",
    {
        comprador_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        contacto: {
            type: DataTypes.STRING(100),
        },
        telefono: {
            type: DataTypes.STRING(20),
        },
        email: {
            type: DataTypes.STRING(100),
            validate: {
                isEmail: true,
            },
        },
        historial_compras: {
            type: DataTypes.TEXT,
        },
        preferencias: {
            type: DataTypes.TEXT,
        },
    },
    {
        timestamps: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
        tableName: "compradores",
    }
);

module.exports = Comprador;
