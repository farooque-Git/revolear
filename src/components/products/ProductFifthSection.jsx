import React from "react";
import product2 from "../../assets/product2.png";
import { GradientButton, GradientOutlineButton } from "../button/Button";

const ProductFifthSection = () => {
  return (
    <section className="relative w-full h-[400px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${product2})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center px-4 max-w-2xl text-white bg-black/20 rounded-lg py-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Comienza Tu Aventura de Compras
          </h1>
          <p className="text-sm sm:text-base mb-6">
            Descubre productos y servicios increíbles o publica tus propios
            anuncios en solo unos clics!
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <GradientButton>Comprar</GradientButton>
            <GradientOutlineButton>Publicar</GradientOutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFifthSection;
