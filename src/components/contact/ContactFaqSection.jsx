import React from "react";
import { X } from "lucide-react";

const faqs = [
  {
    question: "¿Cómo crear una cuenta?",
    answer:
      'Para crear una cuenta, descarga la aplicación y haz clic en "Registrarse". Puedes registrarte con tu correo electrónico o redes sociales. Sigue las instrucciones para completar tu perfil.',
  },
  {
    question: "¿Qué métodos de pago se aceptan?",
    answer:
      "Aceptamos varios métodos de pago, incluyendo tarjetas de crédito/débito y nuestra billetera interna. Asegúrate de que tus datos de pago estén actualizados en la configuración de tu perfil. Para más opciones, consulta la sección de pagos en la app.",
  },
  {
    question: "¿Cómo publicar un anuncio?",
    answer:
      'Para publicar un anuncio, ve a la sección "Publicar anuncio" en la app. Completa los datos requeridos, sube imágenes y envía tu anuncio. También puedes destacarlo para mayor visibilidad.',
  },
  {
    question: "¿Cómo contactar con el soporte?",
    answer:
      'Puedes contactar con el servicio de asistencia a través de la sección "Ayuda" de la app. También puedes usar el formulario de contacto de nuestra web. Responderemos en 24 horas.',
  },
  {
    question: "¿Están seguros mis datos?",
    answer:
      "Sí, priorizamos su seguridad. Todos los datos confidenciales están cifrados e implementamos autenticación en dos pasos para mayor protección. Su privacidad es nuestra prioridad.",
  },
];

export default function ContactFaqSection() {
  return (
    <div className="min-h-screen bg-gray-100 text-black px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Preguntas frecuentes</h2>
        <p className="text-gray-600 mb-8">
          A continuación se presentan algunas preguntas comunes para ayudarle
          con la solicitud.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-md shadow-sm p-4 relative"
            >
              <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                <X size={18} />
              </button>
              <h3 className="font-semibold text-lg mb-1">{faq.question}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
