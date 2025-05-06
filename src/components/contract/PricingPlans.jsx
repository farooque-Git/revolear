import React from "react";

const pricingPlans = [
  {
    title: "GRATIS",
    price: "0 USD",
    features: [
      "solo publicar 1 producto",
      "Soporte de 24h a 72h",
      "5% por venta para ayudar a que la aplicación funcione",
    ],
    buttonLabel: "Comenzar",
    borderColor: "border-pink-300",
  },
  {
    title: "PLAN ESENCIAL",
    price: "1 USD",
    features: [
      "Publicar hasta 5 productos",
      "Soporte de 24h a 48h",
      "Múltiples idiomas",
      "4% por venta para ayudar a que la aplicación funcione",
    ],
    buttonLabel: "Comenzar",
    borderColor: "border-pink-300",
  },
  {
    title: "PLAN ESENCIAL",
    price: "1 USD",
    features: [
      "Publicar hasta 5 productos",
      "Soporte de 24h a 48h",
      "Múltiples idiomas",
      "4% por venta para ayudar a que la aplicación funcione",
    ],
    buttonLabel: "Comenzar",
    borderColor: "border-pink-300",
  },
  {
    title: "PLAN ESENCIAL",
    price: "1 USD",
    features: [
      "Publicar hasta 5 productos",
      "Soporte de 24h a 48h",
      "Múltiples idiomas",
      "4% por venta para ayudar a que la aplicación funcione",
    ],
    buttonLabel: "Comenzar",
    borderColor: "border-pink-300",
  },
  {
    title: "PLAN ESENCIAL",
    price: "1 USD",
    features: [
      "Publicar hasta 5 productos",
      "Soporte de 24h a 48h",
      "Múltiples idiomas",
      "4% por venta para ayudar a que la aplicación funcione",
    ],
    buttonLabel: "Comenzar",
    borderColor: "border-pink-300",
  },
  {
    title: "PLAN ESENCIAL",
    price: "1 USD",
    features: [
      "Publicar hasta 5 productos",
      "Soporte de 24h a 48h",
      "Múltiples idiomas",
      "4% por venta para ayudar a que la aplicación funcione",
    ],
    buttonLabel: "Comenzar",
    borderColor: "border-pink-300",
  },
];

const PricingPlans = () => {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-lg font-medium mb-2">
        Ofrecemos contratos P2P para la seguridad de ambos participantes con
        nuestra billetera.
      </h2>
      <h1 className="text-center text-xl font-bold mb-10">
        NUESTROS PLANES SE ADAPTAN A TODOS LOS CLIENTES, DESDE EL PLAN GRATUITO
        HASTA EL PLAN INICIAL MENSUAL PREMIUM
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl border ${plan.borderColor} p-6 shadow-md hover:shadow-lg transition-all`}
          >
            <h3 className="text-xl font-semibold text-center mb-2">
              {plan.title}
            </h3>
            <p className="text-2xl font-bold text-center mb-4">{plan.price}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-2">✔️</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-gradient-to-r from-pink-400 to-teal-300 text-white py-2 rounded-lg">
              {plan.buttonLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
