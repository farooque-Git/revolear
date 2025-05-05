import React from "react";
import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import product3 from "../../assets/products/product3.png";
import product4 from "../../assets/products/product4.png";
import product5 from "../../assets/products/product5.png";
import product6 from "../../assets/products/product6.png";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Widget inteligente",
      color: "Azul",
      image: product1,
    },
    {
      id: 2,
      title: "Botella ecológica",
      color: "Verde",
      image: product2,
    },
    {
      id: 3,
      title: "Cargador inalámbrico",
      color: "Negro",
      image: product3,
    },
    {
      id: 4,
      title: "Rastreador de fitness",
      color: "Plata",
      image: product4,
    },
    {
      id: 5,
      title: "Altavoz Bluetooth",
      color: "Rojo",
      image: product5,
    },
    {
      id: 6,
      title: "Ratón para juegos",
      color: "Negro",
      image: product6,
    },
  ];

  return (
    <section className="px-6 py-12 max-w-screen-xl mx-auto bg-white min-h-screen">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Productos</h2>
          <p className="text-sm text-gray-600 max-w-sm">
            Explora nuestra diversa gama de productos disponibles ahora.
          </p>
        </div>
        <button className="bg-gradient-to-r from-pink-400 to-teal-400 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md hover:opacity-90">
          Ver todo
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(({ id, title, color, image }) => (
          <div
            key={id}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={image}
              alt={title}
              className="h-[360px] w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              <p className="text-xs text-gray-500">{color}</p>
              <p className="text-xs font-semibold mt-1 text-black">5</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
