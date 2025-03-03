import React, { useState, useEffect } from "react";
import themeStore from "../store/themeStore";

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    lcp: "Loading...",
    fcp: "Loading...",
    cls: "Loading...",
    tbt: "Loading...",
  });

  const { theme } = themeStore((state) => state);

  useEffect(() => {
    // LCP using PerformanceObserver
    if ("PerformanceObserver" in window) {
      let lcpValue = 0;
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        lcpValue = lastEntry.renderTime || lastEntry.loadTime;
        setMetrics((prev) => ({
          ...prev,
          lcp: (lcpValue / 1000).toFixed(2) + " s",
        }));
      });
      try {
        lcpObserver.observe({
          type: "largest-contentful-paint",
          buffered: true,
        });
      } catch (err) {
        console.error("LCP observer error:", err);
      }
    }

    // FCP using performance entries from 'paint'
    const paintEntries = performance.getEntriesByType("paint");
    const fcpEntry = paintEntries.find(
      (entry) => entry.name === "first-contentful-paint"
    );
    if (fcpEntry) {
      setMetrics((prev) => ({
        ...prev,
        fcp: (fcpEntry.startTime / 1000).toFixed(2) + " s",
      }));
    } else {
      // Fallback for browsers that may not have it immediately available
      setTimeout(() => {
        const delayedPaintEntries = performance.getEntriesByType("paint");
        const delayedFcp = delayedPaintEntries.find(
          (entry) => entry.name === "first-contentful-paint"
        );
        if (delayedFcp) {
          setMetrics((prev) => ({
            ...prev,
            fcp: (delayedFcp.startTime / 1000).toFixed(2) + " s",
          }));
        }
      }, 1000);
    }

    // CLS using PerformanceObserver
    let clsValue = 0;
    if ("PerformanceObserver" in window) {
      const clsObserver = new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics((prev) => ({ ...prev, cls: clsValue.toFixed(2) }));
      });
      try {
        clsObserver.observe({ type: "layout-shift", buffered: true });
      } catch (err) {
        console.error("CLS observer error:", err);
      }
    }

    // TBT using long tasks
    const calculateTBT = () => {
      const longTasks = performance.getEntriesByType("longtask");
      let totalBlockingTime = 0;
      longTasks.forEach((task) => {
        // Only count blocking time above 50ms per task
        const blockingTime = task.duration - 50;
        if (blockingTime > 0) {
          totalBlockingTime += blockingTime;
        }
      });
      setMetrics((prev) => ({
        ...prev,
        tbt: Math.round(totalBlockingTime) + " ms",
      }));
    };

    // Delay TBT calculation to allow long tasks to accumulate
    const tbtTimeout = setTimeout(calculateTBT, 5000);

    return () => {
      clearTimeout(tbtTimeout);
    };
  }, []);

  return (
    <div
      className={`min-h-screen p-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0b3d2f] text-white" : "bg-gradient-to-r from-green-100 to-green-300"
      }`}
    >
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center mt-10">
          Performance Dashboard
        </h1>
        <p className="text-center mt-2 text-lg">
          Monitor your website's performance metrics in real-time.
        </p>
      </header>

      {/* Main Metrics Grid */}
      <main className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* LCP */}
          <div className="bg-white dark:bg-[#1b5f47] rounded-lg shadow-lg p-6 transition-all hover:shadow-xl transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">Largest Contentful Paint (LCP)</h2>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">{metrics.lcp}</p>
            <p className="text-sm mt-2">Time until the largest visible element is rendered.</p>
          </div>

          {/* FCP */}
          <div className="bg-white dark:bg-[#1b5f47] rounded-lg shadow-lg p-6 transition-all hover:shadow-xl transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">First Contentful Paint (FCP)</h2>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">{metrics.fcp}</p>
            <p className="text-sm mt-2">Time until the first content is rendered.</p>
          </div>

          {/* TBT */}
          <div className="bg-white dark:bg-[#1b5f47] rounded-lg shadow-lg p-6 transition-all hover:shadow-xl transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">Total Blocking Time (TBT)</h2>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">{metrics.tbt}</p>
            <p className="text-sm mt-2">Duration during which the main thread is blocked.</p>
          </div>

          {/* CLS */}
          <div className="bg-white dark:bg-[#1b5f47] rounded-lg shadow-lg p-6 transition-all hover:shadow-xl transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">Cumulative Layout Shift (CLS)</h2>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">{metrics.cls}</p>
            <p className="text-sm mt-2">Measure of visual stability as the page loads.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-500 dark:text-gray-400">
        <p>Data updated in real-time.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
