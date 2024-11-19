const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Venta = require("./Venta");
const Lote = require("./Lote");

const DetalleVenta = sequelize.define(
    "DetalleVenta",
    {
        detalle_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        venta_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Venta,
                key: "venta_id",
            },
            allowNull: false,
        },
        producto: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        cantidad: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        precio_unitario: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        lote_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Lote,
                key: "lote_id",
            },
        },
    },
    {
        timestamps: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
        tableName: "detalle_venta",
    }
);

// Relación con Venta y Lote
Venta.hasMany(DetalleVenta, { foreignKey: "venta_id" });
DetalleVenta.belongsTo(Venta, { foreignKey: "venta_id" });

Lote.hasMany(DetalleVenta, { foreignKey: "lote_id" });
DetalleVenta.belongsTo(Lote, { foreignKey: "lote_id" });

module.exports = DetalleVenta;
