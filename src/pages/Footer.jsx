import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f111c] text-white py-12 px-6 md:px-16 ">
      <div className="rounded-t-3xl bg-gray-900 p-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          {/* Left Section */}

          <div className="w-full md:w-1/2">
            <div className="mb-4">
              <Link to="/">
                <img
                  src={logo}
                  alt="DreamCourt Logo"
                  className="object-contain w-[280px] h-[59px]"
                />
              </Link>
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Stay Connected With Our Community
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Join us for the latest updates and features in our Discord
              community
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-full text-sm font-medium">
                Learn More
              </button>
              <button className="border border-purple-500 px-5 py-2 rounded-full text-sm font-medium hover:bg-purple-600 transition">
                Sign Up
              </button>
            </div>
          </div>
          {/* Right Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            {/* Links */}
            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              <div className="flex flex-col space-y-2">
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/support">Support Center</Link>
                <Link to="/community">Community Forum</Link>
                <Link to="/blog">Blog Posts</Link>
              </div>
              <div className="flex flex-col space-y-2">
                <Link to="/updates">Game Updates</Link>
                <Link to="/faq">FAQ Sections</Link>
                <Link to="/feedback">Feedback Forum</Link>
                <Link to="/careers">Careers Page</Link>
                <Link to="/press-kit">Press Kit</Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-xl">
              <FaFacebookF className="hover:text-purple-400 cursor-pointer" />
              <FaInstagram className="hover:text-purple-400 cursor-pointer" />
              <FaTwitter className="hover:text-purple-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-purple-400 cursor-pointer" />
              <FaYoutube className="hover:text-purple-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-2">
        <p>© 2025 DreamCourt. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/cookies">Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
