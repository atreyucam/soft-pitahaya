import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { NotificationProvider } from "./components/Notification";

import Layout from "./components/Layout";
import AuthProvider from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Usuarios from "./pages/usuarios/Usuarios";
import AddUsuarios from "./pages/usuarios/AddUsuario";
import DetalleUsuario from "./pages/usuarios/DetalleUsuario";
import TareasAgronomicas from "./pages/tareasAgronomicas/TareasAgronomicas";
import Opcion3 from "./pages/Opcion3";
import Opcion4 from "./pages/Opcion4";
import PrivateRoute from "./components/PrivateRoute"; // Nuevo para rutas protegidas



const App = () => {
  return (
    <AuthProvider>
      <NotificationProvider>
      <Router>
        <Routes>
          {/* Ruta para Login */}
          <Route path="/" element={<Login />} />

          {/* Rutas protegidas */}
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <Layout>
                  <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/usuarios" element={<Usuarios />} />
                  <Route path="/add-usuario" element={<AddUsuarios />} />
                  <Route path="/usuarios/:id" element={<DetalleUsuario />} />

                  <Route path="/tareas-agronomicas" element={<TareasAgronomicas />} />
                  <Route path="/opcion3" element={<Opcion3 />} />
                  <Route path="/opcion4" element={<Opcion4 />} />
                  <Route path="*" element={<Navigate to="/home" />} />
                  </Routes>
                </Layout>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </NotificationProvider>
    </AuthProvider>
  );
};

export default App;