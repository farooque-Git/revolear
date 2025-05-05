import React from "react";
import project4 from "../../assets/project4.png";

export default function ProjectForthScreen() {
  return (
    <div className="bg-gray-50 px-6 md:px-20 py-12">
      {/* Star + Quote */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="text-2xl text-black mb-4">★★★★★</div>
        <blockquote className="text-lg md:text-xl text-gray-800 font-serif font-medium leading-relaxed">
          “REVOLEAR” ha transformado la forma en que nos conectamos con nuestros
          clientes, haciendo que las transacciones sean fluidas y eficientes."
        </blockquote>
      </div>

      {/* Grid: Text + Image */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5 items-center">
        {/* Left: Text + Buttons */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Hagamos Realidad Su <br /> Visión
          </h2>
          <p className="text-gray-600 mt-4 text-base">
            Contáctenos hoy para discutir su proyecto y explorar soluciones
            innovadoras adaptadas a sus necesidades.
          </p>
          <div className="mt-6 flex gap-4 flex-wrap">
            <button className="bg-gradient-to-r from-pink-500 to-teal-400 text-white px-6 py-2 rounded-sm text-sm hover:opacity-90 transition">
              Consultar
            </button>
            <button className="border border-teal-400 text-teal-600 px-6 py-2 rounded-sm text-sm hover:bg-teal-50 transition">
              Aprender Más
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={project4}
            alt="Visualización de Datos"
            className="w-full max-w-md rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
