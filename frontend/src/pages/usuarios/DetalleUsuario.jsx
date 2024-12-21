import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const DetalleUsuario = () => {
  const { id } = useParams(); // ID del trabajador
  const [trabajador, setTrabajador] = useState(null);
  const [pagos, setPagos] = useState([]); // Almacena los pagos
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("pagos"); // Pestaña activa

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener detalles del trabajador
        const trabajadorResponse = await fetch(`${import.meta.env.VITE_API_URL}/usuarios/${id}`);
        if (!trabajadorResponse.ok) {
          throw new Error("Error al obtener la información del trabajador");
        }
        const trabajadorData = await trabajadorResponse.json();
        setTrabajador(trabajadorData);

        // Obtener historial de pagos
        const pagosResponse = await fetch(`${import.meta.env.VITE_API_URL}/pagos/usuario/${id}`);
        if (!pagosResponse.ok) {
          throw new Error("Error al obtener el historial de pagos");
        }
        const pagosData = await pagosResponse.json();
        setPagos(Array.isArray(pagosData) ? pagosData : []);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-8">Cargando información del trabajador...</div>;
  }

  if (!trabajador) {
    return <div className="text-center mt-8 text-red-500">Trabajador no encontrado.</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Enlace de retorno */}
        <Link to="/trabajadores" className="text-blue-500 hover:underline mb-6 block">
          &larr; Volver
        </Link>

        {/* Información en dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Columna izquierda: Información Básica */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Información Básica</h2>
            <p><span className="font-semibold">Nombre:</span> {trabajador.nombre} {trabajador.apellido}</p>
            <p><span className="font-semibold">Email:</span> {trabajador.email}</p>
            <p><span className="font-semibold">Teléfono:</span> {trabajador.telefono || "No especificado"}</p>
            <p><span className="font-semibold">Fecha de Nacimiento:</span> {trabajador.fechaNacimiento || "No especificada"}</p>
            <p><span className="font-semibold">Estado:</span> {trabajador.estado ? "Activo" : "Inactivo"}</p>
          </div>

          {/* Columna derecha: Detalles del Trabajo */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Detalles del Trabajo</h2>
            <p><span className="font-semibold">Habilidades:</span> {trabajador.habilidades || "No especificadas"}</p>
            <p><span className="font-semibold">Calificaciones:</span> {trabajador.campo_experto || "No especificadas"}</p>
            <p><span className="font-semibold">Fecha de Contratación:</span> {trabajador.fecha_contratacion || "No especificada"}</p>
            <p><span className="font-semibold">Sueldo:</span> ${trabajador.sueldo || "No especificado"}</p>
          </div>
        </div>

        {/* Tabs */}
        <div>
          <div className="border-b mb-4">
            <nav className="flex space-x-4">
              <button
                onClick={() => setActiveTab("pagos")}
                className={`py-2 px-4 ${
                  activeTab === "pagos"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                Pagos
              </button>
              <button
                onClick={() => setActiveTab("actividades")}
                className={`py-2 px-4 ${
                  activeTab === "actividades"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                Actividades
              </button>
            </nav>
          </div>

          {/* Contenido de las pestañas */}
          {activeTab === "pagos" && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Historial de Pagos</h3>
              {pagos.length > 0 ? (
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Fecha</th>
                      <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Monto</th>
                      <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Método</th>
                      <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Periodo</th>
                      <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Detalle</th>
                      <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pagos.map((pago) => (
                      <tr key={pago.pago_id} className="hover:bg-gray-100 transition">
                        <td className="py-3 px-6 text-sm text-gray-700">{new Date(pago.fecha_pago).toLocaleDateString()}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">${pago.monto}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{pago.metodo_pago}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{pago.periodo}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{pago.detalles}</td>
                        <td className="py-3 px-6 text-sm text-yellow-600">Pendiente</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-gray-500">No hay pagos registrados.</p>
              )}
            </div>
          )}
          {activeTab === "actividades" && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Historial de Actividades</h3>
              <p className="text-gray-500">No hay actividades registradas.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetalleUsuario;
