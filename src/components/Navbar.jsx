import React from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import logo from "../assets/logo.png";

const Navbar = ({ onToggleSidebar }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-[#F9F8F8] shadow-md w-full">
      {/* Left Section - Logo and Title */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Revolear" className="h-8 w-8 cursor-pointer" />
        <span className="font-semibold text-lg text-black cursor-pointer">
          Revolear
        </span>
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center gap-6 ml-auto">
        {/* <FiSearch className="text-xl text-black cursor-pointer" />
        <div className="relative cursor-pointer">
          <IoMdNotifications className="text-2xl text-yellow-400" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </div> */}
        <button onClick={onToggleSidebar} className="text-2xl text-black">
          <FiMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
