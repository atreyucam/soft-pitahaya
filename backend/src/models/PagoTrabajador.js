const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Trabajador = require("./Trabajador");
const CostoGasto = require("./CostoGasto");

const PagoTrabajador = sequelize.define(
    "PagoTrabajador",
    {
        pago_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        gasto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: CostoGasto,
                key: "gasto_id",
            },
        },
        trabajador_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Trabajador,
                key: "trabajador_id",
            },
        },
        fecha_pago: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        monto: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        metodo_pago: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        detalles: {
            type: DataTypes.TEXT,
        },
        periodo: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    },
    {
        timestamps: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
        tableName: "pagos_trabajadores",
    }
);

// Relación con Trabajador y CostoGasto
CostoGasto.hasOne(PagoTrabajador, { foreignKey: "gasto_id" });
PagoTrabajador.belongsTo(CostoGasto, { foreignKey: "gasto_id" });

Trabajador.hasMany(PagoTrabajador, { foreignKey: "trabajador_id" });
PagoTrabajador.belongsTo(Trabajador, { foreignKey: "trabajador_id" });

module.exports = PagoTrabajador;
