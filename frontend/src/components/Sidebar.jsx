import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaShoppingCart,
  FaProjectDiagram,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const sections = [
    {
      title: "DASHBOARD",
      items: [
        { to: "/home", label: "Home", icon: <FaShoppingCart /> },
        { to: "/trabajadores", label: "Trabajadores", icon: <FaProjectDiagram /> },
        {
          label: "Tareas Agronómicas",
          icon: <FaProjectDiagram />,
          isDropdown: true,
          dropdownItems: [
            { to: "/tareas-agronomicas", label: "Todos los Lotes" },
            { to: "/lote1", label: "Lote 1" },
            { to: "/lote2", label: "Lote 2" },
            { to: "/lote3", label: "Lote 3" },
            { to: "/lote4", label: "Lote 4" },
          ],
        },
        { to: "/opcion3", label: "Opción 3", icon: <FaChartLine /> },
        { to: "/opcion4", label: "Opción 4", icon: <FaRocket /> },
      ],
    },
  ];

  return (
    <aside className="bg-white w-72 h-screen shadow-lg fixed top-0 left-0 flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center space-x-3 border-b">
        <div className="bg-blue-500 text-white rounded-full p-2">
          <FaRocket size={24} />
        </div>
        <span className="text-xl font-bold">Soft-Pitahaya</span>
      </div>

      {/* Sections */}
      <div className="flex-grow overflow-y-auto p-4">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-6">
            {/* Section Title */}
            <div className="text-gray-500 text-sm font-bold mb-2">
              {section.title}
            </div>
            <ul className="space-y-2">
              {section.items.map((item, idx) => {
                if (item.isDropdown) {
                  return (
                    <li key={idx}>
                      {/* Dropdown Button */}
                      <button
                        className="flex items-center justify-between w-full p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                        onClick={() => toggleSection(item.label)}
                      >
                        <div className="flex items-center space-x-3">
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                        {openSections[item.label] ? (
                          <MdKeyboardArrowDown />
                        ) : (
                          <MdKeyboardArrowRight />
                        )}
                      </button>
                      {/* Dropdown Items */}
                      {openSections[item.label] && (
                        <ul className="ml-6 mt-2 space-y-2">
                          {item.dropdownItems.map((dropdownItem, idx) => (
                            <li key={idx}>
                              <NavLink
                                to={dropdownItem.to}
                                className={({ isActive }) =>
                                  `flex items-center space-x-2 p-2 rounded-lg text-sm ${
                                    isActive
                                      ? "text-blue-600"
                                      : "text-gray-600 hover:bg-gray-100"
                                  }`
                                }
                              >
                                <span>{dropdownItem.label}</span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={idx}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 p-2 rounded-lg ${
                          isActive
                            ? "bg-blue-500 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
