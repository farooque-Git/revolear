import React from "react";
import home6 from "../../assets/home6.png";
import home7 from "../../assets/home7.png";

import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";

const FifthMainScreen = () => {
  const cards = [
    {
      image: card1,
      text: "Comience hoy en pasos simples.",
      button: "Registrarse",
    },
    {
      image: card2,
      text: "Publique anuncios fácilmente para vender sus productos o servicios.",
      button: "Publicar",
    },
    {
      image: card3,
      text: "Gestione sus publicaciones y supervise interacciones sin esfuerzo.",
      button: "Gestionar",
    },
  ];
  return (
    <div>
      {/* Block 6 */}
      <div className="w-full px-4 md:px-8 py-12 bg-white text-black">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10">
            Descubra lo fácil que es comprar <br className="hidden md:block" />y
            vender con{" "}
            <span className="italic">
              REVOLEAR<sup>®</sup>
            </span>
            .
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
              >
                <img
                  src={card.image}
                  alt="card visual"
                  className="h-48 w-full object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-gray-800 mb-4">{card.text}</p>
                <button className="text-sm border border-purple-600 text-purple-700 px-4 py-1.5 rounded-full hover:bg-purple-50 transition">
                  {card.button} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Block 6 - Metrics */}
      <div className="bg-white min-h-screen w-full px-4 sm:px-8 py-8 mx-auto font-sans text-gray-900">
        <div className="flex items-center justify-between gap-6">
          {/* Left side - Image */}
          <div className="w-1/2">
            <img
              src={home6}
              alt="Descripción de la imagen"
              className="w-full "
            />
          </div>

          {/* Right side - Content */}
          <div className="w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Métricas clave del <br />
              rendimiento de nuestra <br />
              aplicación
            </h2>
            <p className="mt-4 text-base leading-relaxed">
              Nuestra aplicación ha experimentado un <br />
              notable crecimiento desde su lanzamiento. <br />
              Con miles de transacciones realizadas, la <br />
              satisfacción de los usuarios sigue siendo alta.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-2xl font-semibold">85%</p>
                <p className="text-sm text-gray-600">
                  Índice de satisfacción de los <br />
                  usuarios basado en <br />
                  encuestas recientes.
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold">10M</p>
                <p className="text-sm text-gray-600">
                  Total de transacciones <br />
                  procesadas a través de nuestra <br />
                  plataforma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Block 8 - Review & CTA */}
      <div className="min-h-screen bg-white flex flex-col justify-between font-sans text-black">
        {/* Top Section: Review */}
        <div className="text-center p-6">
          <div className="text-2xl mb-2">★★★★★</div>
          <p className="text-lg font-semibold">
            "REVOLEAR® ha transformado mi forma de <br />
            <span className="font-bold">comprar y vender productos.</span> La
            interfaz fácil de <br />
            <span className="font-bold">usar</span> de la app y sus potentes
            funciones hacen <br />
            que las transacciones sean fluidas y agradables".
          </p>
        </div>

        {/* Middle Section: CTA with image */}
        <div className="relative">
          <img
            src={home7} // Replace with actual image
            alt="Call to Action"
            className="w-full h-[350px] sm:h-[550px] md:h-[500px] object-cover" // Adjust height for different screen sizes
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center p-4 text-white">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Únase hoy mismo a la comunidad REVOLEAR®
            </h3>
            <p className="text-sm sm:text-base mt-2">
              Experimente la compraventa sin <br />
              complicaciones con nuestra intuitiva <br />
              aplicación. Descárguela ahora para empezar.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
              <button className="bg-pink-500 text-white px-4 py-1 rounded">
                Comenzar
              </button>
              <button className="bg-white text-gray-800 px-4 py-1 rounded">
                Más información
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthMainScreen;
