import React from "react";
import { GradientButton } from "../button/Button";
import tick from "../../assets/tick.png";

const pricingCards = [
  {
    title: "GRATIS",
    price: "0 USD",
    includes: [
      "solo publicar 1 producto",
      "Soporte de 24h a 72h",
      "$0 que nos sirve para probar que la aplicación funcione",
    ],
    button: "Comenzar",
  },
  {
    title: "PLAN ESENCIAL",
    price: "1 USD",
    includes: [
      "Publicar hasta 5 productos",
      "Soporte de 24h a 48h",
      "Múltiple idioma",
      "$1 que nos sirve para probar que la aplicación funcione",
    ],
    button: "Comenzar",
  },
];

const pricingTiers = [
  { name: "ESENCIAL", price: "$1", desc: "Ideal para particulares" },
  { name: "IMPULSAR", price: "$2", desc: "Perfecto para equipo pequeño" },
  { name: "ESCALA", price: "$3", desc: "Lo mejor para grandes equipos" },
];

const features = [
  {
    category: "General",
    items: [
      "Nombre de usuario personalizado",
      "Acceso a la aplicación móvil",
      "Soporte técnico por correo electrónico",
    ],
  },
  {
    category: "Publicaciones",
    items: [
      "Cantidad de publicaciones",
      "Visibilidad en resultados de búsqueda",
    ],
  },
  {
    category: "Soporte",
    items: ["Soporte estándar", "Soporte prioritario"],
  },
];

const featureAccess = [
  ["\u2713", "\u2713", "\u2713"],
  ["1", "5", "Ilimitado"],
  ["\u2713", "\u2713", "\u2713"],
  ["\u2713", "\u2713", "\u2713"],
  ["\u2713", "-", "-"],
  ["-", "\u2713", "\u2713"],
];

const pricingData = [
  {
    category: "Categoría",
    features: [
      { label: "Número de usuarios", values: ["10", "25", "Sin límites"] },
      { label: "Posibilidad de publicar anuncios", values: [true, true, true] },
      { label: "Chat integrado", values: [true, true, true] },
      {
        label: "Creación de tiendas personalizadas",
        values: [false, true, true],
      },
      { label: "Acceso a la pasarela de pagos", values: [false, false, true] },
    ],
  },
  {
    category: "Categoría",
    features: [
      { label: "Análisis e informes", values: ["10", "25", "Sin límites"] },
      {
        label: "Opciones de publicidad específica",
        values: [false, true, true],
      },
      {
        label: "Integración en las redes sociales",
        values: [true, true, true],
      },
      {
        label: "Análisis de métricas en tiempo real",
        values: [false, true, true],
      },
      {
        label: "Campañas de marketing personalizables",
        values: [false, false, true],
      },
    ],
  },
  {
    category: "Categoría",
    features: [
      {
        label: "Acceso al servicio de atención al cliente",
        values: ["10", "25", "Sin límites"],
      },
      {
        label: "Servicios de asistencia prioritarios",
        values: [false, true, true],
      },
      { label: "Gestor de cuentas dedicado", values: [true, false, true] },
      {
        label: "Funciones de seguridad avanzadas",
        values: [false, true, true],
      },
      {
        label: "Integraciones personalizadas disponibles",
        values: [false, false, true],
      },
    ],
  },
];

const PricingSection = () => {
  return (
    <div className="px-4 py-8 max-w-6xl mx-auto text-center">
      {/* Top Cards */}
      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        {pricingCards.map((card, index) => (
          <div
            key={index}
            className="border rounded-lg shadow p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-2xl font-bold mb-4">{card.price}</p>
              <ul className="text-left space-y-2 mb-6">
                {card.includes.map((item, i) => (
                  <li key={i} className="text-sm flex">
                    <img src={tick} alt="tick" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <GradientButton className="bg-gradient-to-r from-pink-400 to-green-400 text-white py-2 rounded">
              {card.button}
            </GradientButton>
          </div>
        ))}
      </div>

      {/* Plan Table Heading */}
      <h2 className="text-2xl font-bold mb-2">Plan de precios</h2>
      <p className="text-sm text-gray-600 mb-8">
        Elije el plan adecuado a sus necesidades
      </p>

      {/* Tier Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
        {pricingTiers.map((tier, index) => (
          <div
            key={index}
            className="p-[2px] bg-gradient-to-r from-pink-400 to-green-400 rounded-lg w-full md:w-1/3"
          >
            <div className="bg-white rounded-lg px-4 py-6 h-full">
              <h4 className="text-lg font-semibold mb-1">{tier.name}</h4>
              <p className="text-xl font-bold mb-1">{tier.price}</p>
              <p className="text-sm text-gray-500 mb-3">{tier.desc}</p>
              <GradientButton className="text-white py-1.5 rounded text-sm">
                Comenzar
              </GradientButton>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Table */}
      {/* <div className="overflow-auto">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Categoría</th>
              {pricingTiers.map((tier, i) => (
                <th key={i} className="border px-4 py-2">
                  {tier.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.flatMap((group, i) =>
              group.items.map((item, j) => (
                <tr key={`${i}-${j}`}>
                  <td className="border px-4 py-2 text-left">
                    {j === 0 ? (
                      <span className="font-semibold">{group.category}</span>
                    ) : (
                      <span className="invisible">{group.category}</span>
                    )}
                    <div>{item}</div>
                  </td>
                  {featureAccess[i * 2 + j]?.map((val, k) => (
                    <td key={k} className="border px-4 py-2 text-center">
                      {val}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div> */}
      <div className="w-full overflow-x-auto">
        {pricingData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left px-4 py-2 border-b">
                    {section.category}
                  </th>
                  <th className="px-4 py-2 border-b">Esencial</th>
                  <th className="px-4 py-2 border-b">Impulsar</th>
                  <th className="px-4 py-2 border-b">Escala</th>
                </tr>
              </thead>
              <tbody>
                {section.features.map((feature, i) => (
                  <tr key={i} className="border-t">
                    <td className="text-sm px-4 py-2 font-medium text-gray-800 text-left">
                      {feature.label}
                    </td>
                    {feature.values.map((val, idx) => (
                      <td
                        key={idx}
                        className="text-center px-4 py-2 text-sm text-gray-700"
                      >
                        {val === true ? "✓" : val === false ? "" : val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
