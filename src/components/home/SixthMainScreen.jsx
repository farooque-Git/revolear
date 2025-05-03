import React from "react";
import home7 from "../../assets/home7.png";
import { GradientButton } from "../button/Button";
import { GradientOutlineButton } from "./../button/Button";

const SixthMainScreen = () => {
  return (
    <div className="relative">
      <img
        src={home7} // Replace with actual image
        alt="Call to Action"
        className="w-full h-[350px] sm:h-[550px] md:h-[500px] object-cover" // Adjust height for different screen sizes
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center p-4 text-white">
        <h3 className="text-xl sm:text-2xl font-semibold">
          Únase hoy mismo a la comunidad REVOLEAR®
        </h3>
        <p className="text-sm sm:text-base mt-2">
          Experimente la compraventa sin <br />
          complicaciones con nuestra intuitiva <br />
          aplicación. Descárguela ahora para empezar.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
          <GradientButton>Comenzar</GradientButton>
          <GradientOutlineButton>Más información</GradientOutlineButton>
        </div>
      </div>
    </div>
  );
};

export default SixthMainScreen;
