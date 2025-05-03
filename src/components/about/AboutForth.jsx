import React from "react";
import about4 from "../../assets/about4.png";
import { GradientOutlineButton } from "../button/Button";

const AboutForth = () => {
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
                src={about4}
                alt="Descripción de la imagen"
                className="w-full h-auto"
              />
            </div>

            {/* 2/3 section for Content */}
            <div className="md:col-span-2">
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Descubra las incomparables ventajas de elegir REVOLEAR® para
                sus necesidades
              </h2>
              {/* Subtext */}
              <p className="text-base md:text-lg text-gray-700 mb-8 max-w-3xl">
                REVOLEAR® ofrece una plataforma sin fisuras para que los
                usuarios compren y vendan con facilidad. Los comerciantes pueden
                aprovechar herramientas avanzadas para mejorar su visibilidad y
                sus ventas.
              </p>
              {/* Columns for Users and Merchants */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Para usuarios */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Fácil de usar</h3>
                  <p className="text-gray-700">
                    Entrelazado intuitivo diseñado para navegar sin esfuerzo y
                    acceder rápidamente a las funciones.
                  </p>
                </div>

                {/* Para comerciantes */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Crecimiento comercial
                  </h3>
                  <p className="text-gray-700">
                    Potencie su negocio con publicidad dirigida y herramientas
                    completas de gestión de inventario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutForth;
