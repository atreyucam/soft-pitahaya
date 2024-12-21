import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
    HiOutlineDownload,
    HiOutlineUserAdd,
    HiOutlineFilter,
} from "react-icons/hi";
import { AuthContext } from "../../context/AuthContext";

const Trabajadores = () => {
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext); // Obtener el token del contexto
    const [trabajadores, setTrabajadores] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrabajadores = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/usuarios/listarUsuarios`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${auth.token}`, // Token del usuario logueado
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Error al obtener la lista de trabajadores");
                }

                const data = await response.json();
                const sortedData = data.sort((a, b) => a.rol_id - b.rol_id);
                setTrabajadores(sortedData); // Actualiza el estado con los datos ordenados
            } catch (error) {
                console.error("Error:", error.message);
            } finally {
                setLoading(false); // Finaliza la carga
            }
        };

        fetchTrabajadores();
    }, [auth.token]);

    const handleDelete = async (usuarioId) => {
        if (usuarioId === auth.usuario_id) {
            alert("No puedes eliminar tu propia cuenta.");
            return;
        }

        const confirmDelete = window.confirm(
            "¿Estás seguro de que deseas eliminar este usuario?"
        );
        if (!confirmDelete) return;

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/usuarios/${usuarioId}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${auth.token}`, // Token del usuario logueado
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Error al eliminar el usuario.");
            }

            setTrabajadores((prev) =>
                prev.filter((trabajador) => trabajador.usuario_id !== usuarioId)
            );
            alert("Usuario eliminado correctamente.");
        } catch (error) {
            console.error("Error:", error.message);
            alert("Hubo un error al eliminar el usuario.");
        }
    };

    // Filtrar trabajadores por nombre o email
    const filteredTrabajadores = trabajadores.filter(
        (trabajador) =>
            `${trabajador.nombre} ${trabajador.apellido}`
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            trabajador.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto bg-white shadow rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-semibold text-gray-700">
                        Usuarios
                    </h1>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow transition">
                            <HiOutlineDownload className="w-5 h-5" />
                            Descargar
                        </button>
                        <button
                            onClick={() => navigate("/add-usuario")}
                            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition"
                        >
                            <HiOutlineUserAdd className="w-5 h-5" />
                            Añadir nuevo
                        </button>
                    </div>
                </div>

                <div className="mb-4 flex items-center gap-4">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow transition">
                        <HiOutlineFilter className="w-5 h-5" />
                        Filtrar
                    </button>
                </div>

                {loading ? (
                    <div className="text-center text-gray-500">
                        Cargando trabajadores...
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead className="bg-gray-100 border-b">
                                <tr>
                                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                                        Rol
                                    </th>
                                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                                        Nombre y Apellido
                                    </th>
                                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                                        Email
                                    </th>
                                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                                        Estado
                                    </th>
                                    <th className="py-3 px-6 text-center text-sm font-medium text-gray-600">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredTrabajadores.map((trabajador) => (
                                    <tr
                                        key={trabajador.usuario_id}
                                        className="hover:bg-gray-100 transition duration-150"
                                    >
                                        <td className="py-3 px-6 text-sm text-gray-700">
                                            {trabajador.rol_id === 1
                                                ? "Dueño"
                                                : trabajador.rol_id === 2
                                                ? "Técnico"
                                                : "Trabajador"}
                                        </td>
                                        <td className="py-3 px-6 text-sm text-gray-700">
                                            <button
                                                className="text-blue-500 hover:underline"
                                                onClick={() =>
                                                    navigate(
                                                        `/usuarios/${trabajador.usuario_id}`
                                                    )
                                                }
                                            >
                                                {trabajador.nombre}{" "}
                                                {trabajador.apellido}
                                            </button>
                                        </td>
                                        <td className="py-3 px-6 text-sm text-gray-700">
                                            {trabajador.email}
                                        </td>
                                        <td className="py-3 px-6 text-sm">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    trabajador.estado
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-red-100 text-red-800"
                                                }`}
                                            >
                                                {trabajador.estado
                                                    ? "Activo"
                                                    : "Inactivo"}
                                            </span>
                                        </td>
                                        <td className="py-3 px-6 text-center text-sm">
                                            <button
                                                className="text-blue-500 hover:underline mr-2"
                                                onClick={() =>
                                                    navigate(
                                                        `/edit-usuario/${trabajador.usuario_id}`
                                                    )
                                                }
                                            >
                                                Editar
                                            </button>
                                            <button
                                                className="text-red-500 hover:underline"
                                                onClick={() =>
                                                    handleDelete(
                                                        trabajador.usuario_id
                                                    )
                                                }
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Trabajadores;
