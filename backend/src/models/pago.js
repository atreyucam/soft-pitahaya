const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Usuario = require("./Usuario");


const Pago = sequelize.define(
    "Pago",
    {
        pago_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Usuario,
                key: "usuario_id",
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
        tableName: "pagos",
    }
);

Usuario.hasMany(Pago, { foreignKey: "usuario_id" });
Pago.belongsTo(Usuario, { foreignKey: "usuario_id" });

module.exports = Pago;
