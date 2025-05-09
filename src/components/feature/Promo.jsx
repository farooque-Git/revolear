import React from "react";
import promoimg from "../../assets/promo.png";
import curvearrow from "../../assets/curvearrow.png";

const Promo = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${promoimg})`,
        height: "auto",
        minHeight: "2164px",
      }}
    >
      {/* Top Section */}
      <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[600px] text-center px-4">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Comunicación fluida para compradores y vendedores
        </h1>
        <p className="text-base md:text-lg">
          Nuestra función de chat integrada permite una comunicación simple y en
          tiempo real entre compradores y vendedores, acelerando el cierre de
          operaciones y mejorando la experiencia de compra con conversaciones
          directas.
        </p>
      </div>

      {/* Arrow 1 */}
      <img
        src={curvearrow}
        alt="Arrow"
        className="hidden md:block absolute top-[240px] left-[400px] rotate-[15deg] w-[500px]"
      />

      {/* Middle Section */}
      <div className="absolute top-[500px] left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-[80px] w-[90%] max-w-[700px] bg-black bg-opacity-40 p-6 rounded-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          Potencie sus transacciones con nuestro sistema de reseñas y
          valoraciones
        </h2>
        <p className="mb-2">
          Nuestro sistema de calificaciones permite a los usuarios dejar reseñas
          sobre sus experiencias de compra o venta. Esto genera confianza,
          mejora la credibilidad del usuario y promueve una comunidad de calidad
          en nuestro ecosistema.
        </p>
        <div className="bg-white bg-opacity-20 p-4 rounded text-sm">
          Las reseñas de confianza, el sistema de puntuación y la verificación
          de usuarios son claves para mantener una comunidad segura y de
          calidad. La calificación acumulativa se muestra en el perfil de cada
          usuario.
        </div>
      </div>

      {/* Arrow 2 */}
      <img
        src={curvearrow}
        alt="Arrow"
        className="hidden md:block absolute top-[850px] left-[650px] rotate-[-5deg] w-[500px] transform -scale-x-100"
      />

      {/* Bottom Section - Right aligned */}
      <div className="absolute top-[1300px] left-1/2 transform -translate-x-1/2 md:transform-none md:left-auto md:right-[100px] w-[90%] max-w-[600px] text-right md:text-right text-left px-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Libere su potencial comercial con REVOLARE®
          </h2>
          <p className="mb-4">
            Con REVOLARE, los comerciantes pueden crear tiendas personalizadas
            con facilidad. Nuestra plataforma optimiza cada paso de la
            experiencia comercial, desde la creación del perfil hasta la
            atención al cliente.
          </p>
        </div>
      </div>

      {/* Arrow 3 */}
      <img
        src={curvearrow}
        alt="Arrow"
        className="hidden md:block absolute top-[1550px] left-[400px] rotate-[-20deg] w-[100px]"
      />

      {/* Final List Section */}
      <div className="absolute top-[1650px] left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-[80px] w-[90%] max-w-[700px] bg-opacity-40 p-6 rounded-lg">
        <ul className="list-inside space-y-1 text-base text-left">
          <li>Crea tu tienda personalizada sin esfuerzo</li>
          <li>Experiencia sin fricciones en la venta o la compra</li>
          <li>Procesos de pago seguros para mayor tranquilidad</li>
        </ul>
      </div>
    </div>
  );
};

export default Promo;
