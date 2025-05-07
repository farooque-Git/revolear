import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { GradientButton, GradientOutlineButton } from "../button/Button";

const faqs = [
  {
    question: "¿Cómo actualizar el perfil?",
    answer:
      "Para actualizar tu perfil, ve a la sección Perfil y Configuración. Aquí puedes editar tu información personal como tu nombre, correo electrónico y foto de perfil. Guarda los cambios antes de salir.",
  },
  {
    question: "¿Cómo cambiar la contraseña?",
    answer:
      "Para cambiar tu contraseña, ve a la página Perfil y Configuración. Haz clic en 'Cambiar contraseña' y sigue las instrucciones para ingresar tu contraseña actual y establecer una nueva.",
  },
  {
    question: "¿Qué son las configuraciones de privacidad?",
    answer:
      "La configuración de privacidad te permite controlar quién puede ver tu información y publicaciones. Puedes ajustarla en la sección Perfil y Configuración.",
  },
  {
    question: "¿Cómo gestionar las notificaciones?",
    answer:
      "Para administrar las notificaciones, ve a la sección Notificaciones en Perfil y Configuración. Ahí puedes personalizar qué alertas recibes y cómo.",
  },
  {
    question: "¿Cómo eliminar cuenta?",
    answer:
      "Para eliminar tu cuenta, ve a la sección Perfil y Configuración. Selecciona 'Eliminar cuenta' y sigue las instrucciones.",
  },
];

export function FaqAndSecurity() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-white px-4 md:px-8 lg:px-16 xl:px-24 py-12 space-y-16 text-gray-900">
      {/* FAQ Section */}
      <section className="space-y-8 max-w-4xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
          <p className="text-sm text-gray-600 mt-2">
            A continuación encontrarás algunas preguntas comunes sobre la
            gestión de perfiles y configuraciones de tu cuenta.
          </p>
        </div>
        <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="inline-flex items-center justify-center w-8 h-8 border-gray-300">
                  {openIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-gray-700" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-700" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className=" space-y-4 px-6">
        <h3 className="text-lg font-semibold">¿Aún tienes preguntas?</h3>
        <p className="text-sm text-gray-600">¡Estamos aquí para ayudarte!</p>
        <GradientOutlineButton>Contacto</GradientOutlineButton>
      </section>

      {/* Footer Section */}
      {/* <section className=" py-8 px-6 rounded-lg space-y-4 mx-auto">
        <h3 className="text-xl font-semibold">
          Asegure la configuración de su cuenta
        </h3>
        <p className="text-sm text-gray-600">
          No olvides guardar los cambios por seguridad.
        </p>
        <div className="flex  gap-4">
          <GradientButton>Ahorrar</GradientButton>
          <GradientOutlineButton>Verificar</GradientOutlineButton>
        </div>
      </section> */}
    </div>
  );
}
export function FaqAndSecurityFooter() {
  return (
    <section className=" py-8 px-6 rounded-lg space-y-4 mx-auto">
      <h3 className="text-xl font-semibold">
        Asegure la configuración de su cuenta
      </h3>
      <p className="text-sm text-gray-600">
        No olvides guardar los cambios por seguridad.
      </p>
      <div className="flex  gap-4">
        <GradientButton>Ahorrar</GradientButton>
        <GradientOutlineButton>Verificar</GradientOutlineButton>
      </div>
    </section>
  );
}
