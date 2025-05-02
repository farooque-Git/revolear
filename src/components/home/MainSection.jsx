import React from "react";
import arrow from "../../assets/arrow.png";
import { useNavigate } from "react-router-dom";
import home1 from "../../assets/home1.png";

const MainSection = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <section>
      {/* Block 1: Secure */}
      <div className="h-[120px] py-8 bg-[#EAEAEA] rounded-lg shadow-md flex items-center justify-between px-4">
        {/* Arrow on the left side */}
        <img
          src={arrow}
          alt="arrow"
          className="max-w-[40px] max-h-[40px] cursor-pointer"
          onClick={handleGoBack} // Trigger go back function when clicked
        />

        {/* Hogar text centered */}
        <h1 className="text-center text-3xl font-semibold text-gray-800 tracking-wide flex-1">
          Hogar
        </h1>
      </div>

      {/* Block 2: Secure */}
      <div className="">
        {/* Image */}
        <img src={home1} alt="home" className="w-full" />

        {/* Header */}
        <h1 className="text-[40px] font-bold mt-4">
          Descubre, Vende y Promociona con Facilidad
        </h1>

        {/* Paragraph */}
        <p className="text-lg mt-4">
          REVOLEAR® le ofrece un acceso sin fisuras para buscar, publicar y
          examinar promociones destacadas. Disfrute de una interfaz fácil de
          usar diseñada para mejorar su experiencia de compra y venta.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg">
            Button 1
          </button>
          <button className="px-6 py-3 bg-green-500 text-white rounded-md text-lg">
            Button 2
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
