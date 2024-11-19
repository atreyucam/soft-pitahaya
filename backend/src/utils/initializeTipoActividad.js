// src/utils/initializeTipoActividad.js
const { TipoActividad } = require("../models");

const initializeTipoActividad = async () => {
    const tipos = [
        { nombre: "Aplicación de Agroquímicos", descripcion: "Uso de fertilizantes, pesticidas, etc." },
        { nombre: "Poda", descripcion: "Mantenimiento de las plantas." },
        { nombre: "Cosecha", descripcion: "Recolección de frutos." },
        { nombre: "Riego", descripcion: "Aplicación de agua al cultivo." },
        { nombre: "Control de Maleza", descripcion: "Eliminación de malezas en el lote." },
        { nombre: "Mantenimiento de Infraestructura", descripcion: "Reparaciones en instalaciones." },
        { nombre: "Monitoreo de Cultivo", descripcion: "Inspección del estado de las plantas." },
    ];

    for (const tipo of tipos) {
        await TipoActividad.findOrCreate({
            where: { nombre: tipo.nombre },
            defaults: tipo,
        });
    }
};

module.exports = initializeTipoActividad;
