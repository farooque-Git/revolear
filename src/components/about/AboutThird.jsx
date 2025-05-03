import React from "react";
import about3 from "../../assets/about3.png";
import { GradientOutlineButton } from "../button/Button";

const AboutThird = () => {
  return (
    <div>
      {" "}
      <div className="w-full px-4 md:px-20 py-12 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          {/* Grid for 1/3 and 2/3 layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1/3 section for Image */}
            <div className="md:col-span-1 flex justify-center">
              <img
                src={about3}
                alt="Descripción de la imagen"
                className="w-full h-auto"
              />
            </div>

            {/* 2/3 section for Content */}
            <div className="md:col-span-2">
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Libere su potencial con <br className="hidden md:block" />
                REVOLEAR
              </h2>

              {/* Subtext */}
              <p className="text-base md:text-lg text-gray-700 mb-8 max-w-3xl">
                Revolviendo revoluciona la forma en que los usuarios y
                comerciantes se conectan. Experimente transacciones fluidas y
                promociones específicas como nunca antes.
              </p>

              {/* Columns for Users and Merchants */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Para usuarios */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Para usuarios</h3>
                  <p className="text-gray-700">
                    Compre, venda fácilmente y promocione herramientas
                    intuitivas disponibles a su alcance.
                  </p>
                </div>

                {/* Para comerciantes */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Para comerciantes
                  </h3>
                  <p className="text-gray-700">
                    Aumente las ventas con tiendas personalizadas y potentes
                    funciones publicitarias adaptadas a su negocio.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <GradientOutlineButton className="border border-pink-500 text-pink-600 px-5 py-2 rounded-full text-sm hover:bg-pink-50">
                  Más Información
                </GradientOutlineButton>
                <button className="text-sm text-gray-700 hover:underline">
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThird;
