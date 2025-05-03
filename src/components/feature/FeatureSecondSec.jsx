import React from "react";
import feature1 from "../../assets/feature1.png";
import { GradientOutlineButton } from "../button/Button";

const FeatureSecondSec = () => {
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
                src={feature1}
                alt="Descripción de la imagen"
                className="w-full h-auto"
              />
            </div>

            {/* 2/3 section for Content */}
            <div className="md:col-span-2">
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Experiencia de contabilización y compra sin esfuerzo
              </h2>

              {/* Subtext */}
              <p className="text-base md:text-lg text-gray-700 mb-8 max-w-3xl">
                Cargue fácilmente imágenes y descripciones detalladas de sus
                productos o servicios. Nuestra función de clasificación
                automática garantiza que sus anuncios estén categorizados y
                etiquetados para lograr la máxima visibilidad.
              </p>

              {/* Columns for Users and Merchants */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Para usuarios */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Fácil de usar</h3>
                  <p className="text-gray-700">
                    Proceso simplificado para mostrar sus ofertas a compradores
                    potenciales.
                  </p>
                </div>

                {/* Para comerciantes */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Clasificación inteligente
                  </h3>
                  <p className="text-gray-700">
                    Encuentre exactamente lo que necesita con nuestro avanzado
                    sistema de categorización y etiquetado.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <GradientOutlineButton className="border border-pink-500 text-pink-600 px-5 py-2 rounded-full text-sm hover:bg-pink-50">
                  Más información
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

export default FeatureSecondSec;
