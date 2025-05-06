import React from "react";
import post1 from "../../assets/post1.png";
import post2 from "../../assets/post2.png";
import { GradientButton } from "../button/Button";

export default function PostDashboard() {
  return (
    <section className="bg-gray-100 px-4 md:px-20 py-16 text-black space-y-20">
      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Su actividad y transacciones recientes
          </h2>
          <p className="text-gray-700 mb-4">
            Manténgase al día con sus últimas interacciones y transacciones.
            Nuestro panel de control ofrece una visión general de su actividad
            para una gestión sencilla.
          </p>
          <div className="flex gap-3">
            <GradientButton className="rounded-sm">Vista</GradientButton>
            <button className="border border-gray-400 px-4 py-1 text-sm rounded hover:bg-gray-200">
              Refrescar
            </button>
          </div>
        </div>
        {/* Right Image */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <img src={post1} alt="analytics-visual" className="w-full h-auto" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <img
            src={post2}
            alt="controlar-notificaciones"
            className="w-full h-auto"
          />
        </div>
        {/* Right Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Controle sin esfuerzo sus anuncios y notificaciones
          </h2>
          <p className="text-gray-700 mb-4">
            Mantente al tanto de tus publicaciones con acceso rápido para
            administrar anuncios y ver notificaciones. La configuración de tu
            perfil está a un solo clic, lo que garantiza una experiencia de
            usuario fluida.
          </p>
          <div className="flex gap-3">
            <GradientButton className="rounded-sm">Vista</GradientButton>
            <button className="border border-gray-400 px-4 py-1 text-sm rounded hover:bg-gray-200">
              Ajustes
            </button>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Heading Only */}
        <div>
          <h2 className="text-2xl font-semibold">
            Realice un seguimiento del rendimiento de sus anuncios con precisión
          </h2>
        </div>
        {/* Right Content */}
        <div>
          <p className="text-gray-700">
            Obtén información valiosa sobre el rendimiento de tus anuncios.
            Nuestro panel proporciona métricas detalladas sobre visualizaciones,
            clics e interacciones, lo que te permite optimizar tus estrategias
            publicitarias. Toma decisiones informadas para mejorar tu alcance y
            engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
