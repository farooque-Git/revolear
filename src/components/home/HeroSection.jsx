import React from "react";
import heroImage from "../../assets/hero.jpg";
import LearnMorebtn from "../button/LearnMorebtn";
import JoinUsBtn from "../button/JoinUsBtn";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Basketball court hero background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Overlay and Content */}
      <div className="flex-grow flex flex-col justify-center items-start px-6 md:px-20 py-10 bg-black/40 text-white">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
          Elevate Your Game with DreamCourt
        </h1>
        <p className="max-w-xl text-lg mb-8">
          Unlock your team’s full potential with DREAMCOURT, the ultimate
          platform for basketball enthusiasts. Discover a world of limitless
          possibilities, where technology meets passion. Elevate your game,
          amplify your skills, and experience the future of basketball today.
        </p>
        <div className="flex gap-4">
          <LearnMorebtn />
          <JoinUsBtn />
        </div>
      </div>
    </div>
  );
}
