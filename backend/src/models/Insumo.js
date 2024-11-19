const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Inventario = require("./Inventario");

const Insumo = sequelize.define(
    "Insumo",
    {
        insumo_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        item_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references: {
                model: Inventario,
                key: "item_id",
            },
        },
        tipo_insumo: {
            type: DataTypes.STRING(50),
        },
        cantidad_total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        fecha_caducidad: {
            type: DataTypes.DATE,
        },
        estado_insumo: {
            type: DataTypes.ENUM("Lleno", "Medio", "Cuarto", "Vacío", "Expirado"),
            allowNull: false,
        },
    },
    {
        timestamps: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
        tableName: "insumos",
    }
);

Inventario.hasOne(Insumo, { foreignKey: "item_id" });
Insumo.belongsTo(Inventario, { foreignKey: "item_id" });

module.exports = Insumo;
