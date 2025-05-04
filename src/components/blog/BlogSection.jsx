import React from "react";
import avatar1 from "../../assets/blog/image-1.png";
import avatar2 from "../../assets/blog/image-2.png";
import avatar3 from "../../assets/blog/image-4.png";
import image1 from "../../assets/blog/image-1.png";
import image2 from "../../assets/blog/image-3.png";
import image3 from "../../assets/blog/image-5.png";

const blogPosts = [
  {
    id: 1,
    title: "Maximiza el potencial de tu aplicación",
    category: "Tecnología",
    description:
      "Aprende a aprovechar las características de la aplicación para un mejor compromiso.",
    author: "Jane Doe",
    avatar: avatar1,
    date: "11 de enero de 2022",
    readTime: "5 min de lectura",
    image: image1,
  },
  {
    id: 2,
    title: "Mantente actualizado con REVOLEAR®",
    category: "Marketing",
    description:
      "Descubre formas innovadoras de promocionar tus productos de manera efectiva.",
    author: "John Smith",
    avatar: avatar2,
    date: "10 de febrero de 2022",
    readTime: "7 min de lectura",
    image: image2,
  },
  {
    id: 3,
    title: "Mejora tus habilidades de venta",
    category: "Actualizaciones",
    description:
      "Consulta las últimas características añadidas a nuestra aplicación.",
    author: "Emily Johnson",
    avatar: avatar3,
    date: "15 de marzo de 2022",
    readTime: "6 min de lectura",
    image: image3,
  },
];

export default function BlogSection() {
  return (
    <section className="py-12 bg-white px-4 md:px-28">
      <div className=" mb-10">
        <h2 className="text-3xl  md:text-4xl font-bold text-gray-900 mb-10">
          Últimas ideas y actualizaciones
        </h2>
        <p className="text-gray-600">
          Explora nuestras últimas publicaciones del blog a continuación.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[296px] object-cover"
            />
            <div className="p-4">
              <p className="text-xs text-gray-500 font-medium mb-1">
                {post.category}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{post.description}</p>

              <div className="flex items-center mt-4 text-sm text-gray-500">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="mr-1">{post.author}</span>
                <span className="mx-1">•</span>
                <span>{post.date}</span>
                <span className="mx-1">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-10">
        <button className="px-6 py-2 rounded-md text-white text-sm font-semibold bg-gradient-to-r from-pink-400 to-teal-500 hover:opacity-90 transition">
          Ver todo
        </button>
      </div>
    </section>
  );
}
