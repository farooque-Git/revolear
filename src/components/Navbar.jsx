import React from "react";
import { Link } from "react-router-dom";
import Signup from "./button/Signup";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-transparent text-white">
      {/* Logo Section */}
      <div className="text-xl font-bold flex items-center gap-2">
        <Link to="/">
          <img
            src={logo}
            alt="DreamCourt Logo"
            className="object-contain w-[376px] h-[59px]"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 text-sm">
        <li className="font-semibold border-white cursor-pointer">
          <Link to="/" className="transition-colors hover:text-purple-400">
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            to="/features"
            className="transition-colors hover:text-purple-400"
          >
            Features
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/team" className="transition-colors hover:text-purple-400">
            Team Management
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/about" className="transition-colors hover:text-purple-400">
            About Us
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            to="/contact"
            className="transition-colors hover:text-purple-400"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* CTA Button */}
      <Signup />
    </nav>
  );
}
