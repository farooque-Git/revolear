import React from "react";
import growthImg from "../../assets/project3.png"; // Replace with your image path
import { GradientButton } from "../button/Button";

const ProjectSecondScreen = () => {
  return (
    <div className="bg-white text-gray-900 px-6 md:px-12 py-14 font-sans">
      {/* Section 1: Hero with Image */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src={growthImg}
          alt="Growth Chart"
          className="rounded-lg shadow-md w-full"
        />
        <div>
          <h2 className="text-2xl font-semibold leading-snug mb-4">
            Experimente Transacciones Sin Inconvenientes con Nuestro Mercado
            Innovador de Productos y Servicios
          </h2>
          <p className="text-sm text-gray-700 mb-6">
            Nuestra plataforma revoluciona cómo los usuarios compran y venden
            productos y servicios. Con herramientas y características avanzadas,
            disfrutar de una experiencia optimizada adaptada a sus necesidades.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold">Amigable para el Usuario</p>
              <p className="text-gray-600">
                Diseño intuitivo que facilita la navegación y mejora la
                experiencia del cliente.
              </p>
            </div>
            <div>
              <p className="font-semibold">Características Robusta</p>
              <p className="text-gray-600">
                Potentes funcionalidades para mejorar las operaciones
                comerciales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Features Heading */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h3 className="text-xl font-semibold mb-3">
          Explore Nuestras Características y Beneficios Claves
        </h3>
        <p className="text-sm text-gray-700">
          REVOLEAR ofrece una experiencia fluida para comprar y vender
          productos. Nuestra plataforma empodera a usuarios y comerciantes con
          herramientas avanzadas para transacciones efectivas.
        </p>
      </div>

      {/* Section 3: 3 Columns of Features */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-12 text-center text-sm">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">
            Publicación y Compra Amigable para el Usuario
          </h4>
          <p className="text-gray-700">
            Sube y encuentra productos de forma eficiente con una interfaz
            optimizada.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">
            Comercio Integrado para Comerciantes
          </h4>
          <p className="text-gray-700">
            Desde pedidos hasta inventarios, todo en una sola plataforma.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">
            Publicidad Segmentada y Métricas en Tiempo Real
          </h4>
          <p className="text-gray-700">
            Optimiza campañas con datos detallados de rendimiento y métricas
            clave.
          </p>
        </div>
      </div>

      {/* Section 4: Final Stats */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-20 items-center">
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Transformando el Comercio a Través de Tecnología Innovadora
          </h3>
          <p className="text-sm text-gray-700">
            Hacemos proyectos que ofrecen soluciones escalables a los retos del
            mercado actual. Nuestra visión es empoderar a todos los actores del
            comercio con herramientas intuitivas y eficientes.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-gray-900 mb-1">75%</p>
            <p className="text-sm text-gray-600">
              Incremento en la productividad de los vendedores
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900 mb-1">80%</p>
            <p className="text-sm text-gray-600">
              Aumento de conversión en campañas de venta
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <GradientButton className="rounded-none">Aprende Más</GradientButton>
        <button className="border px-6 py-2 font-medium">Regístrate</button>
      </div>
    </div>
  );
};

export default ProjectSecondScreen;
