import React from "react";
import image from "../../assets/blog/image.png";
import image1 from "../../assets/blog/image-2.png";
import image2 from "../../assets/blog/image-1.png";
import image3 from "../../assets/blog/image-3.png";
import image4 from "../../assets/blog/image-5.png";
import image5 from "../../assets/blog/image-4.png";
import { GradientOutlineButton } from "../button/Button";

const blogCards = [
  {
    title: "Maximiza tu experiencia con REVOLEAR®",
    category: "Noticias",
    duration: "5 min de lectura",
    image: image,
    description: "Aprende a sacar el máximo provecho del sistema REVOLEAR®.",
  },
  {
    title: "Mantente actualizado con REVOLEAR®",
    category: "Consejos",
    duration: "5 min de lectura",
    image: image1,
    description:
      "Descubre las últimas noticias y actualizaciones del sistema REVOLEAR®.",
  },
  {
    title: "Mejora tus habilidades de venta",
    category: "Subidas",
    duration: "5 min de lectura",
    image: image2,
    description:
      "Descubre cómo mejorar tus habilidades de venta con REVOLEAR®.",
  },
  {
    title: "Promociona tu negocio de manera efectiva",
    category: "Habilidades",
    duration: "5 min de lectura",
    image: image3,
    description:
      "Explora consejos sobre cómo promocionar tu negocio con REVOLEAR®.",
  },
  {
    title: "Entendiendo las características de REVOLEAR®",
    category: "Producto",
    duration: "5 min de lectura",
    image: image4,
    description:
      "Aprende sobre las principales funciones y beneficios del sistema.",
  },
  {
    title: "Seguridad en REVOLEAR®",
    category: "Características",
    duration: "5 min de lectura",
    image: image5,
    description: "Descubre cómo REVOLEAR® protege tus datos y transacciones.",
  },
];

export default function BlogCard() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Explora el Blog de REVOLEAR®
        </h1>
        <p className="text-base text-gray-600 mt-2">
          Descubre noticias, consejos y actualizaciones sobre REVOLEAR®
        </p>
        <div className="flex justify-center mt-6">
          <div className="flex gap-2 bg-gray-100  shadow-inner">
            {["Ver todo", "Esencial", "Plata", "Oro", "Diamante"].map(
              (filtro) => {
                const isActive = filtro === "Ver todo";

                return isActive ? (
                  <div
                    key={filtro}
                    className="p-[2px] bg-gradient-to-r from-pink-400 to-teal-500"
                  >
                    <button className="px-4 py-1.5  bg-white text-sm font-medium text-black hover:bg-gray-100">
                      {filtro}
                    </button>
                  </div>
                ) : (
                  <button
                    key={filtro}
                    className="px-4 bg-gray-200 text-sm font-medium text-black hover:bg-gray-300"
                  >
                    {filtro}
                  </button>
                );
              }
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-[410px] h-[296px] object-cover"
            />
            <div className="p-5">
              <p className="text-xs text-gray-500">
                {card.category} • {card.duration}
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{card.description}</p>
              <button className="text-blue-600 text-sm mt-3 hover:underline">
                Leer más ›
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
