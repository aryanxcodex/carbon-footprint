import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faChartLine, faRecycle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import themeStore from "../store/themeStore";

// URL of the Earth GIF (you can replace this with any hosted image or link to an Earth image you have)
const earthGifUrl = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnQzdjg0eXpqcW5rdjVlbm5tZ3V4bjd6ejRqbHBhcmtrNnp5N3BydiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7WIB00yXujVt4WEo/giphy.gif";

const LandingPage = () => {
  const { theme } = themeStore((state) => state);

  return (
    <div
      className={`w-full min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0b3d2f] text-white" : "bg-black text-green-900"
      }`}
    >
      {/* Hero Section */}
      <section className="w-full h-screen flex flex-col justify-center items-center text-center px-6 md:px-12">

      <img
              src={earthGifUrl}
              alt="Revolving Earth"
              className="w-32 h-32 md:w-40 md:h-40 animate-spin-slow"
            />
        <h1 className="text-5xl font-bold mb-6">
          Reduce Your <span className="text-green-600">Carbon Footprint</span>
        </h1>
        <p className="text-lg mb-8">
          Join us in the fight against climate change. Discover your environmental impact and take action to reduce it today.
        </p>
        <Link
          to="/signup"
          className="py-3 px-6 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
        >
          Get Started
        </Link>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-green-100 to-green-300">
        <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center text-center">
            <FontAwesomeIcon icon={faLeaf} className="text-green-700 text-6xl mb-4" />
            <h3 className="text-2xl font-bold">500,000+ Trees Planted</h3>
            <p className="text-lg">
              We contribute to reforestation projects across the globe.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FontAwesomeIcon icon={faChartLine} className="text-green-700 text-6xl mb-4" />
            <h3 className="text-2xl font-bold">1M+ Tons CO2 Saved</h3>
            <p className="text-lg">
              Our community has actively reduced carbon emissions worldwide.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FontAwesomeIcon icon={faRecycle} className="text-green-700 text-6xl mb-4" />
            <h3 className="text-2xl font-bold">80% Recycling Rate</h3>
            <p className="text-lg">
              We've helped organizations reach high recycling efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section with Revolving Earth Image */}
      <section className="py-16 px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold mb-8">Take Action Now</h2>
        <p className="text-lg mb-8">
          Calculate your carbon footprint and receive personalized recommendations to reduce it. Together, we can make a difference.
        </p>
        <Link
          to="/calculate"
          className="py-3 px-6 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 inline-block"
        >
          Calculate Now
        </Link>
        <div className="mt-8 flex justify-center items-center">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <p className="mt-4 text-lg">Visit Google Earth</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
