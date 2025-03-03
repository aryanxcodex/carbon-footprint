import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import themeStore from "../store/themeStore";

const Footer = () => {
  const { theme } = themeStore((state) => state);

  return (
    <footer
      className={`w-full py-8 px-6 md:px-10 border-t transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#0b3d2f] border-green-800 text-white"
          : "bg-gradient-to-r from-green-100 to-green-300 border-green-200 text-green-900"
      }`}
    >
      <div className="max-w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Logo and Description */}
        <div className="mb-6 md:mb-0 w-full md:w-1/3">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            🌍 Green Future
          </h1>
          <p
            className={`mt-2 text-sm ${
              theme === "dark" ? "text-green-300" : "text-green-700"
            }`}
          >
            Together for a greener future. 🌱
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full md:w-1/3">
          <Link
            to="/"
            className={`transition-colors duration-300 ease-in-out ${
              theme === "dark"
                ? "text-green-300 hover:text-white"
                : "text-green-700 hover:text-green-900"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`transition-colors duration-300 ease-in-out ${
              theme === "dark"
                ? "text-green-300 hover:text-white"
                : "text-green-700 hover:text-green-900"
            }`}
          >
            About
          </Link>
          <Link
            to="/signup"
            className={`transition-colors duration-300 ease-in-out ${
              theme === "dark"
                ? "text-green-300 hover:text-white"
                : "text-green-700 hover:text-green-900"
            }`}
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className={`transition-colors duration-300 ease-in-out ${
              theme === "dark"
                ? "text-green-300 hover:text-white"
                : "text-green-700 hover:text-green-900"
            }`}
          >
            Login
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6 md:mt-0 w-full md:w-1/3 justify-center md:justify-end">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 ease-in-out ${
              theme === "dark"
                ? "text-green-300 hover:text-green-500"
                : "text-green-700 hover:text-green-900"
            }`}
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 ease-in-out ${
              theme === "dark"
                ? "text-green-300 hover:text-green-500"
                : "text-green-700 hover:text-green-900"
            }`}
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 ease-in-out ${
              theme === "dark"
                ? "text-green-300 hover:text-green-500"
                : "text-green-700 hover:text-green-900"
            }`}
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 ease-in-out ${
              theme === "dark"
                ? "text-green-300 hover:text-green-500"
                : "text-green-700 hover:text-green-900"
            }`}
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div
        className={`mt-8 pt-4 text-sm text-center ${
          theme === "dark" ? "text-green-300" : "text-green-700"
        }`}
      >
        © {new Date().getFullYear()} Carbon Footprint. All rights reserved. 🌎
      </div>
    </footer>
  );
};

export default Footer;
