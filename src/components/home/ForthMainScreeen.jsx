import React from "react";
import home4 from "../../assets/home4.png";
import home5 from "../../assets/home5.png";

const ForthMainScreeen = () => {
  return (
    <div>
      {/* Block 5: Background Image with Overlay Content */}
      <div
        className="w-full bg-cover bg-center relative text-white rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url(${home4})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Aspect Ratio Spacer */}
        <div className="pt-[56.25%] md:pt-[40%]"></div>{" "}
        {/* Aspect ratio spacer */}
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/30 flex items-center px-6 md:px-20 py-12">
          <div className="max-w-xl space-y-4 px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
              Libere el potencial de su negocio con
            </h2>
            <h3 className="text-xl font-semibold">
              REVOLEAR<sup>®</sup>
            </h3>
            <p className="text-sm md:text-base text-gray-200">
              REVOLEAR® ofrece a los comerciantes las herramientas que
              necesitan para prosperar en un mercado competitivo. Con tiendas
              personalizadas y funciones integradas, gestionar su negocio nunca
              ha sido tan fácil.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
              <li>Control y gestión de inventario eficientes</li>
              <li>Tiendas personalizadas adaptadas a su marca</li>
              <li>Experiencia optimizada con la cesta de compra</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Block 6: Content with Columns */}
      <div className="w-full px-4 md:px-20 py-12 bg-white text-black">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Libere su potencial con <br className="hidden md:block" />
            REVOLEAR
          </h2>

          {/* Subtext */}
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-3xl">
            Revolviendo revoluciona la forma en que los usuarios y comerciantes
            se conectan. Experimente transacciones fluidas y promociones
            específicas como nunca antes.
          </p>

          {/* Columns for Users and Merchants */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Para usuarios */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Para usuarios</h3>
              <p className="text-gray-700">
                Compre, venda fácilmente y promocione herramientas intuitivas
                disponibles a su alcance.
              </p>
            </div>

            {/* Para comerciantes */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Para comerciantes</h3>
              <p className="text-gray-700">
                Aumente las ventas con tiendas personalizadas y potentes
                funciones publicitarias adaptadas a su negocio.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="border border-pink-500 text-pink-600 px-5 py-2 rounded-full text-sm hover:bg-pink-50">
              Más Información
            </button>
            <button className="text-sm text-gray-700 hover:underline">
              Registrarse
            </button>
          </div>
        </div>
      </div>

      {/* Block 7: Image */}
      <img
        src={home5}
        alt="Descripción de la imagen"
        className="w-full h-auto rounded-lg mt-12"
      />
    </div>
  );
};

export default ForthMainScreeen;
