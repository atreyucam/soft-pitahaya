const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Usuario = require("./Usuario"); // Importar para definir la relación

const Trabajador = sequelize.define(
    "Trabajador",
    {
        trabajador_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        usuario_id: { 
            type: DataTypes.INTEGER, 
            allowNull: false, 
            unique: true 
        },
        habilidades: { 
            type: DataTypes.TEXT 
        },
        calificaciones: { 
            type: DataTypes.TEXT 
        },
        tasa_hora: { 
            type: DataTypes.DECIMAL(10, 2), 
            allowNull: true 
        },
        fecha_contratacion: { 
            type: DataTypes.DATE 
        },
    },
    {
        timestamps: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
        tableName: "trabajadores",
    }
);

// Relación uno a uno entre Usuario y Trabajador
Usuario.hasOne(Trabajador, { foreignKey: "usuario_id" });
Trabajador.belongsTo(Usuario, { foreignKey: "usuario_id" });

module.exports = Trabajador;
