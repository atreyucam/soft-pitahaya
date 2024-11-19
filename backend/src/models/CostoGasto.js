const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Actividad = require("./Actividad");

const CostoGasto = sequelize.define(
    "CostoGasto",
    {
        gasto_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        categoria: {
            type: DataTypes.ENUM("Insumos","herramientas","Máquinas", "Mano de Obra", "Mantenimiento", "Transporte", "Otros"),
            allowNull: false,
        },
        tipo: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        monto: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
        },
        actividad_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Actividad,
                key: "actividad_id",
            },
        },
    },
    {
        timestamps: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
        tableName: "costos_gastos",
    }
);

// Relación con Actividad
Actividad.hasMany(CostoGasto, { foreignKey: "actividad_id" });
CostoGasto.belongsTo(Actividad, { foreignKey: "actividad_id" });

module.exports = CostoGasto;
