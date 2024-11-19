const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Inventario = sequelize.define(
    "Inventario",
    {
        item_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
        },
        categoria: {
            type: DataTypes.ENUM("Insumos", "Herramientas", "Máquinas", "Accesorio"),
            allowNull: false,
        },
        cantidad_disponible: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        unidad_medida: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING(50),
        },
        fecha_adquisicion: {
            type: DataTypes.DATE,
        },
        ubicacion: {
            type: DataTypes.STRING(100),
        },
    },
    {
        timestamps: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
        tableName: "inventario",
    }
);

module.exports = Inventario;
