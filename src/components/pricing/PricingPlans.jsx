import React from "react";
import tick from "../../assets/tick.png";
import logo from "../../assets/logo.png";
import { GradientButton } from "../button/Button";

const pricingCards = [
  {
    title: "GRATIS",
    price: "0 USD",
    includes: [
      "solo publicar 1 producto",
      "Soporte de 24h a 72h",
      "5% por venta para ayudar a que la aplicación funcione",
    ],
    gradient: "from-pink-300 to-teal-300",
    border: "border-pink-300",
  },
  {
    title: "PLAN ESENCIAL",
    price: "1 USD",
    includes: [
      "Publicar hasta 5 productos",
      "Soporte de 24h a 48h",
      "Múltiples idiomas",
      "4% por venta para ayudar a que la aplicación funcione",
    ],
    gradient: "from-pink-300 to-green-300",
    border: "border-pink-300",
  },
];

const PricingPlans = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 text-gray-900 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Planes de precios</h2>
        <p className="text-sm text-gray-600 mt-1">
          Elige un plan que se adapte perfectamente a tus necesidades.
        </p>

        <div className="grid sm:grid-cols-2 gap-20 mt-12">
          {pricingCards.map((card, index) => (
            <div
              key={index}
              className={`border ${card.border} rounded-xl shadow p-6 relative flex flex-col justify-between bg-white`}
            >
              {/* Logo at top-right */}
              <div className="absolute top-4 right-4">
                <img src={logo} alt="Logo" className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-md font-semibold">{card.title}</h3>
                <p className="text-2xl font-bold mb-4">{card.price}</p>
                <hr className="my-2" />
                <p className="text-sm font-medium mb-3 text-left">Incluye:</p>
                <ul className="text-left space-y-2 mb-6">
                  {card.includes.map((item, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <img src={tick} alt="tick" className="w-4 h-4 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <GradientButton
                className={`w-full py-2 rounded-md bg-gradient-to-r ${card.gradient} text-white font-semibold`}
              >
                Comenzar
              </GradientButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
