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
    <div className="landing-page font-sans min-h-screen bg-green-50 text-green-900">
      {/* Hero Section - Full Screen with Globe Image */}
      <section
        className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?earth,globe')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide leading-tight">
            Reduce Your Carbon Footprint 🌍
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Every small step counts towards a greener future. Let’s build a
            sustainable world together.
          </p>
          <Link
            to="/user/dashboard"
            className="mt-6 inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
          >
            Dashboard
          </Link>
        </div>
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
