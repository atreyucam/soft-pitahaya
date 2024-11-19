const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Usuario = require("./Usuario");

const RegistroBPA = sequelize.define(
    "RegistroBPA",
    {
        registro_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        actividad: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        detalles: {
            type: DataTypes.TEXT,
        },
        documentacion: {
            type: DataTypes.STRING(255),
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Usuario,
                key: "usuario_id",
            },
            allowNull: false,
        },
    },
    {
        timestamps: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
        tableName: "registro_bpa",
    }
);

// Relación con Usuario
Usuario.hasMany(RegistroBPA, { foreignKey: "usuario_id" });
RegistroBPA.belongsTo(Usuario, { foreignKey: "usuario_id" });

module.exports = RegistroBPA;
