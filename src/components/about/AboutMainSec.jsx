import React from "react";
import about1 from "../../assets/about1.png";
import { GradientButton } from "../button/Button";
import { GradientOutlineButton } from "../button/Button";

const AboutMainSec = () => {
  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${about1})` }}
    >
      <div className="bg-black/40 w-full h-full absolute top-0 left-0 z-0"></div>{" "}
      {/* Optional dark overlay for contrast */}
      <div className="relative z-10 px-4 md:px-32 text-white w-full">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Potenciar su mercado
          </h1>
          <p className="text-lg mb-6">
            En REVOLEAR® revolucionamos la compraventa con tecnología punta
            para usuarios y comerciantes.
          </p>

          <div className="flex gap-4">
            <GradientButton>Inscribirse</GradientButton>
            <GradientOutlineButton>Más información</GradientOutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMainSec;
