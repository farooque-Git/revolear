import React from "react";
import Signup from "./button/Signup";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-transparent text-white">
      {/* Logo Section */}
      <div className="text-xl font-bold flex items-center gap-2">
        <img src={logo} alt="DreamCourt Logo" className="object-contain h-10" />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 text-sm">
        <li className="font-semibold border-b-2 border-white cursor-pointer">
          Home
        </li>
        <li className="cursor-pointer hover:text-purple-400">Features</li>
        <li className="cursor-pointer hover:text-purple-400">
          Team Management
        </li>
        <li className="cursor-pointer hover:text-purple-400">About Us</li>
        <li className="cursor-pointer hover:text-purple-400">Contact</li>
      </ul>

      {/* CTA Button */}
      <Signup />
    </nav>
  );
}
