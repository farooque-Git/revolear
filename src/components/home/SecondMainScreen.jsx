import React from "react";
import home2 from "../../assets/home2.png";
import { GradientButton } from "../button/Button";

const SecondMainScreen = () => {
  return (
    <div>
      {/* Block 2 */}
      <div className="px-4 py-10 md:px-20 bg-white text-black">
        {/* 50-50 Split */}
        <div className="flex flex-col md:flex-row items-center justify-between mx-auto">
          {/* Left Side (Content) */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            {/* Header */}
            <h2 className="text-2xl md:text-[32px] font-bold leading-snug">
              Explore nuestros últimos <br />
              anuncios y productos de moda
            </h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              Mantenga la vanguardia con nuestros anuncios dinámicos y productos
              de moda. <br />
              Disfrute de promociones exclusivas adaptadas a sus necesidades.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <GradientButton className="px-6 py-2 border border-pink-500 rounded-full text-pink-500 font-medium hover:bg-pink-50 transition">
                Más información
              </GradientButton>
              <button className="px-6 py-2 rounded-full font-medium text-black hover:underline transition">
                Compra ahora &gt;
              </button>
            </div>
          </div>

          {/* Right Side (Image) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={home2}
              alt="Promo"
              className="rounded-3xl w-[548px] h-[578px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondMainScreen;
