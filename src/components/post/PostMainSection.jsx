import React from "react";
import posthero from "../../assets/posthero.png";
import { GradientButton } from "../button/Button";
import { GradientOutlineButton } from "../button/Button";

const PostMainSection = () => {
  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${posthero})` }}
    >
      <div className="bg-black/40 w-full h-full absolute top-0 left-0 z-0"></div>{" "}
      {/* Optional dark overlay for contrast */}
      <div className="relative z-10 px-4 md:px-32 text-white w-full">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Resumen de su actividad
          </h1>
          <p className="text-lg mb-6">
            Realice un seguimiento de sus transacciones, administre sus
            publicaciones y manténgase actualizado con notificaciones en tiempo
            real.
          </p>

          <div className="flex gap-8">
            <GradientButton>Vista</GradientButton>
            <GradientOutlineButton>Administrar</GradientOutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostMainSection;
