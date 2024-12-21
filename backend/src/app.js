require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/config");
const routes = require("./routes");
const initializeRoles = require('./utils/initializeRoles');
const initializeTipoActividad = require("./utils/initializeTipoActividad");

const app = express();
const PORT = process.env.PORT || 3005;

// Middlewares
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173", // Cambia a la URL de tu frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Ocurrió un error en el servidor." });
});
app.use("/api", routes); 

// ------------------------------------------------------------------------------------

sequelize.sync({ force: false })
    .then(async () => {
        console.log("Tablas sincronizadas con éxito.");
        await initializeRoles();
        await initializeTipoActividad();
        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error al sincronizar las tablas:", error);
    });

module.exports = { app, sequelize }; 