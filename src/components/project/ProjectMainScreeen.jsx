import React from "react";
import meetingImg from "../../assets/project2.png";
import project1 from "../../assets/project1.png";

const ProjectMainScreen = () => {
  return (
    <div>
      <img src={project1} alt="home" className="w-full" />
      <div className="min-h-screen bg-white px-6 md:px-12 py-10 font-sans">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-2xl font-semibold tracking-wide">
              Aplicación <span className="italic">REVOLEAR</span>®
            </h1>
            <p className="text-sm text-gray-700 mt-1">
              Una plataforma innovadora para la compra, venta y promoción de
              productos y servicios sin intermediarios.
            </p>
            <div className="flex font-bold text-sm gap-4 mt-6">
              <p>Comercio Electrónico</p>
              <p>Aplicación Móvil</p>
              <p>Amigable para el Usuario</p>
            </div>
          </div>
          {/* Metadata Section */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
            <div>
              <p className="font-semibold">Cliente</p>
              <p>Equipo REVOLEAR</p>
            </div>
            <div>
              <p className="font-semibold">Fecha</p>
              <p>Marzo 2023</p>
            </div>
            <div>
              <p className="font-semibold">Rol</p>
              <p>Gerente de Proyecto</p>
            </div>
            <div>
              <p className="font-semibold">Sitio web</p>
              <a href="https://www.revo.io" className="text-blue-500 underline">
                www.revo.io
              </a>
            </div>
          </div>

          {/* Left Column */}
          <div className="space-y-6">
            {/* Description */}
            <div>
              <h2 className="text-xl font-bold mb-3">
                Descripción General del Proyecto y Objetivos
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                La aplicación REVOLEAR está diseñada para revolucionar la forma
                en que las usuarias compran, venden y promocionan productos y
                servicios sin la necesidad de intermediarios. Su interfaz
                intuitiva permite a los usuarios crear tiendas personalizadas y
                acceder a análisis avanzados que facilitan la toma de
                decisiones.
                <br />
                <br />
                Este proyecto tiene como objetivo principal democratizar el
                comercio digital ofreciendo herramientas profesionales al
                alcance de todos. Además, busca integrar un sistema de
                recompensas por fidelidad, así como funcionalidades de seguridad
                avanzada y soporte personalizado para maximizar la experiencia
                del usuario.
                <br />
                <br />
                En resumen, REVOLEAR se posiciona como una solución integral que
                promueve el comercio justo, directo y sin barreras, empoderando
                tanto a vendedores independientes como a pequeñas empresas con
                tecnología de vanguardia.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center items-start">
            <img
              src={meetingImg}
              alt="Team Meeting"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMainScreen;
