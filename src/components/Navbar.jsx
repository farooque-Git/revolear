import React from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import NotificationDropdown from "./notification/NotificationDropdown ";

const Navbar = ({ onToggleSidebar }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-[#F9F8F8] shadow-md w-full">
      {/* Left Section */}
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="Revolear" className="h-8 w-8 cursor-pointer" />
        <span className="font-semibold text-lg text-black cursor-pointer">
          Revolear
        </span>
      </Link>

      {/* Right Section */}
      <div className="flex items-center gap-6 ml-auto">
        <NotificationDropdown />
        <button onClick={onToggleSidebar} className="text-2xl text-black">
          <FiMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
