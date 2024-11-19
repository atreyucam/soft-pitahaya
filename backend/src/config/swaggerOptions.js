const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0', // Versión de OpenAPI
    info: {
        title: 'SoftPitahaya API', // Título de la documentación
        version: '1.0.0', // Versión del API
        description: 'Documentación interactiva para la API de gestión agronómica de Pitahaya Amarilla.',
    },
    servers: [
        {
            url: 'http://localhost:3000/api', // URL base para tus endpoints
            description: 'Servidor de desarrollo',
        },
    ],
};

const options = {
    swaggerDefinition,
    // apis: ['./src/routes/*.js'], // Rutas donde están definidos tus endpoints
    apis: ['./src/routes/*.js'], // Rutas donde están definidos tus endpoints

};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
