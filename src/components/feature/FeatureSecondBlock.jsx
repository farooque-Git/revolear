import React from "react";
import featuregroup from "../../assets/featuregroup.png";
import featurebg1 from "../../assets/featurebg1.png";
import LoginBtn from "../button/LoginBtn";
import feature3 from "../../assets/feature3.png";
import feature4 from "../../assets/feature4.png";
import feature5 from "../../assets/feature5.png";

const FeatureSecondBlock = () => {
  return (
    <section className="bg-gray-900 text-white  px-10 py-16 space-y-16">
      {/* Block 1: Secure */}
      <div className="relative  rounded-xl overflow-hidden shadow-lg">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${featurebg1})` }}
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
            src={featuregroup}
            alt="feature Group"
            className="w-full max-w-[520px] h-auto object-cover mx-auto"
          />
        </div>
      </div>

      {/* block */}
      <div className="mx-8 p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start md:items-stretch shadow-lg">
        {/* Image Section */}
        <div>
          <img
            src={feature3}
            alt="feature"
            className="w-full max-w-[520px] h-auto object-cover mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-between h-full">
          {/* Heading at the top */}
          <h2 className="text-xl md:text-5xl font-bold mt-6">
            Experience Real-Time Game Simulation and Stay Updated on Player
            Stats
          </h2>

          {/* Centered paragraph */}
          <div className="flex-1 flex items-center">
            <p className="text-lg text-gray-300 mb-10">
              Our game simulation feature provides instant updates on player
              statistics and team standings. Enjoy seamless tracking of
              performance metrics right from your dashboard.
            </p>
          </div>

          {/* Bottom stats section */}
          <div className="grid grid-cols-2 gap-6 mb-[10px]">
            <div>
              <h4 className="font-bold text-lg mb-1">Stats</h4>
              <p className="text-sm text-gray-400">
                Stay informed with real-time updates and insights.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg">Standings</h4>
              <p className="text-sm text-gray-400">
                Monitor team performance and rankings effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* forth block */}
      <div className="flex items-start mx-8 p-10">
        {/* Left Section */}
        <div className="flex-1 pr-10">
          <h2 className="text-3xl font-bold">
            Stay Updated with Real-Time Notifications
          </h2>
        </div>

        {/* Vertical Divider */}
        <div className="w-[2px] bg-gray-400 h-28 mx-8"></div>

        {/* Right Section */}
        <div className="flex-1 pl-10">
          <p className="text-gray-400 max-w-xl">
            Our Discord integration ensures that you never miss a moment.
            Receive automatic notifications for game results, trade approvals,
            and player performance highlights directly in your Discord channel.
            Stay informed and engage with your team effortlessly.
          </p>
        </div>
      </div>

      {/* fifth */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 text-center text-white py-20
         gap-8"
        style={{
          background: "linear-gradient(to right, #111827, #555A64, #111827)",
        }}
      >
        <div>
          <h3 className="text-3xl font-semibold">Trade Approvals Made Easy</h3>
        </div>
        <div>
          <h3 className="text-3xl font-semibold">
            Instant Updates for Game Results
          </h3>
        </div>
        <div>
          <h3 className="text-3xl font-semibold">
            Player Performance Highlights Delivered
          </h3>
        </div>
      </div>

      <div className="py-20">
        <h2 className="text-5xl text-center font-bold">
          Experience the seamlessly journey
          <br />
          from login to game simulation.
        </h2>
      </div>

      {/* sixth */}
      <div
        className="flex flex-col items-center justify-center text-white gap-6 py-20 px-4"
        style={{
          background: "linear-gradient(to right, #111827, #555A64)",
        }}
      >
        <h3 className="text-xl font-semibold text-center max-w-lg">
          Effortlessly Team Management and Real-Time Game Updates
        </h3>

        <button className="w-96 mt-4 px-6 py-3 rounded-full text-white font-semibold border border-primaryGradientStart hover:bg-white/10 transition">
          Learn More
        </button>
      </div>

      {/* seventh */}
      <div className="mx-8 p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start md:items-stretch shadow-lg">
        {/* Image Section */}
        <div>
          <img
            src={feature4}
            alt="feature"
            className="w-full max-w-[520px] h-auto object-cover mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col h-full">
          <div>
            <h3 className="text-sm uppercase font-semibold mb-10">Empower</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Transform Your Basketball Management Experience
            </h2>
            <p className="text-lg text-gray-300 mb-20">
              Dreamcourt streamlines basketball team management, making it easy
              to organize, strategies and communicate, Experience real-time
              updates and seamless integration with Discord for an engaging team
              environment.
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
      </div>

      {/* eight */}
      <div className="relative overflow-hidden mx-[-60px] h-[500px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${feature5})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-800 to-black opacity-80" />

        {/* Centered Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl">
            Join the Dreamcourt Experience
          </h2>
          <p className="text-lg max-w-2xl">
            Get started with Dreamcourt by logging in through Discord and
            managing your team effortlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSecondBlock;
