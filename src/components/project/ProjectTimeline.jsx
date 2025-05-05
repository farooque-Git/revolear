import React from "react";
import { GradientButton } from "../button/Button";

const timeline = [
  {
    year: "2023",
    title: "Fase Uno Completa",
    description:
      "La primera fase del proyecto se ha completado con éxito. Ahora estamos pasando a la siguiente etapa.",
    tags: ["Actualizar"],
  },
  {
    year: "2024",
    title: "Comienza la Fase Dos",
    description:
      "Estamos entrando en el desarrollo detallado de la Fase Dos. Esta fase se centrará en la optimización y pruebas del sistema.",
    tags: ["Explorar", "Aprender"],
  },
  {
    year: "2025",
    title: "Lanzamiento de la Fase Final",
    description:
      "La fase final del proyecto será lanzada. Esto marcará la entrada a nuevos mercados y funcionalidades.",
    tags: ["Utilizar", "Lanzamiento"],
  },
  {
    year: "2026",
    title: "Celebración de la Finalización del Proyecto",
    description:
      "Con la finalización del proyecto, se iniciará la etapa de post-lanzamiento y mejora continua.",
    tags: ["Celebrar", "Participar"],
  },
];

export default function ProjectTimeline() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-6 md:p-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Descripción General del Cronograma del Proyecto y Hitos
          </h2>
          <p className="text-gray-600 mt-4">
            Esta sección representa visualmente el cronograma del proyecto.
            Destaca hitos clave y progresos.
          </p>
          <div className="mt-6 space-x-4">
            <GradientButton className=" rounded-sm ">Ver</GradientButton>
            <button className="bg-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-300 transition">
              Detalles
            </button>
          </div>
        </div>

        {/* Right Column with Timeline */}
        <div className="md:col-span-2 relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-pink-500"></div>

          <div className="space-y-12 relative">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative flex items-start">
                {/* Centered Dot on Timeline */}
                <div className="absolute left-3.5 top-2 w-3 h-3 bg-cyan-500 rounded-full border-2 border-white z-10"></div>

                {/* Content */}
                <div className="ml-8">
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.year}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-700 mt-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="bg-gray-200 text-gray-700 px-3 py-1 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
