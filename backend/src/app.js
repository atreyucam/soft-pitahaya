require("dotenv").config();
const express = require("express");
const sequelize = require("./config/config");
const routes = require("./routes");
const initializeRoles = require('./utils/initializeRoles');

const app = express();
const PORT = process.env.PORT || 3005;

// Middlewares
app.use(express.json());
app.use("/api", routes); // Todas las rutas del API empezarán con /api

// Sincronizar los modelos con la base de datos y luego inicializar los roles
sequelize.sync({ force: false })
    .then(async () => {
        console.log('Tablas sincronizadas con éxito.');
        await initializeRoles();
        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
        }).on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                console.error(`El puerto ${PORT} ya está en uso. Prueba con un puerto diferente.`);
            } else {
                console.error(`Error al iniciar el servidor:`, err);
            }
        });
    })
    .catch(error => {
        console.error('Error al sincronizar las tablas:', error);
    });



module.exports = app;