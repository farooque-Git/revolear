import React from "react";
import aboutbg from "../../assets/aboutbg.png";
import LearnMorebtn from "../button/LearnMorebtn";
import JoinUsBtn from "../button/JoinUsBtn";

export default function TeamHeroSection() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
      style={{ backgroundImage: `url(${aboutbg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 py-10">
        <h3 className="text-xl font-medium mb-2">Innovative</h3>

        <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
          Empowering Team Play
        </h1>

        <p className="max-w-xl text-lg mb-8">
          At Dreamcourt, we are dedicated to revolutionizing the way teams
          connect and compete. Our mission is to provide a seamless platform
          that enhances collaboration and elevates the gaming experience.
        </p>

        <div className="flex gap-4 justify-center">
          <LearnMorebtn />
          <JoinUsBtn />
        </div>
      </div>
    </div>
  );
}
