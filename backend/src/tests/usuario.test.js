const request = require("supertest");
const { app } = require("../app");

describe("Pruebas de Usuarios", () => {
    test("Debería registrar un nuevo usuario", async () => {
        const response = await request(app)
            .post("/api/usuarios/register-admin")
            .send({
                nombre: "Admin",
                apellido: "Test",
                email: "admin@test.com",
                password: "Test1234@",
                rol_id: 1,
            });
        
        console.log(response.body);
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty("usuario_id");
    });
});
