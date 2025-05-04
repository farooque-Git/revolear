import React from "react";
import inventory from "../../assets/feature/image.png";
import delivery from "../../assets/feature/image-1.png";
import system from "../../assets/feature/image-2.png";

const FeatureForthSec = () => {
  const cards = [
    {
      title: "Inventory Management",
      subtitle: "Gestión eficaz de inventarios simplificada",
      description: "Controle fácilmente sus productos y niveles de existencias",
      image: inventory, // Replace with your own if needed
    },
    {
      title: "Delivery Services",
      subtitle: "Gestión de envíos optimizada para una entrega rápida",
      description:
        "Gestione la logística de envíos sin esfuerzo con nuestras herramientas.",
      image: delivery,
    },
    {
      title: "Sistema de revisión",
      subtitle: "Construya con nuestro sistema de revisión",
      description: "Fomente los comentarios para mejorar sus servicios.",
      image: system,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-extrabold leading-snug text-gray-900 mb-4">
            Potentes herramientas para comerciantes y empresas
          </h2>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 text-gray-700 text-base leading-relaxed">
          Nuestra aplicación ofrece a los comerciantes sólidas funciones para
          agilizar sus operaciones. Con un control exhaustivo del inventario y
          una gestión eficaz de los envíos, las empresas pueden centrarse en el
          crecimiento. Además, nuestro sistema de opiniones y valoraciones
          fomentan la confianza y mejora la satisfacción del cliente.
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 text-center"
          >
            <img
              src={card.image}
              alt={card.title}
              className="mx-auto mb-4 object-contain"
            />
            <h3 className="text-sm font-semibold text-blue-600 mb-1">
              {card.title}
            </h3>
            <p className="font-bold text-gray-800 mb-1">{card.subtitle}</p>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureForthSec;
