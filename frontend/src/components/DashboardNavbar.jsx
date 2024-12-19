import React, { useContext } from "react";
import { Cog6ToothIcon, BellIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../context/AuthContext";

const DashboardNavbar = () => {
  const { auth } = useContext(AuthContext);

  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow">
      <div className="text-lg font-bold">
        Dashboard
        {auth.user && (
          <span className="ml-4 text-gray-500">
            Bienvenido, {auth.user.nombre}
          </span>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <button>
          <BellIcon className="h-6 w-6 text-gray-600" />
        </button>
        <button>
          <Cog6ToothIcon className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
