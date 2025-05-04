import React from "react";
import avatar4 from "../../assets/blogsec/image-6.png";
import avatar5 from "../../assets/blogsec/image-7.png";
import avatar6 from "../../assets/blogsec/image-8.png";
import image1 from "../../assets/blogsec/image-1.png";
import image2 from "../../assets/blogsec/image-3.png";
import image3 from "../../assets/blogsec/image-5.png";

const blogPosts = [
  {
    id: 1,
    title: "Maximiza tus ventas con REVOLEAR®",
    category: "Actualizaciones",
    description:
      "Aprende a utilizar nuestra aplicación de manera efectiva para ventas.",
    author: "Jane Doe",
    avatar: image1,
    date: "11 de enero de 2022",
    readTime: "5 min de lectura",
    image: avatar4,
  },
  {
    id: 2,
    title: "Estrategias de marketing efectivas para comerciantes",
    category: "consejos",
    description: "Aumenta tu visibilidad con técnicas de publicidad dirigidas.",
    author: "John Smith",
    avatar: image2,
    date: "10 de febrero de 2022",
    readTime: "7 min de lectura",
    image: avatar5,
  },
  {
    id: 3,
    title: "Entendiendo el compromiso del usuario en el comercio electrónico",
    category: "Ideas",
    description:
      "Aprende cómo el compromiso del usuario impulsa las ventas y la lealtad.",
    author: "Emily Johnson",
    avatar: image3,
    date: "15 de marzo de 2022",
    readTime: "6 min de lectura",
    image: avatar6,
  },
];

export default function BlogSectionNext() {
  return (
    <section className="py-12 bg-white px-4 md:px-28">
      <div className=" mb-10">
        <h2 className="text-3xl  md:text-4xl font-bold font-gloock text-gray-900 mb-10">
          Pautas
        </h2>
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
    </section>
  );
}
