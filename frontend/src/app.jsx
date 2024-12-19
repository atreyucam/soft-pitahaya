import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import AuthProvider from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Trabajadores from "./pages/Trabajadores";
import AddTrabajador from "./pages/AddTrabajador";
import TareasAgronomicas from "./pages/TareasAgronomicas";
import Opcion3 from "./pages/Opcion3";
import Opcion4 from "./pages/Opcion4";
import PrivateRoute from "./components/PrivateRoute"; // Nuevo para rutas protegidas



const App = () => {
  return (
    <AuthProvider>
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
                  <Route path="/trabajadores" element={<Trabajadores />} />
                  <Route path="/add-trabajador" element={<AddTrabajador />} />
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
    </AuthProvider>
  );
};

export default App;