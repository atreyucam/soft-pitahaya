import React from "react";
import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido Principal */}
      <div className="flex-1 ml-72">
        {/* Navbar */}
        <DashboardNavbar />
        {/* Contenido */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
