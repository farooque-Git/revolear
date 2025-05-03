import React from "react";

import home1 from "../../assets/home1.png";
import { GradientButton } from "../button/Button";
import { GradientOutlineButton } from "./../button/Button";

const MainSection = () => {
  return (
    <section>
      {/* Block 2: Image */}
      <img src={home1} alt="home" className="w-full" />

      {/* Block 3: 50-50 Split */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-32 mt-8">
        {/* Left side (Heading) */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-[32px] md:text-[40px] font-bold">
            Descubre, Vende y Promociona con Facilidad
          </h1>
        </div>

        {/* Right side (Paragraph and Buttons) */}
        <div className="w-full md:w-1/2">
          <p className="text-lg mb-6">
            REVOLEAR® le ofrece un acceso sin fisuras para buscar, publicar y
            examinar promociones destacadas. Disfrute de una interfaz fácil de
            usar diseñada para mejorar su experiencia de compra y venta.
          </p>

          <div className="flex gap-4">
            <GradientButton>Comenzar</GradientButton>
            <GradientOutlineButton className="rounded-full">
              Más información
            </GradientOutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
