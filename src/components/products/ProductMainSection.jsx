import React from "react";
import productbg from "../../assets/productbg.png";

const ProductMainSection = () => {
  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${productbg})` }}
    >
      <div className="bg-black/40 w-full h-full absolute top-0 left-0 z-0"></div>{" "}
      {/* Optional dark overlay for contrast */}
      <div className="relative z-10 px-4 pt-28 md:px-32 text-black w-full">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-gloock">
            Explora Nuestras Ofertas
          </h1>
          <p className="text-lg mb-6">
            Descubre una amplia gama de productos y servicios diseñados para
            mejorar tu experiencia con REVOLEAR®
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductMainSection;
