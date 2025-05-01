import React from "react";
import featurebg from "../../assets/featurebg.png";
import LearnMorebtn from "../button/LearnMorebtn";
import JoinUsBtn from "../button/JoinUsBtn";
import FeatureSecondBlock from "./FeatureSecondBlock";

export default function FeatureMainSec() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col">
        {/* Background Image */}
        <img
          src={featurebg}
          alt="Feature section background"
          className="absolute inset-0 w-full h-auto object-cover -z-10"
        />

        {/* Overlay and Content */}
        <div className="flex-grow flex flex-col justify-center items-center px-6 md:px-20 py-10  text-white text-center">
          <h3 className="text-sm uppercase tracking-widest text-purple-300 mb-2">
            Innovative
          </h3>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
            Explore Our Features
          </h1>

          <p className="max-w-xl text-lg mb-8">
            Discover the powerful features that enhance your gaming experience
            with DREAMCOURT Web Apps.
          </p>

          <div className="flex gap-4 justify-center">
            <LearnMorebtn />
            <JoinUsBtn />
          </div>
        </div>
      </section>
      <div className="mt-[-155px]">
        <FeatureSecondBlock />
      </div>
    </>
  );
}
