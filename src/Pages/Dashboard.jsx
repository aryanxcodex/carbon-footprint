// Dashboard.jsx
import React from "react";

const metrics = [
  {
    title: "Largest Contentful Paint (LCP)",
    value: "2.5 s",
    description: "Time until the largest visible element is rendered.",
  },
  {
    title: "First Contentful Paint (FCP)",
    value: "1.2 s",
    description: "Time until the first content is rendered.",
  },
  {
    title: "Total Blocking Time (TBT)",
    value: "150 ms",
    description: "Duration during which the main thread is blocked.",
  },
  {
    title: "Cumulative Layout Shift (CLS)",
    value: "0.05",
    description: "Measure of visual stability as the page loads.",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Performance Dashboard
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Monitor your website's performance metrics in real-time.
        </p>
      </header>

      {/* Main Metrics Grid */}
      <main className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 transition transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {metric.title}
              </h2>
              <p className="text-3xl font-bold text-green-600">
                {metric.value}
              </p>
              <p className="text-gray-500 text-sm mt-2">{metric.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-500">
        <p>Data updated every minute.</p>
      </footer>
    </div>
  );
};

export default Dashboard;