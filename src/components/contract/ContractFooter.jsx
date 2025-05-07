import React from "react";
import contractfooter from "../../assets/contractfooter.png";

export default function ContractFooter() {
  return (
    <section
      className="w-full h-[200px] md:h-[400px] lg:h-[400px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${contractfooter})`,
      }}
    >
      <div className="bg-black/70 w-full h-full flex items-center justify-center px-4">
        <div className="max-w-4xl text-center text-white space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            Comercio seguro con contratos P2P
          </h1>
          <p className="text-sm md:text-base">
            Comience hoy a utilizar contratos P2P para realizar transacciones
            seguras y eficientes entre usuarios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <button className="bg-white text-black font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition">
              Más información
            </button>
            <button className="bg-gray-800 text-white font-medium px-4 py-2 rounded-md hover:bg-gray-700 transition">
              Inscribirse
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
