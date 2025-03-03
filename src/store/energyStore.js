import { create } from 'zustand';

const useEnergyStore = create((set) => ({
  isLowEnergyMode: false,
  setIsLowEnergyMode: (value) => set({ isLowEnergyMode: value }),

  isDarkMode: false,
  setIsDarkMode: (value) => set({ isDarkMode: value }),

  energyUsage: 0,
  setEnergyUsage: (value) => set({ energyUsage: value }),

  savedEnergy: 0,
  setSavedEnergy: (value) => set({ savedEnergy: value }),

  batteryLevel: 100,
  setBatteryLevel: (value) => set({ batteryLevel: value }),
}));

export default useEnergyStore;
