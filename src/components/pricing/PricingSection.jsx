import React from "react";
import { GradientButton } from "../button/Button";
import PricingPlans from "./PricingPlans";

const pricingTiers = [
  { name: "ESENCIAL", price: "$1", desc: "Ideal para particulares" },
  { name: "IMPULSAR", price: "$2", desc: "Perfecto para equipo pequeño" },
  { name: "ESCALA", price: "$3", desc: "Lo mejor para grandes equipos" },
];

const pricingData = [
  {
    category: "Usuarios y Publicaciones",
    features: [
      { label: "Número de usuarios", values: ["10", "25", "Sin límites"] },
      { label: "Publicar anuncios", values: [true, true, true] },
      { label: "Chat integrado", values: [true, true, true] },
      {
        label: "Tiendas personalizadas",
        values: [false, true, true],
      },
      { label: "Acceso a pagos", values: [false, false, true] },
    ],
  },
  {
    category: "Marketing y Analítica",
    features: [
      { label: "Análisis e informes", values: ["10", "25", "Sin límites"] },
      {
        label: "Publicidad específica",
        values: [false, true, true],
      },
      {
        label: "Integración redes sociales",
        values: [true, true, true],
      },
      {
        label: "Métricas en tiempo real",
        values: [false, true, true],
      },
      {
        label: "Campañas personalizables",
        values: [false, false, true],
      },
    ],
  },
  {
    category: "Soporte y Seguridad",
    features: [
      {
        label: "Atención al cliente",
        values: ["10", "25", "Sin límites"],
      },
      {
        label: "Soporte prioritario",
        values: [false, true, true],
      },
      { label: "Gestor dedicado", values: [true, false, true] },
      {
        label: "Seguridad avanzada",
        values: [false, true, true],
      },
      {
        label: "Integraciones personalizadas",
        values: [false, false, true],
      },
    ],
  },
];

const PricingSection = () => {
  return (
    <div className="px-4 py-8 max-w-6xl mx-auto text-center">
      {/* Optional Plans Highlight Section */}
      <PricingPlans />

      {/* Tier Cards */}
      <h2 className="text-2xl font-bold mb-2">Plan de precios</h2>
      <p className="text-sm text-gray-600 mb-8">
        Elije el plan adecuado a sus necesidades
      </p>
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

      {/* Feature Comparison Table */}
      <div className="w-full overflow-x-auto">
        {pricingData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <table className="min-w-full border border-gray-300 text-sm text-left">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th scope="col" className="px-4 py-2 border-b">
                    {section.category}
                  </th>
                  {pricingTiers.map((tier, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="px-4 py-2 border-b text-center"
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.features.map((feature, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2 font-medium text-gray-800">
                      {feature.label}
                    </td>
                    {feature.values.map((val, idx) => (
                      <td
                        key={idx}
                        className="text-center px-4 py-2 text-gray-700"
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
