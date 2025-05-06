import React from "react";
import contracthero from "../../assets/contracthero.png";

export default function P2PSection() {
  return (
    <section className="w-full">
      {/* Top Hero Section */}
      <div className="relative bg-black text-white h-[320px] flex items-center">
        <img
          src={contracthero}
          alt="Trading Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-semibold leading-tight">
              Potencie sus <br /> operaciones
            </h1>
          </div>
          <div className="text-sm text-gray-200">
            <p>
              Los contratos P2P facilitan las transacciones fluidas entre
              particulares, permitiendo la compraventa segura directamente a
              través de nuestra app. Disfruta de las ventajas de la negociación
              directa, mayor privacidad y funciones intuitivas que simplifican
              cada transacción.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Transacciones fluidas con <br /> contratos P2P
            </h2>
          </div>
          <div className="text-gray-700 text-sm space-y-6">
            <p>
              Los contratos P2P permiten a los usuarios realizar transacciones
              seguras directamente desde la aplicación. Al actuar como
              intermediaria, la plataforma garantiza la confianza y la
              transparencia entre compradores y vendedores. Disfrute de
              intercambios sin complicaciones con protección y soporte
              integrados.
            </p>
            <div className="flex gap-4">
              <button className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-md shadow-sm ">
                Más información
              </button>
              <button className="text-sm text-black flex items-center gap-1 hover:underline">
                Inscribirse <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
