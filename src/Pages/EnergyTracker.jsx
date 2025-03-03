import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import useEnergyStore from '../store/energySTore'

// Register Chart.js components once
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const EnergyTracker = () => {
  const {
    energyUsage,
    savedEnergy,
    isLowEnergyMode,
    setEnergyUsage,
    setSavedEnergy,
  } = useEnergyStore()

  const [energyData, setEnergyData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Energy Usage (kWh)',
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Energy Saved (kWh)',
        data: [],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  })

  // Mock data generator — simulates energy usage & savings
  useEffect(() => {
    const updateMockData = () => {
      const newUsage = (Math.random() * 0.05).toFixed(6) // Random usage between 0 and 0.05 kWh
      const newSaved = (Math.random() * 0.03).toFixed(6) // Random savings between 0 and 0.03 kWh

      setEnergyUsage(parseFloat(newUsage))
      setSavedEnergy(parseFloat(newSaved))
    }

    const interval = setInterval(updateMockData, 5000) // Update every 5 seconds
    updateMockData() // Initial data update

    return () => clearInterval(interval)
  }, [setEnergyUsage, setSavedEnergy])

  // Chart data updater — keeps 10 latest readings
  useEffect(() => {
    const now = new Date()
    const timeLabel = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })

    setEnergyData((prevData) => {
      const labels = [...prevData.labels, timeLabel].slice(-10)
      const usageData = [...prevData.datasets[0].data, energyUsage].slice(-10)
      const savedData = [...prevData.datasets[1].data, savedEnergy].slice(-10)

      return {
        labels,
        datasets: [
          { ...prevData.datasets[0], data: usageData },
          { ...prevData.datasets[1], data: savedData },
        ],
      }
    })
  }, [energyUsage, savedEnergy])

  // Chart options (respecting Low Energy Mode)
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: isLowEnergyMode ? 0 : 1000,
    },
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Real-Time Energy Metrics' },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Energy (kWh)' },
      },
    },
  }

  const carbonFootprint = energyUsage * 0.5 // kg CO2 per kWh
  const carbonSaved = savedEnergy * 0.5 // kg CO2 per kWh

  return (
    <div className="card p-4">
      <h2 className="text-xl font-semibold mb-4">Energy Tracker</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-100 dark:bg-dark-light p-3 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">Current Usage</p>
          <p className="text-xl font-semibold">{energyUsage.toFixed(6)} kWh</p>
          <p className="text-xs text-gray-500">≈ {carbonFootprint.toFixed(6)} kg CO₂</p>
        </div>

        <div className="bg-gray-100 dark:bg-dark-light p-3 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">Energy Saved</p>
          <p className="text-xl font-semibold text-green-600">{savedEnergy.toFixed(6)} kWh</p>
          <p className="text-xs text-gray-500">≈ {carbonSaved.toFixed(6)} kg CO₂ reduced</p>
        </div>

        <div className="bg-gray-100 dark:bg-dark-light p-3 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">Energy Mode</p>
          <p className="text-xl font-semibold">
            {isLowEnergyMode ? (
              <span className="text-green-600">Eco-Friendly</span>
            ) : (
              <span className="text-yellow-600">Standard</span>
            )}
          </p>
          <p className="text-xs text-gray-500">
            {isLowEnergyMode ? 'Optimized for efficiency' : 'Normal performance'}
          </p>
        </div>
      </div>

      <div className="h-64">
        <Line options={options} data={energyData} />
      </div>

      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p>
          <strong>How it works:</strong> This tracker simulates energy consumption based on random
          values. In a real-world app, this could come from sensors, APIs, or device telemetry.
        </p>
      </div>
    </div>
  )
}

export default EnergyTracker
