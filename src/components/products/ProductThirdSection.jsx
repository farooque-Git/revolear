import React from "react";
import product1 from "../../assets/product1.png";
import { GradientButton, GradientOutlineButton } from "../button/Button";

// 🧩 Data array for mapped content
const promotionData = [
  {
    title: "50%",
    description: "¡Oferta por tiempo limitado en artículos seleccionados!",
    buttonType: "filled",
    buttonText: "Comprar",
  },
  {
    title: "50%",
    description: "¡Consigue el tuyo antes de que se agoten!",
    buttonType: "outline",
    buttonText: "Saber más",
  },
];

const ProductThirdSection = () => {
  return (
    <div className="bg-white min-h-screen w-full sm:px-8 py-8 mx-auto font-sans text-gray-900">
      <div className="flex flex-col-reverse md:flex-row md:px-28 items-center justify-between gap-6">
        {/* Left side - Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Descubre Nuestros Mejores Productos y Promociones
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            Nuestra plataforma revoluciona la forma en que los usuarios compran
            y venden productos y servicios. Con herramientas y funciones
            avanzadas, disfrute de una experiencia optimizada y adaptada a sus
            necesidades.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {promotionData.map(
              ({ title, description, buttonType, buttonText }, idx) => (
                <div key={idx}>
                  <p className="text-2xl font-semibold">{title}</p>
                  <p className="text-sm text-gray-600 pb-16">{description}</p>
                  {buttonType === "filled" ? (
                    <GradientButton>{buttonText}</GradientButton>
                  ) : (
                    <GradientOutlineButton>{buttonText}</GradientOutlineButton>
                  )}
                </div>
              )
            )}
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={product1}
            alt="Descripción de la imagen"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductThirdSection;
