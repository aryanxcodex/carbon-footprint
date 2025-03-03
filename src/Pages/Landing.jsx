import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faGlobe,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  return (
    <div className="landing-page font-sans min-h-screen bg-green-50 text-green-900">
      {/* Hero Section - Full Screen with Globe Image */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide leading-tight">
            Reduce Your Carbon Footprint 🌍
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Every small step counts towards a greener future. Let’s build a
            sustainable world together.
          </p>
          <Link
            to="/learn-more"
            className="mt-6 inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
        {/* Subtle gradient fade at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-900 to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-green-100 to-white text-center">
        <h2 className="text-3xl font-bold text-green-800">Why It Matters</h2>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
          Learn how your daily habits impact the planet and how small changes
          can lead to a healthier Earth.
        </p>

        <div className="grid md:grid-cols-3 gap-8 px-6 mt-12 max-w-6xl mx-auto">
          {/* Feature Card */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            <FontAwesomeIcon
              icon={faLeaf}
              className="text-green-600 text-5xl mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800">
              Sustainable Living
            </h3>
            <p className="mt-2 text-gray-600">
              Adopt eco-friendly habits that reduce waste, save energy, and
              protect nature.
            </p>
          </div>

          {/* Feature Card */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-green-600 text-5xl mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800">
              Global Impact
            </h3>
            <p className="mt-2 text-gray-600">
              See how personal choices contribute to a cleaner, greener planet
              for all.
            </p>
          </div>

          {/* Feature Card */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center">
            <FontAwesomeIcon
              icon={faChartLine}
              className="text-green-600 text-5xl mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800">
              Track Your Progress
            </h3>
            <p className="mt-2 text-gray-600">
              Use our tools to calculate your footprint and celebrate your
              sustainability milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Make a Difference?</h2>
        <p className="mt-2 text-lg">
          Join a global community working towards sustainability. Together, we
          can build a brighter future.
        </p>
        <Link
          to="/get-involved"
          className="mt-6 inline-block px-8 py-3 bg-white text-green-700 font-semibold rounded-full shadow-lg hover:bg-green-100 transition-transform transform hover:scale-105"
        >
          Join the Movement
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-green-900 text-green-200 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Carbon Footprint | Every action counts 🌱
        </p>
      </footer>
    </div>
  );
};

export default Landing;
