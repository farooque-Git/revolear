import React from "react";
import bgImage from "../../assets/faqpricing.png"; // Replace with your image path
import { FiX } from "react-icons/fi";
import { GradientButton, GradientOutlineButton } from "../button/Button";

const faqs = [
  {
    question: "¿Cuáles son los planes de precios?",
    answer:
      "Nuestros planes de precios están diseñados para satisfacer las distintas necesidades de los usuarios. Ofrecemos opciones flexibles que se adaptan tanto a usuarios ocasionales como a comerciantes.",
  },
  {
    question: "¿Qué formas de pago existen?",
    answer:
      "Aceptamos múltiples métodos de pago para su comodidad. Las opciones incluyen tarjetas de crédito, métodos digitales y transferencias bancarias.",
  },
  {
    question: "¿Cómo se gestiona la facturación?",
    answer:
      "La facturación es sencilla y transparente. Recibirás facturas detalladas de todas las transacciones. Además, puedes gestionar tus preferencias de facturación desde tu cuenta.",
  },
  {
    question: "¿Hay gastos ocultos?",
    answer:
      "Ofrecemos una estructura de precios clara, sin tarifas ocultas. Todas las tarifas están claramente indicadas.",
  },
  {
    question: "¿Cómo puedo cancelar?",
    answer:
      "Puede cancelar su suscripción en cualquier momento desde la configuración de su cuenta. No se aplican tarifas de cancelación.",
  },
];

const FaqSection = () => {
  return (
    <div className="w-full">
      {/* ✅ Top Hero Section with Background Image */}
      <div
        className="w-full h-[350px] md:h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="bg-black/40 w-full h-full flex items-center">
          <div className="text-white px-6 md:px-20 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Libre su potencial hoy mismo
            </h2>
            <p className="text-md md:text-lg mb-6">
              Únase a REVOLEAR® y dé un siguiente paso en su experiencia de
              compra y venta. Elija un plan que se ajuste a sus necesidades y
              eleve su productividad ahora.
            </p>
            <div className="flex gap-4">
              <GradientButton className="rounded-none">
                Inscribirse
              </GradientButton>
              <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
                Más información
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ FAQ Content Section */}
      <div className="flex flex-col md:flex-row gap-8 p-6 md:p-16 bg-white">
        {/* Left Side - Heading and description */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Preguntas frecuentes</h3>
          <p className="text-gray-600 mb-6 max-w-md text-sm">
            Encuentre respuestas a sus preguntas sobre nuestros planes de
            precios, opciones de pago y procesos de facturación.
          </p>
          <button className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 text-sm">
            Contact
          </button>
        </div>

        {/* Right Side - FAQ mapped list */}
        <div className="w-full md:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md p-4 shadow-sm bg-white"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-sm mb-1">{faq.question}</p>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
                <FiX className="text-gray-500 mt-1 text-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
