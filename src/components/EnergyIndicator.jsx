import { useContext } from 'react'
import useEnergyStore from '../store/energySTore'

const EnergyIndicator = () => {
  const { energyUsage, savedEnergy, isLowEnergyMode } = useEnergyStore()
  
  // Convert to more readable units
  const formatEnergy = (value) => {
    if (value < 0.001) {
      return `${(value * 1000000).toFixed(2)} μWh`
    } else if (value < 1) {
      return `${(value * 1000).toFixed(2)} mWh`
    } else {
      return `${value.toFixed(2)} Wh`
    }
  }
  
  return (
    <div className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
      <div className={`w-2 h-2 rounded-full mr-1 ${
        isLowEnergyMode ? 'bg-green-500' : 'bg-yellow-500'
      }`}></div>
      <span title={`Energy saved: ${formatEnergy(savedEnergy)}`}>
        {formatEnergy(savedEnergy)}
      </span>
    </div>
  )
}

export default EnergyIndicator