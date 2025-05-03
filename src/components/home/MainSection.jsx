import React from "react";
import arrow from "../../assets/arrow.png";
import { useNavigate } from "react-router-dom";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";
import home4 from "../../assets/home4.png";
import home5 from "../../assets/home5.png";
import home6 from "../../assets/home6.png";
import home7 from "../../assets/home7.png";

import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";

const MainSection = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const cards = [
    {
      image: card1,
      text: "Comience hoy en pasos simples.",
      button: "Registrarse",
    },
    {
      image: card2,
      text: "Publique anuncios fácilmente para vender sus productos o servicios.",
      button: "Publicar",
    },
    {
      image: card3,
      text: "Gestione sus publicaciones y supervise interacciones sin esfuerzo.",
      button: "Gestionar",
    },
  ];

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

      {/* Blovck 2 */}
      <div className="px-4 py-10 md:px-20 bg-white text-black">
        {/* Header */}
        <div className="max-w-2xl mx-auto ">
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
          <div className="flex  gap-4 mt-6">
            <button className="px-6 py-2 border border-pink-500 rounded-full text-pink-500 font-medium hover:bg-pink-50 transition">
              Más información
            </button>
            <button className="px-6 py-2 rounded-full font-medium text-black hover:underline transition">
              Compra ahora &gt;
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-8 flex justify-center">
          <img
            src={home2}
            alt="Promo"
            className="rounded-2xl w-[548px] h-[578px] object-cover "
          />
        </div>
      </div>

      {/* block3 */}
      <div className="px-4 py-10 md:px-20 bg-white text-black space-y-10">
        {/* Top section with image and heading */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 ">
          <img
            src={home3}
            alt="Features"
            className="w-full  h-auto object-cover"
          />
          <div className="">
            <h2 className="text-2xl md:text-[28px] font-bold leading-snug">
              Descubra nuestras <br />
              funciones principales <br />
              para usuarios y comerciantes
            </h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              REVOLEAR® ofrece una experiencia fluida para publicar y adquirir
              productos y servicios, con chats integrados y un sólido sistema de
              reseñas, para que los usuarios puedan participar con confianza y
              eficiencia.
            </p>
          </div>
        </div>

        {/* Feature boxes */}
        <div className="bg-[#F7F7F7] rounded-xl p-6 md:p-10 shadow-sm grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Feature 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Publicación y <br /> compra sin esfuerzo
            </h3>
            <p className="text-gray-600 mb-4">
              Cargue fácilmente imágenes y descripciones para mostrar sus
              productos
            </p>
            <button className="px-4 py-2 border border-pink-500 text-pink-500 rounded-full hover:bg-pink-50 transition text-sm">
              Más Información
            </button>
          </div>

          {/* Feature 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Chat integrado para <br /> negociación directa
            </h3>
            <p className="text-gray-600 mb-4">
              Comuníquese directamente con compradores o vendedores para obtener
              mejores ofertas.
            </p>
            <button className="text-sm underline hover:text-black">
              Registrarse
            </button>
          </div>

          {/* Feature 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Sistema de reseñas <br /> exhaustivo
            </h3>
            <p className="text-gray-600 mb-4">
              Genere confianza a través de las evaluaciones y comentarios de los
              usuarios.
            </p>
          </div>
        </div>
      </div>

      {/* block 5 */}
      <div
        className="w-full bg-cover bg-center relative text-white rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url(${home4})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Add a spacer div to force auto height based on aspect ratio or content */}
        <div className="pt-[56.25%] md:pt-[40%]"></div>{" "}
        {/* Aspect ratio spacer for auto height */}
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/30 flex items-center px-6 md:px-20 py-12">
          <div className="max-w-xl space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
              Libere el potencial de su negocio con
            </h2>
            <h3 className="text-xl font-semibold">
              REVOLEAR<sup>®</sup>
            </h3>
            <p className="text-sm md:text-base text-gray-200">
              REVOLEAR® ofrece a los comerciantes las herramientas que
              necesitan para prosperar en un mercado competitivo. Con tiendas
              personalizadas y funciones integradas, gestionar su negocio nunca
              ha sido tan fácil.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
              <li>Control y gestión de inventario eficientes</li>
              <li>Tiendas personalizadas adaptadas a su marca</li>
              <li>Experiencia optimizada con la cesta de compra</li>
            </ul>
          </div>
        </div>
      </div>

      {/* block 5 */}
      <div className="w-full px-4 md:px-20 py-12 bg-white text-black">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Libere su potencial con <br className="hidden md:block" />
            revocación
          </h2>

          {/* Subtext */}
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-3xl">
            Revolviendo revoluciona la forma en que los usuarios y comerciantes
            se conectan. Experimente transacciones fluidas y promociones
            específicas como nunca antes.
          </p>

          {/* Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Para usuarios */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Para usuarios</h3>
              <p className="text-gray-700">
                Compre, venda fácilmente y promocione herramientas intuitivas
                disponibles a su alcance.
              </p>
            </div>

            {/* Para comerciantes */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Para comerciantes</h3>
              <p className="text-gray-700">
                Aumente las ventas con tiendas personalizadas y potentes
                funciones publicitarias adaptadas a su negocio.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="border border-pink-500 text-pink-600 px-5 py-2 rounded-full text-sm hover:bg-pink-50">
              Más Información
            </button>
            <button className="text-sm text-gray-700 hover:underline">
              Registrarse
            </button>
          </div>
        </div>
      </div>

      {/* block 5 */}
      <img
        src={home5}
        alt="Descripción de la imagen"
        className="w-full h-auto rounded-lg"
      />

      {/* block 6 */}
      <div className="w-full px-4 md:px-20 py-12 bg-white text-black">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            Descubra lo fácil que es comprar <br className="hidden md:block" />y
            vender con{" "}
            <span className="italic">
              REVOLEAR<sup>®</sup>
            </span>
            .
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
              >
                <img
                  src={card.image}
                  alt="card visual"
                  className="h-48 w-full object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-gray-800 mb-4">{card.text}</p>
                <button className="text-sm border border-purple-600 text-purple-700 px-4 py-1.5 rounded-full hover:bg-purple-50 transition">
                  {card.button} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Block 6 */}
      <div className="bg-white min-h-screen w-[658px] px-[10px] py-8 mx-auto font-sans text-gray-900">
        <h2 className="text-3xl font-bold leading-tight">
          Métricas clave del <br />
          rendimiento de nuestra <br />
          aplicación
        </h2>
        <p className="mt-4 text-base leading-relaxed">
          Nuestra aplicación ha experimentado un <br />
          notable crecimiento desde su lanzamiento. <br />
          Con miles de transacciones realizadas, la <br />
          satisfacción de los usuarios sigue siendo alta.
        </p>
        <div className="mt-6 flex justify-between">
          <div>
            <p className="text-2xl font-semibold">85%</p>
            <p className="text-sm text-gray-600">
              Índice de satisfacción de los <br />
              usuarios basado en <br />
              encuestas recientes.
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold">10M</p>
            <p className="text-sm text-gray-600">
              Total de transacciones <br />
              procesadas a través de nuestra <br />
              plataforma.
            </p>
          </div>
        </div>
      </div>

      {/* block 7 */}
      <img
        src={home6}
        alt="Descripción de la imagen"
        className="w-full h-auto rounded-lg"
      />

      {/* BNlock 8 */}
      <div className="min-h-screen bg-white flex flex-col justify-between font-sans text-black">
        {/* Top Section: Review */}
        <div className="text-center p-6">
          <div className="text-2xl mb-2">★★★★★</div>
          <p className="text-lg font-semibold">
            "REVOLEAR® ha transformado mi forma de <br />
            <span className="font-bold">comprar y vender productos.</span> La
            interfaz fácil de <br />
            <span className="font-bold">usar</span> de la app y sus potentes
            funciones hacen <br />
            que las transacciones sean fluidas y agradables".
          </p>
        </div>

        {/* Middle Section: CTA with image */}
        <div className="relative">
          <img
            src={home7} // Replace with actual image
            alt="Call to Action"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center p-4 text-white">
            <h3 className="text-xl font-semibold">
              Únase hoy mismo a la comunidad REVOLEAR®
            </h3>
            <p className="text-sm mt-2">
              Experimente la compraventa sin <br />
              complicaciones con nuestra intuitiva <br />
              aplicación. Descárguela ahora para empezar.
            </p>
            <div className="mt-4 flex gap-2">
              <button className="bg-pink-500 text-white px-4 py-1 rounded">
                Comenzar
              </button>
              <button className="bg-white text-gray-800 px-4 py-1 rounded">
                Más información
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
