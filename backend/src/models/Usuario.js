const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Rol = require('./Rol'); 

const Usuario = sequelize.define(
    "Usuario",
    {
        usuario_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        rol_id: { 
            type: DataTypes.INTEGER, 
            allowNull: false, 
            references: { 
                model: Rol, key: 'rol_id' 
            } 
        }, // Nueva clave foránea
        nombre: { 
            type: DataTypes.STRING(50), 
            allowNull: false,
            validate: { notEmpty: true } // No permite valores vacíos
        },
        apellido: { 
            type: DataTypes.STRING(50), 
            allowNull: false,
            validate: { notEmpty: true } // No permite valores vacíos
        },
        email: { 
            type: DataTypes.STRING(100), 
            allowNull: false, 
            unique: true,
            validate: {
                isEmail: true, // Validación de formato de email
                notEmpty: true
            }
        },
        password: { 
            type: DataTypes.STRING(255), 
            allowNull: false,
            validate: {
                len: [8, 255], // Mínimo 8 caracteres para seguridad
                notEmpty: true
            }
        },
        fechaNacimiento: { 
            type: DataTypes.DATE 
        },
        estado: { 
            type: DataTypes.BOOLEAN, 
            defaultValue: true 
        },
    },
    {
        timestamps: true,
        createdAt: "fecha_creacion",
        updatedAt: "fecha_modificacion",
        tableName: "usuarios",
    }
);

// Definir la relación
Rol.hasMany(Usuario, { foreignKey: 'rol_id' });
Usuario.belongsTo(Rol, { foreignKey: 'rol_id' });

module.exports = Usuario;
