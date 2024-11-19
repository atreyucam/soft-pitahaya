const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Lote = require("./Lote");
const Trabajador = require("./Trabajador");
const Actividad = require("./Actividad");

const Cosecha = sequelize.define(
    "Cosecha",
    {
        cosecha_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha_cosecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        lote_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Lote,
                key: "lote_id",
            },
            allowNull: false,
        },
        cantidad_total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        unidad_medida: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        nacional: {
            type: DataTypes.DECIMAL(10, 2), // Kg destinados a Nacional
            defaultValue: 0,
        },
        exportacion: {
            type: DataTypes.DECIMAL(10, 2), // Kg destinados a Exportación
            defaultValue: 0,
        },
        clasificacion: {
            type: DataTypes.ENUM("Nacional", "Exportación"),
        },
        estado_cosecha: {
            type: DataTypes.ENUM("Por cosechar", "No listo", "Listo para envío"),
            allowNull: false,
        },
        destino: {
            type: DataTypes.STRING(100),
        },
        trabajador_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Trabajador,
                key: "trabajador_id",
            },
            allowNull: false,
        },
        observaciones: {
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
        tableName: "cosechas",
    }
);

// Relaciones
Lote.hasMany(Cosecha, { foreignKey: "lote_id" });
Cosecha.belongsTo(Lote, { foreignKey: "lote_id" });

Trabajador.hasMany(Cosecha, { foreignKey: "trabajador_id" });
Cosecha.belongsTo(Trabajador, { foreignKey: "trabajador_id" });

Actividad.hasOne(Cosecha, { foreignKey: "actividad_id" });
Cosecha.belongsTo(Actividad, { foreignKey: "actividad_id" });

module.exports = Cosecha;
