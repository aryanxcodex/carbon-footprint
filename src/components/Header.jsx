import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faBars,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import themeStore from "../store/themeStore";

const Header = () => {
  const { theme, changeTheme } = themeStore((state) => state);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`w-full h-20 px-6 md:px-10 fixed top-0 left-0 shadow-md flex justify-between items-center z-10 border-b transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#0b3d2f] border-green-800 text-white"
          : "bg-gradient-to-r from-green-100 to-green-300 text-green-900 border-green-200"
      }`}
    >
      {/* Logo with Leaf Icon */}
      <div className="font-bold text-xl flex items-center gap-2">
        <FontAwesomeIcon icon={faLeaf} className="text-green-600 text-2xl" />
        Green Future
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={faBars} className="text-2xl text-green-700" />
      </div>

      {/* Navigation Links */}
      <div
        className={`absolute md:static top-20 left-0 w-full md:w-auto flex flex-col md:flex-row items-center gap-4 md:gap-10 py-4 md:py-0 px-6 md:px-0 transition-all duration-300 ${
          menuOpen ? "block" : "hidden md:flex"
        } ${
          theme === "dark"
            ? "bg-[#0b3d2f] md:bg-transparent text-white"
            : "bg-green-50 md:bg-transparent text-green-900"
        }`}
      >
        <Link
          to="/"
          className="py-2 px-4 rounded-md transition-colors duration-300 hover:bg-green-500 hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="py-2 px-4 rounded-md transition-colors duration-300 hover:bg-green-500 hover:text-white"
        >
          About
        </Link>
        <Link
          to="/signup"
          className="py-2 px-4 rounded-md transition-colors duration-300 hover:bg-green-500 hover:text-white"
        >
          Sign Up
        </Link>

        {/* Theme Toggle */}
        <FontAwesomeIcon
          icon={theme === "light" ? faMoon : faSun}
          className="cursor-pointer hover:text-green-600 transition-colors duration-300 text-xl"
          onClick={changeTheme}
        />

        {/* Login Button */}
        <Link
          to="/login"
          className="py-2 px-6 rounded-md transition duration-300 ease-in-out focus:ring-2 focus:ring-green-500 bg-green-100 text-green-800 hover:bg-green-600 hover:text-white"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Header;
