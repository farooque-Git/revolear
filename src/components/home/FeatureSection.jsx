import React from "react";
import basketballplayer from "../../assets/basketballplayer.png";
import featurebg from "../../assets/featurebg.png";
import LoginBtn from "../button/LoginBtn";

const FeaturesSection = () => {
  return (
    <section className="bg-gray-900 text-white  px-10 py-16 space-y-16">
      {/* Block 1: Secure */}
      <div className="relative  rounded-xl overflow-hidden shadow-lg">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${featurebg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br h-86 opacity-80" />
        <div className="relative p-10 text-white">
          <h3 className="text-sm uppercase font-semibold mb-10">Secure</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 max-w-2xl">
            Effortless Users Authentication with Discord
          </h2>
          <p className="text-lg max-w-2xl mb-10">
            Login seamlessly using your Discord account. Experience instant
            access to your team dashboard and management tools.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm text-white/80">
                Authorized quickly and securely with OAuth 2.0
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm text-white/80">
                Stats loaded and start managing today!
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <LoginBtn />
            <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Block 2: Manage */}
      <div className="bg-gray-800  rounded-xl mx-8 p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start md:items-center shadow-lg">
        <div className="flex flex-col h-full">
          <div>
            <h3 className="text-sm uppercase font-semibold mb-10">Manage</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Effortless Team Management at Your Fingertips
            </h2>
            <p className="text-lg text-gray-300 mb-20">
              Take control of your team’s lineup and stats with our intuitive
              dashboard. Streamlining manager decision and player usage.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-lg mb-1">Team Roster</h4>
                <p className="text-sm text-gray-400">
                  View and manage your players with ease.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg">Game Stats</h4>
                <p className="text-sm text-gray-400">
                  Access game-time performance data quickly.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-auto">
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
              Learn More
            </button>
            <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Sign Up
            </button>
          </div>
        </div>
        <div>
          <img
            src={basketballplayer} // Replace with your actual image
            alt="Basketball Player"
            className="w-full max-w-[520px] h-auto object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
