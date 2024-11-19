const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Usuario = require("./Usuario");
const Inventario = require("./Inventario");

const Solicitud = sequelize.define(
    "Solicitud",
    {
        solicitud_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha_solicitud: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Usuario,
                key: "usuario_id",
            },
            allowNull: false,
        },
        tipo: {
            type: DataTypes.ENUM("Insumo", "Herramienta"),
            allowNull: false,
        },
        item_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Inventario,
                key: "item_id",
            },
            allowNull: false,
        },
        cantidad_solicitada: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        unidad_medida: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        estado: {
            type: DataTypes.ENUM("Pendiente", "Aprobada", "Rechazada"),
            defaultValue: "Pendiente",
        },
        fecha_respuesta: {
            type: DataTypes.DATE,
        },
        respuesta: {
            type: DataTypes.TEXT,
        },
    },
    {
        timestamps: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
        tableName: "solicitudes",
    }
);

// Relaciones
Usuario.hasMany(Solicitud, { foreignKey: "usuario_id" });
Solicitud.belongsTo(Usuario, { foreignKey: "usuario_id" });

Inventario.hasMany(Solicitud, { foreignKey: "item_id" });
Solicitud.belongsTo(Inventario, { foreignKey: "item_id" });

module.exports = Solicitud;
