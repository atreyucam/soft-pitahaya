const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Usuario = require("./Usuario");

const Notificacion = sequelize.define(
    "Notificacion",
    {
        notificacion_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha_hora: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        tipo: {
            type: DataTypes.STRING(100),
        },
        mensaje: {
            type: DataTypes.TEXT,
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Usuario,
                key: "usuario_id",
            },
            allowNull: false,
        },
        estado: {
            type: DataTypes.ENUM("No Leída", "Leída"),
            defaultValue: "No Leída",
        },
    },
    {
        timestamps: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
        tableName: "notificaciones",
    }
);

// Relación
Usuario.hasMany(Notificacion, { foreignKey: "usuario_id" });
Notificacion.belongsTo(Usuario, { foreignKey: "usuario_id" });

module.exports = Notificacion;
