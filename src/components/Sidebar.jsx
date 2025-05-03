import React from "react";
import {
  FiHome,
  FiSettings,
  FiEdit,
  FiTag,
  FiFolder,
  FiFileText,
  FiInfo,
  FiX, // Close icon
} from "react-icons/fi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Sidebar = ({ onClose }) => {
  const sidebarSections = [
    {
      items: [
        { icon: <FiHome />, label: "Página de inicio", to: "/" },
        { icon: <FiSettings />, label: "Características", to: "/features" },
        {
          icon: <FiEdit />,
          label: "Blog",
          subLabel: "Publicación de blog",
          to: "/blog",
        },
        { icon: <FiTag />, label: "Productos", to: "/products" },
        { icon: <FiFolder />, label: "Precios", to: "/pricing" },
        { icon: <FiFileText />, label: "Proyectos", to: "/projects" },
        { icon: <FiFileText />, label: "Mis publicaciones", to: "/posts" },
        { icon: <FiInfo />, label: "Sobre nosotros", to: "/about" },
      ],
    },
    {
      items: [
        { label: "Notificaciones", to: "/notifications" },
        { label: "Contacta con nosotros", to: "/contact" },
        { label: "Perfil y configuración", to: "/profile" },
        { label: "Contratos P2P", to: "/contracts" },
        { label: "Cerrar sesión", isBold: true, to: "/logout" },
      ],
    },
  ];

  return (
    <div className="w-72 bg-white h-screen shadow-md px-6 py-4 absolute right-0 top-0 z-50">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Revolear" className="h-8 w-8" />
          <span className="font-semibold text-lg">Revolear</span>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-black">
          <FiX className="text-2xl" />
        </button>
      </div>

      {sidebarSections.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className={`${sectionIndex !== 0 ? "mt-4 border-t pt-4" : ""}`}
        >
          <ul className="space-y-4">
            {section.items.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.to || "#"}
                  className="flex items-center gap-3 text-sm cursor-pointer hover:text-black text-gray-700"
                >
                  {item.icon && <span className="text-lg">{item.icon}</span>}
                  <span className={`${item.isBold ? "font-bold" : ""}`}>
                    {item.label}
                  </span>
                  {item.subLabel && (
                    <span className="ml-auto text-xs bg-white border px-2 py-1 rounded shadow">
                      {item.subLabel}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
