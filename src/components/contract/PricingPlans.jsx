import React from "react";
import { Check } from "lucide-react";
import { GradientButton } from "./../button/Button";

const plans = [
  {
    title: "GRATIS",
    price: "0 USD",
    features: [
      "solo publicar 1 producto",
      "Soporte de 24h a 72h",
      "5% por venta para ayudar a que la aplicación funcione",
    ],
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
  },
  {
    title: "PLAN AVANZADO",
    price: "3 USD",
    features: [
      "Publicar hasta 10 productos",
      "Soporte de 12h a 24h",
      "Atención personalizada",
      "3% por venta",
    ],
  },
  {
    title: "PLAN NEGOCIO",
    price: "5 USD",
    features: [
      "Publicar hasta 25 productos",
      "Soporte 24/7",
      "Atención premium",
      "2.5% por venta",
    ],
  },
  {
    title: "PLAN PREMIUM",
    price: "10 USD",
    features: [
      "Productos ilimitados",
      "Soporte dedicado",
      "Traducción automática",
      "2% por venta",
    ],
  },
  {
    title: "PLAN EMPRESA",
    price: "20 USD",
    features: [
      "Equipo de gestión de cuenta",
      "Soporte inmediato",
      "1% por venta",
      "Integración API",
    ],
  },
  {
    title: "PLAN ILIMITADO",
    price: "50 USD",
    features: [
      "Todo ilimitado",
      "Soporte VIP",
      "0% comisión",
      "Consultoría estratégica mensual",
    ],
  },
];

export default function ContractPricingPlans() {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-20 text-center">
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-gray-700">
          Ofrecemos contratos P2P para la seguridad de ambos participantes con
          nuestra billetera. NUESTROS PLANES SE ADAPTAN A TODOS LOS CLIENTES,
          DESDE EL PLAN GRATUITO HASTA EL PLAN INICIAL MENSUAL PREMIUM
        </p>
      </div>

      {/* ✅ Only changed line below */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="flex flex-col border border-gray-200 rounded-xl shadow-md p-6 text-left relative h-full"
          >
            <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-blue-400"></div>
            <h3 className="text-sm text-pink-600 font-bold mb-2">
              {plan.title}
            </h3>
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              {plan.price}
            </p>
            <hr className="mb-4" />
            <ul className="space-y-2 text-sm text-gray-700 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="text-green-500 w-4 h-4 mt-1" />
                  {feature}
                </li>
              ))}
            </ul>
            <GradientButton className="w-full mt-6 py-2">
              Comenzar
            </GradientButton>
          </div>
        ))}
      </div>
      <p className="text-lg text-left pt-10 text-gray-700">
        Desbloquea el potencial de tu negocio. Colabora con nosotros para
        impulsar tu crecimiento y dar rienda suelta a tu imaginación. Nuestra
        plataforma integral te permite maximizar las ventas, optimizar las
        operaciones y aumentar tus ganancias. Con herramientas integradas para
        compras, ventas, publicidad y procesamiento seguro de pagos a través de
        nuestra billetera y contratos P2P, puedes concentrarte en lo que más
        importa: el crecimiento de tu negocio. Mantente a la vanguardia con
        nuestros planes de precios flexibles, sujetos a actualizaciones
        periódicas. Mantente informado y prospera con nosotros.
      </p>
    </section>
  );
}
