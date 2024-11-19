const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Insumo = require("./Insumo");
const Actividad = require("./Actividad");

const UsoInsumo = sequelize.define(
    "UsoInsumo",
    {
        uso_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        insumo_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Insumo,
                key: "insumo_id",
            },
        },
        actividad_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Actividad,
                key: "actividad_id",
            },
        },
        cantidad_utilizada: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        fecha_uso: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
        },
    },
    {
        timestamps: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
        tableName: "uso_insumos",
    }
);

// Relación con Insumo y Actividad
Insumo.hasMany(UsoInsumo, { foreignKey: "insumo_id" });
UsoInsumo.belongsTo(Insumo, { foreignKey: "insumo_id" });

Actividad.hasMany(UsoInsumo, { foreignKey: "actividad_id" });
UsoInsumo.belongsTo(Actividad, { foreignKey: "actividad_id" });

module.exports = UsoInsumo;
