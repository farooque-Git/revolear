import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Emprendedor, Startup Co.",
    quote: "¡REVOLEAR® ha transformado mi forma de comprar y vender!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    role: "Gerente, Corporación Tecnológica",
    quote: "¡La aplicación es fácil de usar y eficiente!",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function TestimonialContactSection() {
  return (
    <div
      className="bg-gray-100 px-32
     py-12 text-black"
    >
      {/* Contact Prompt */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold">¿Aún tienes preguntas?</h2>
        <p className="text-sm mb-4">¡Estamos aquí para ayudarte!</p>
        <button className="bg-gradient-to-r from-pink-300 to-green-300 text-white px-4 py-2 rounded">
          Contacto
        </button>
      </div>

      <hr className="border-gray-400 my-12" />

      {/* Testimonials */}
      <div>
        <h2 className="text-3xl font-bold mb-2">Testimonios de clientes</h2>
        <p className="text-gray-700 mb-10">
          ¡Escucha lo que nuestros usuarios tienen que decir!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="black" stroke="black" />
                ))}
              </div>
              <p className="font-semibold mb-4">“{t.quote}”</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-gray-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
