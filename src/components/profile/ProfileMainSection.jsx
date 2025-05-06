import React from "react";
import profilehero from "../../assets/profilehero.png";
import { GradientButton } from "../button/Button";
import { GradientOutlineButton } from "../button/Button";

const ProfileMainSection = () => {
  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${profilehero})` }}
    >
      <div className="bg-black/40 w-full h-full absolute top-0 left-0 z-0"></div>{" "}
      {/* Optional dark overlay for contrast */}
      <div className="relative z-10 px-4 md:px-32 text-white w-full">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Administra tu perfil
          </h1>
          <p className="text-lg mb-6">
            Actualice fácilmente su información personal, métodos de pago y
            configuración de privacidad, todo en un solo lugar.
          </p>

          <div className="flex gap-8">
            <GradientButton>Ahorrar</GradientButton>
            <GradientOutlineButton>Cancelar</GradientOutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileMainSection;
