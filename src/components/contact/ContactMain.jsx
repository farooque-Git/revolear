import React from "react";
import contactbg from "../../assets/contactbg.png";
import LearnMorebtn from "../button/LearnMorebtn";
import JoinUsBtn from "../button/JoinUsBtn";

export default function ContactMain() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col">
        {/* Background Image */}
        <img
          src={contactbg}
          alt="Feature section background"
          className="absolute inset-0 w-full h-auto object-cover -z-10"
        />

        {/* Overlay and Content */}
        <div className="flex-grow flex flex-col justify-center items-center px-6 md:px-20 py-10  text-white text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
            Get in Touch
          </h1>

          <p className="max-w-xl text-lg mb-8">
            We’re here to help with any questions or feedback you may have.
          </p>

          <div className="flex gap-4 justify-center">
            <LearnMorebtn />
            <JoinUsBtn />
          </div>
        </div>
      </section>
    </>
  );
}
