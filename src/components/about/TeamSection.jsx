import React from "react";
import alice from "../../assets/team/image.png";
import cto from "../../assets/team/image-2.png";
import james from "../../assets/team/image-3.png";
import laura from "../../assets/team/image-5.png";
import michael from "../../assets/team/image-6.png";
import david from "../../assets/team/image-7.png";
import sarah from "../../assets/team/image-1.png";
import emily from "../../assets/team/image-4.png";
import { GradientOutlineButton } from "./../button/Button";

const teamMembers = [
  {
    name: "Alice Johnson",
    title: "Consejo Delegado y Fundador",
    image: alice,
    description:
      "Estableció la visión de REVOLEAR y lidera la innovación estratégica y la cultura de la empresa.",
  },
  {
    name: "Mark Smith",
    title: "CTO",
    image: cto,
    description:
      "Dirige el equipo de tecnología para garantizar soluciones escalables y seguras.",
  },
  {
    name: "Sarah Lee",
    title: "Directora de Marketing",
    image: sarah,
    description:
      "Lidera las estrategias de marca y comunicación para aumentar la visibilidad global.",
  },
  {
    name: "James Brown",
    title: "Jefe de producto",
    image: james,
    description:
      "Supervisa el desarrollo de productos para satisfacer las necesidades del mercado.",
  },
  {
    name: "Emily Davis",
    title: "Diseñador UX",
    image: emily,
    description:
      "Hace que nuestras plataformas sean intuitivas y centradas en el usuario.",
  },
  {
    name: "Michael Wilson",
    title: "Responsable financiero",
    image: michael,
    description:
      "Gestiona nuestras finanzas para impulsar un crecimiento sostenible.",
  },
  {
    name: "Laura Green",
    title: "Atención al cliente",
    image: laura,
    description:
      "Garantiza que nuestros usuarios reciban soporte rápido y eficiente.",
  },
  {
    name: "David Clark",
    title: "Analista de datos",
    image: david,
    description:
      "Extrae información valiosa para tomar decisiones basadas en datos.",
  },
];

const TeamSection = () => {
  return (
    <section className="px-4 md:px-20 py-16 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Nuestro equipo</h2>
      <p className="text-gray-600 mb-10">
        Conozca a las mentes apasionadas que hay detrás de REVOLEAR®.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className=" shadow-md rounded-lg overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[329px] object-cover"
            />
            <div className="p-4 text-center bg-gradient-to-b from-gray-100 to-gray-400">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-700 font-medium">
                {member.title}
              </p>
              <p className="text-sm text-gray-800 mt-6">{member.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Hiring CTA */}
      <div className="mt-16 text-left">
        <h3 className=" md:text-[50px] font-gloock font-semibold  leading-tight">
          ¡Estamos <br />
          contratando!
        </h3>
        <p className="text-gray-600 mt-2 mb-6 text-base md:text-lg">
          Únete a nuestro dinámico equipo y deja huella.
        </p>
        <GradientOutlineButton>Puestos vacantes</GradientOutlineButton>
      </div>
    </section>
  );
};

export default TeamSection;
