import React from "react";
import AboutSecondSec from "../components/about/AboutSecondSec";
import AboutMainSec from "../components/about/aboutmainsec";
import AboutThird from "../components/about/AboutThird";
import TeamSection from "../components/about/TeamSection";
import AboutForth from "../components/about/AboutForth";
import SixthMainScreen from "../components/home/SixthMainScreen";

const Aboutus = () => {
  return (
    <div>
      <AboutMainSec />
      <AboutSecondSec />
      <AboutThird />
      <TeamSection />
      <AboutForth />
      <SixthMainScreen />
    </div>
  );
};

export default Aboutus;
