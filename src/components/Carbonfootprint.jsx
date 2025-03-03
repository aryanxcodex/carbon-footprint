// CarbonFootprintPage.jsx
import React from "react";

const CarbonFootprintPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Your Carbon Footprint</h1>
          <p className="text-lg">
            Learn how your actions impact the planet—and how you can make a
            difference.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* What is Carbon Footprint */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            What is a Carbon Footprint?
          </h2>
          <p className="text-gray-700 mb-4">
            Your carbon footprint is the total greenhouse gas emissions caused
            by your actions—everything from driving your car to powering your
            home.
          </p>
          {/* Optimized image; replace the src with an actual optimized image URL or inline SVG */}
          <img
            src="/assets/carbon-footprint.svg"
            alt="Carbon Footprint Illustration"
            className="w-full max-w-md mx-auto"
            loading="lazy"
          />
        </section>

        {/* Why It Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Why It Matters</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Accelerates climate change</li>
            <li>Contributes to environmental degradation</li>
            <li>Impacts human health</li>
            <li>Increases energy consumption</li>
          </ul>
        </section>

        {/* How to Reduce Your Carbon Footprint */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">
            How to Reduce Your Carbon Footprint
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-bold mb-2">Switch to Renewables</h3>
              <p className="text-gray-700">
                Opt for renewable energy sources like solar and wind to reduce
                reliance on fossil fuels.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-bold mb-2">Reduce, Reuse, Recycle</h3>
              <p className="text-gray-700">
                Adopt sustainable practices to minimize waste and conserve
                resources.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-bold mb-2">Energy Efficiency</h3>
              <p className="text-gray-700">
                Use energy-efficient appliances and be mindful of your energy
                consumption.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-xl font-bold mb-2">Smart Transportation</h3>
              <p className="text-gray-700">
                Use public transportation, carpool, bike, or walk to reduce
                carbon emissions.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-gray-700">
          <p className="text-sm">
            Every small step counts—start reducing your carbon footprint today!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CarbonFootprintPage;
