const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Usuario = require("./Usuario");

const Mensaje = sequelize.define(
    "Mensaje",
    {
        mensaje_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha_hora: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        emisor_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Usuario,
                key: "usuario_id",
            },
            allowNull: false,
        },
        receptor_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Usuario,
                key: "usuario_id",
            },
            allowNull: false,
        },
        asunto: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        contenido: {
            type: DataTypes.TEXT,
        },
        leido: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        timestamps: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
        tableName: "mensajes",
    }
);

// Relaciones
Usuario.hasMany(Mensaje, { foreignKey: "emisor_id", as: "mensajesEnviados" });
Usuario.hasMany(Mensaje, { foreignKey: "receptor_id", as: "mensajesRecibidos" });

module.exports = Mensaje;
