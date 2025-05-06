import React from "react";
import post1 from "../../assets/post/image.png";
import post2 from "../../assets/post/image-1.png";
import post3 from "../../assets/post/image-2.png";
import post4 from "../../assets/post/image-3.png";
import post5 from "../../assets/post/image-4.png";
import post6 from "../../assets/post/image-5.png";
import { GradientOutlineButton } from "./../button/Button";

const topCards = [
  {
    title: "Métricas completas para sus campañas",
    description: "Monitorea cada aspecto del éxito de una campaña.",
    image: post1,
  },
  {
    title: "Seguimiento del rendimiento en tiempo real",
    description: "Manténgase actualizado con métricas y análisis en vivo.",
    image: post2,
  },
  {
    title: "Información sobre participación al alcance de tu mano",
    description:
      "Comprenda las interacciones de los usuarios para perfeccionar su enfoque.",
    image: post3,
  },
];

const bottomCards = [
  {
    title: "Manténgase actualizado sobre sus listados y participación",
    description:
      "Realice un seguimiento del rendimiento de sus publicaciones y realice los ajustes necesarios.",
    image: post4,
    button: "Vista",
  },
  {
    title: "Optimice sus listados para una mejor visibilidad y ventas",
    description:
      "Mejore sus publicaciones con promociones especiales para llegar a más audiencias potenciales.",
    image: post5,
    button: "Promover",
  },
  {
    title: "Analice las métricas de participación para mejorar sus estrategias",
    description:
      "Tome decisiones informadas y potencie la interacción y el rendimiento.",
    image: post6,
    button: "Analizar",
  },
];

export default function CampaignDashboard() {
  return (
    <section className="bg-gray-100 px-4 md:px-20 py-16 text-black space-y-16">
      {/* First Section */}
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-6">
          {topCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <GradientOutlineButton className="rounded">
            Más información
          </GradientOutlineButton>
          <button className="">Vista</button>
        </div>
      </div>

      {/* Second Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">
          Gestiona tus publicaciones activas e inactivas fácilmente
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {bottomCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-4 flex flex-col justify-between"
            >
              <div>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{card.description}</p>
              </div>
              <button className="mt-auto border border-gray-400 px-4 py-2 rounded hover:bg-gray-200 text-sm w-fit">
                {card.button} <span className="ml-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
