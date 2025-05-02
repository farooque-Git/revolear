import React from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import logo from "../assets/logo.png";

const Navbar = ({ onToggleSidebar }) => {
  return (
    <div className="flex items-center justify-between px-4 py-4 bg-[#F9F8F8] shadow-md">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="text-2xl md:hidden" // Hide the menu icon on larger screens
        >
          <FiMenu />
        </button>
        <img src={logo} alt="Revolear" className="h-8 w-8" />
        <span className="font-semibold text-lg text-black">Revolear</span>
      </div>

      {/* Center Search Bar */}
      <div className="hidden md:block w-[328px] mx-8">
        <input
          type="text"
          placeholder="Buscar"
          className="w-full max-w-xl px-4 py-2 rounded-full bg-[#C8E6E6] text-black placeholder:text-gray-700"
        />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        <FiSearch className="text-xl text-black cursor-pointer" />
        <div className="relative">
          <IoMdNotifications className="text-2xl text-yellow-400 cursor-pointer" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
