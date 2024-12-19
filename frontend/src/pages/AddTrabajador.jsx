import React, { useState } from "react";

const AddTrabajador = () => {
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    email: "",
    password: "",
    habilidades: "",
    calificaciones: "",
    tasaHora: "",
    fechaContratacion: "",
    rol: "Trabajador",
    estado: "Activo",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trabajador añadido:", formData);
    // Aquí puedes agregar lógica para enviar los datos al backend
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Título */}
        <h1 className="text-2xl font-bold mb-6">Añadir Trabajador</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Información básica */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Información Básica</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ID del Trabajador
                </label>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ingrese el ID"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Nombre completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="ejemplo@correo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ingrese la contraseña"
                />
              </div>
            </div>
          </div>

          {/* Campos adicionales */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Detalles del Trabajador</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Habilidades
                </label>
                <input
                  type="text"
                  name="habilidades"
                  value={formData.habilidades}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ejemplo: Liderazgo, Comunicación"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Calificaciones
                </label>
                <input
                  type="text"
                  name="calificaciones"
                  value={formData.calificaciones}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ingrese las calificaciones"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tasa por Hora
                </label>
                <input
                  type="number"
                  name="tasaHora"
                  value={formData.tasaHora}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ejemplo: 20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Fecha de Contratación
                </label>
                <input
                  type="date"
                  name="fechaContratacion"
                  value={formData.fechaContratacion}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="flex items-center gap-2 bg-red-100 text-red-500 px-4 py-2 rounded-md hover:bg-red-200"
            >
              <span>Descartar</span>
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              <span>Guardar</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTrabajador;
