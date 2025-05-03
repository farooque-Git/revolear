import React from "react";
import promoimg from "../../assets/promo.png";
import curvearrow from "../../assets/curvearrow.png";

const Promo = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${promoimg})`,
        height: "2164px",
        width: "full",
      }}
    >
      {/* Top Section */}
      <div className="absolute top-[100px] left-[150px] w-[600px] text-center">
        <h1 className="text-3xl font-semibold mb-4">
          Comunicación fluida para compradores y vendedores
        </h1>
        <p className="text-lg">
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
        className="absolute top-[350px] left-[400px] rotate-[15deg] w-[200px]"
      />

      {/* Middle Section */}
      <div className="absolute top-[500px] left-[120px] w-[700px] bg-black bg-opacity-40 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">
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
        className="absolute top-[1050px] left-[600px] rotate-[-20deg] w-[100px]"
      />

      {/* Bottom Section */}
      <div className="absolute top-[1300px] left-[150px] w-[600px]">
        <h2 className="text-2xl font-bold mb-2">
          Libere su potencial comercial con REVOLARE®
        </h2>
        <p className="mb-4">
          Con REVOLARE, los comerciantes pueden crear tiendas personalizadas con
          facilidad. Nuestra plataforma optimiza cada paso de la experiencia
          comercial, desde la creación del perfil hasta la atención al cliente.
        </p>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>Crea tu tienda personalizada sin esfuerzo</li>
          <li>Experiencia sin fricciones en la venta o la compra</li>
          <li>Procesos de pago seguros para mayor tranquilidad</li>
        </ul>
      </div>
    </div>
  );
};

export default Promo;
