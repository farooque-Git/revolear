import React from "react";
import rocket from "../../assets/post3.png";

const infoCards = [
  {
    title: "Notificaciones en tiempo real para sus transacciones",
    description:
      "Reciba alertas instantáneas para cada actualización de contrato.",
  },
  {
    title: "Gestión de transacciones segura y eficiente",
    description: "Gestione sus contratos con facilidad y confianza.",
  },
  {
    title: "Realice un seguimiento de su progreso con información detallada",
    description:
      "Analice el historial de transacciones para tomar mejores decisiones.",
  },
];

export default function P2PTransactionsSection() {
  return (
    <section className="text-black">
      {/* Section 1 - Header & Content Left-Aligned */}
      <div className="bg-white px-4 md:px-20 pt-16 pb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Manténgase informado sobre sus transacciones P2P
        </h2>
        <p className="text-gray-700 max-w-xl">
          Manténgase al día con sus contratos P2P con actualizaciones en tiempo
          real. Nuestra plataforma le garantiza que nunca se perderá ninguna
          transacción.
        </p>
      </div>

      {/* Section 2 - Info Cards in Gray with Button Below */}
      <div className="bg-gray-100 px-4 md:px-20 py-12 space-y-10">
        <div className="grid md:grid-cols-3 gap-6">
          {infoCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <button className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-200 text-sm">
            Más información
          </button>
          <button className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-200 text-sm">
            Suscribirse
          </button>
        </div>
      </div>

      {/* Section 3 - Centered Testimonial */}
      <div className="bg-white text-center px-4 md:px-20 py-16 space-y-6">
        <p className="text-lg font-semibold max-w-2xl mx-auto">
          “REVOLEAR® ha transformado mi forma de comprar y vender productos.
          ¡La interfaz intuitiva y las potentes funciones hacen que cada
          transacción sea fluida y agradable!”
        </p>
        <div className="flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Jane Doe"
            className="w-10 h-10 rounded-full object-cover mb-2"
          />
          <p className="font-medium text-sm">Jane Doe</p>
          <p className="text-xs text-gray-600">Emprendedora, TechCo</p>
        </div>
      </div>

      {/* Section 4 - CTA with Image Background */}

      <div className="bg-gradient-to-r from-[#BAC7D1] via-[#1F5278] to-[#1F5278] px-4 md:px-20 text-white">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¡Mejora tus anuncios hoy!
            </h2>
            <p className="text-sm md:text-base mb-6 max-w-md">
              Desbloquee funciones premium para mejorar la visibilidad de sus
              anuncios y llegar a más clientes potenciales.
            </p>
            <div className="flex gap-3">
              <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded text-sm font-medium text-white">
                Mejora
              </button>
              <button className="bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-100">
                Promover
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={rocket}
              alt="Rocket Launch"
              className="max-w-xs md:max-w-sm lg:max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
