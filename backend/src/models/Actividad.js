// src/models/Actividad.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Lote = require("./Lote");
const Usuario = require("./Usuario");
const TipoActividad = require("./TipoActividad");

const Actividad = sequelize.define(
    "Actividad",
    {
        actividad_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tipo_id: {
            type: DataTypes.INTEGER,
            references: {
                model: TipoActividad,
                key: "tipo_id",
            },
            allowNull: false,
        },
        tipo_actividad: {
            type: DataTypes.ENUM("Planificada", "Realizada"),
            allowNull: false,
        },
        titulo: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
        },
        fecha_inicio: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fecha_fin: {
            type: DataTypes.DATE,
        },
        prioridad: {
            type: DataTypes.ENUM("Baja", "Media", "Alta"),
        },
        estado: {
            type: DataTypes.ENUM("Pendiente", "En Progreso", "Completada", "Pendiente por Revisión"),
            allowNull: false,
        },
        lote_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Lote,
                key: "lote_id",
            },
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Usuario,
                key: "usuario_id",
            },
        },
        creador_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Usuario, // Asegúrate de que Usuario está correctamente importado
                key: "usuario_id",
            },
            allowNull: true, // Permitir valores nulos si el creador no es obligatorio
        },
        inicio_real: { type: DataTypes.DATE }, // Marca de tiempo real de inicio
        fin_real: { type: DataTypes.DATE },    // Marca de tiempo real de finalización
        horas_extras_pendientes: { type: DataTypes.FLOAT, defaultValue: 0 }, // Exceso de horas trabajadas
        horas_trabajadas: { type: DataTypes.FLOAT, defaultValue: 0 }, // Horas trabajadas reales
    },
    {
        timestamps: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
        tableName: "actividades",
    }
);

Lote.hasMany(Actividad, { foreignKey: "lote_id" });
Actividad.belongsTo(Lote, { foreignKey: "lote_id" });

TipoActividad.hasMany(Actividad, { foreignKey: "tipo_id" });
Actividad.belongsTo(TipoActividad, { foreignKey: "tipo_id" });

Usuario.hasMany(Actividad, { as: "actividadesAsignadas", foreignKey: "usuario_id" });
Actividad.belongsTo(Usuario, { as: "responsable", foreignKey: "usuario_id" });

Usuario.hasMany(Actividad, { as: "actividadesCreadas", foreignKey: "creador_id" });
Actividad.belongsTo(Usuario, { as: "creador", foreignKey: "creador_id" });

module.exports = Actividad;
