import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Juan Nadie",
    role: "Consejero Delegado, Tech Innovations",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Las opciones de precios nos facilitaron escalar nuestras operaciones de forma eficiente.",
  },
  {
    name: "Jane Smith",
    role: "Director, Creative Co.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Los planes de precios de REVOLEAR® son increíblemente flexibles y fáciles de usar.",
  },
  {
    name: "Carlos Pérez",
    role: "CTO, Soluciones XYZ",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "Una solución completa que ha transformado nuestro enfoque comercial.",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Testimonios de clientes</h2>
        <p className="text-gray-600 mb-8">
          Nuestros planes de precios han transformado nuestro negocio.
        </p>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500">
            {[0, 1].map((offset) => {
              const index = (current + offset) % testimonials.length;
              const t = testimonials[index];

              return (
                <div
                  key={index}
                  className="bg-white p-6 border rounded shadow-sm"
                >
                  <div className="flex items-center gap-1 mb-4 text-yellow-500">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} size={18} />
                      ))}
                  </div>
                  <p className="italic text-lg mb-4">“{t.quote}”</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-gray-600">{t.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              onClick={prevSlide}
              className="p-2 border rounded-full hover:bg-gray-100"
            >
              <FiArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 border rounded-full hover:bg-gray-100"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
