import React from "react";
import banner from "../../assets/productbanner.png"; // Replace with your actual image path

const ProductBanner = () => {
  return (
    <div className=" flex justify-center">
      <div
        className="relative w-fit min-h-[500px] rounded-xl overflow-hidden bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/20 bg-opacity-30 px-11" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-12 max-w-4xl text-black">
          <h1 className="text-3xl md:text-4xl  font-bold leading-tight mb-4 ">
            Descubre la Experiencia <br /> de Mercado Definitiva con <br />{" "}
            <span className="">REVOLEAR®</span>
          </h1>
          <p className="text-base md:text-lg mb-6">
            REVOLEAR® ofrece una plataforma sin interrupciones para comprar y
            vender productos y servicios. Con características intuitivas, los
            usuarios pueden navegar y promocionar sus ofertas fácilmente.
          </p>

          {/* Feature Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
            <div className=" backdrop-blur-sm p-4 rounded-md text-gray-900 shadow">
              <h3 className="text-lg font-semibold mb-2">
                Detalles del Producto
              </h3>
              <p className="text-sm">
                Explora productos de alta calidad con especificaciones claras y
                confiables.
              </p>
            </div>
            <div className=" backdrop-blur-sm p-4 rounded-md text-gray-900 shadow">
              <h3 className="text-lg font-semibold mb-2">
                Beneficios para el Usuario
              </h3>
              <p className="text-sm">
                Disfruta de una experiencia segura y sin complicaciones para
                realizar tus transacciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
