const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Comprador = require("./Comprador");

const Venta = sequelize.define(
    "Venta",
    {
        venta_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        comprador_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Comprador,
                key: "comprador_id",
            },
            allowNull: false,
        },
        total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        destino: {
            type: DataTypes.STRING(100),
        },
    },
    {
        timestamps: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
        tableName: "ventas",
    }
);

// Relación con Comprador
Comprador.hasMany(Venta, { foreignKey: "comprador_id" });
Venta.belongsTo(Comprador, { foreignKey: "comprador_id" });

module.exports = Venta;
