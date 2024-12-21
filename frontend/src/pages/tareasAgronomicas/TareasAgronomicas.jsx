import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const TareasAgronomicas = () => {
  const [selectedLote, setSelectedLote] = useState("Todos los lotes");
  const lotes = ["Todos los lotes", "Lote 1", "Lote 2", "Lote 3", "Lote 4"];

  const proyectos = [
    { nombre: "Lote 1", progreso: 80, descripcion: "Actividades en el lote 1." },
    { nombre: "Lote 2", progreso: 45, descripcion: "Tareas pendientes en el lote 2." },
    { nombre: "Lote 3", progreso: 21, descripcion: "Progreso de poda en el lote 3." },
    { nombre: "Lote 4", progreso: 87, descripcion: "Labores en el lote 4." },
  ];

  const proyectosFiltrados =
    selectedLote === "Todos los lotes"
      ? proyectos
      : proyectos.filter((proyecto) => proyecto.nombre === selectedLote);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Menú desplegable */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Tareas Agronómicas</h1>
          <div className="relative">
            <button
              className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg shadow"
              onClick={() =>
                document
                  .getElementById("dropdown-menu")
                  .classList.toggle("hidden")
              }
            >
              {selectedLote} <HiChevronDown />
            </button>
            <ul
              id="dropdown-menu"
              className="hidden absolute mt-2 bg-white shadow rounded-lg w-full z-10"
            >
              {lotes.map((lote, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedLote(lote);
                    document
                      .getElementById("dropdown-menu")
                      .classList.add("hidden");
                  }}
                >
                  {lote}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sección de proyectos */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {selectedLote === "Todos los lotes"
              ? "Todos los lotes"
              : `Progreso en ${selectedLote}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectosFiltrados.map((proyecto, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">{proyecto.nombre}</h3>
                  <span className="text-yellow-500">★</span>
                </div>
                <p className="text-sm text-gray-600 my-2">
                  {proyecto.descripcion}
                </p>
                <div className="relative w-full h-2 bg-gray-200 rounded-lg">
                  <div
                    className="absolute top-0 left-0 h-2 bg-blue-500 rounded-lg"
                    style={{ width: `${proyecto.progreso}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  Progreso: {proyecto.progreso}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TareasAgronomicas;
