import React from "react";

import mis from "../assets/footer/mis.png";
import ajustes from "../assets/footer/ajustes.png";
import hogar from "../assets/footer/hogar.png";
import prefil from "../assets/footer/prefil.png";
import agregar from "../assets/footer/agregar.png";

const footerItems = [
  { src: mis, label: "Mis publicaciones" },
  { src: agregar, label: "Agregar publicación" },
  { src: hogar, label: "Hogar", active: true },
  { src: prefil, label: "Perfil" },
  { src: ajustes, label: "Ajustes" },
];

const Footer = () => {
  return (
    <div className="w-full border-t border-gray-300 bg-gray-100 text-sm fixed bottom-0 left-0 z-50">
      <div className="flex justify-around items-center py-2 px-2 sm:px-4 md:px-8">
        {footerItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center flex-1 min-w-0 ${
              item.active ? "text-blue-600" : "text-gray-700"
            }`}
          >
            <img src={item.src} alt={item.label} className="w-6 h-6 mb-1" />
            <span className="text-[11px] sm:text-xs md:text-sm text-center truncate w-full">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
