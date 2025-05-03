import React from "react";
import home3 from "../../assets/home3.png";

const ThirdMainScreen = () => {
  return (
    <div>
      <div className="px-4 py-10 md:px-20 bg-white text-black space-y-10">
        {/* Top section with image and heading */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={home3}
            alt="Features"
            className="w-full h-auto object-cover"
          />
          <div>
            <h2 className="text-2xl md:text-[28px] font-bold leading-snug">
              Descubra nuestras <br />
              funciones principales <br />
              para usuarios y comerciantes
            </h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              REVOLEAR® ofrece una experiencia fluida para publicar y adquirir
              productos y servicios, con chats integrados y un sólido sistema de
              reseñas, para que los usuarios puedan participar con confianza y
              eficiencia.
            </p>
          </div>
        </div>

        {/* Feature boxes */}
        <div className="bg-[#F7F7F7] rounded-xl p-6 md:p-10 shadow-sm grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Feature 1 */}
          <div className="relative border-r border-gray-300 pr-8">
            <h3 className="text-lg font-semibold mb-2">
              Publicación y <br /> compra sin esfuerzo
            </h3>
            <p className="text-gray-600 mb-4">
              Cargue fácilmente imágenes y descripciones para mostrar sus
              productos
            </p>
          </div>

          {/* Feature 2 */}
          <div className="relative border-r border-gray-300 pr-8">
            <h3 className="text-lg font-semibold mb-2">
              Chat integrado para <br /> negociación directa
            </h3>
            <p className="text-gray-600 mb-4">
              Comuníquese directamente con compradores o vendedores para obtener
              mejores ofertas.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Sistema de reseñas <br /> exhaustivo
            </h3>
            <p className="text-gray-600 mb-4">
              Genere confianza a través de las evaluaciones y comentarios de los
              usuarios.
            </p>
          </div>
          <div className="flex gap-4">
            {" "}
            <button className="px-4 py-2 border border-pink-500 text-pink-500 rounded-full hover:bg-pink-50 transition text-sm">
              Más Información
            </button>
            <button className="text-sm underline hover:text-black">
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdMainScreen;
