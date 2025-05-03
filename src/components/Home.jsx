import React from "react";
import MainSection from "./home/MainSection";

import ThirdMainScreen from "./home/ThirdMainScreen";
import ForthMainScreeen from "./home/ForthMainScreeen";
import FifthMainScreen from "./home/FifthMainScreen";
import SecondMainScreen from "./home/SecondMainScreen";

const Home = () => {
  return (
    <div>
      <MainSection />
      <SecondMainScreen />
      <ThirdMainScreen />
      <ForthMainScreeen />
      <FifthMainScreen />
    </div>
  );
};

export default Home;
