import React from "react";
import heroImage from "../../assets/hero.jpg";
import LearnMorebtn from "./../button/LearnMorebtn";
import JoinUsBtn from "./../button/JoinUsBtn";

export default function HeroSection() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* HERO TEXT SECTION */}
      <div className="flex-grow flex flex-col justify-center items-start px-20 py-10 bg-black/40 text-white">
        <h1 className="text-5xl font-semibold mb-4 leading-tight">
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
