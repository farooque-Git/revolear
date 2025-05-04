import React from "react";
import pricingmain from "../../assets/pricingmain.png";
import { GradientButton } from "../button/Button";
import { GradientOutlineButton } from "../button/Button";

const PricingMainSection = () => {
  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${pricingmain})` }}
    >
      <div className="bg-black/40 w-full h-full absolute top-0 left-0 z-0"></div>{" "}
      {/* Optional dark overlay for contrast */}
      <div className="relative z-10 px-4 md:px-32 text-white w-full">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Elija su plan</h1>
          <p className="text-lg mb-6">
            Explore nuestros precios flexibles diseñados para satisfacer sus
            necesidades e impulsar su negocio
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

export default PricingMainSection;
