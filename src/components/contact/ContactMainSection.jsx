import React from "react";
import contactmain from "../../assets/contactmain.png"; // use correct path to your image

export default function ContactMainScreen() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-300 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 items-center gap-10">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ponte en contacto
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            ¡Estamos aquí para ayudarte! Contacta con nuestro equipo si tienes
            alguna pregunta o comentario.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={contactmain}
            alt="Handshake Illustration"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
