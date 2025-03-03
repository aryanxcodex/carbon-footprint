import { useRef, useEffect, useState, useContext } from 'react'
import Globe from 'react-globe.gl'
import useEnergyStore from '../store/energySTore'

const GlobeComponent = () => {
  const globeEl = useRef()
  const [countries, setCountries] = useState({ features: [] })
  const [globeReady, setGlobeReady] = useState(false)
  const { isLowEnergyMode } = useEnergyStore()
  
  // Load country data
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(data => {
        setCountries(data)
        setGlobeReady(true)
      })
  }, [])
  
  // Configure globe on load
  useEffect(() => {
    if (globeReady && globeEl.current) {
      // Auto-rotate
      globeEl.current.controls().autoRotate = true
      globeEl.current.controls().autoRotateSpeed = isLowEnergyMode ? 0.5 : 1
      
      // Set initial position
      globeEl.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 })
    }
  }, [globeReady, isLowEnergyMode])
  
  // Update globe settings when energy mode changes
  useEffect(() => {
    if (globeEl.current) {
      // Adjust quality and performance based on energy mode
      globeEl.current.controls().autoRotateSpeed = isLowEnergyMode ? 0.5 : 1
      
      // In low energy mode, reduce quality
      if (isLowEnergyMode) {
        globeEl.current.globeMaterial().wireframe = true
      } else {
        globeEl.current.globeMaterial().wireframe = false
      }
    }
  }, [isLowEnergyMode])
  
  return (
    <div className="globe-container">
      {globeReady && (
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          backgroundImageUrl={isLowEnergyMode ? null : "//unpkg.com/three-globe/example/img/night-sky.png"}
          lineHoverPrecision={0}
          polygonsData={countries.features}
          polygonCapColor={() => 'rgba(200, 0, 0, 0.3)'}
          polygonSideColor={() => 'rgba(150, 0, 0, 0.5)'}
          polygonStrokeColor={() => '#111'}
          polygonLabel={({ properties: d }) => `
            <b>${d.ADMIN} (${d.ISO_A2})</b>
          `}
          polygonsTransitionDuration={300}
          width={window.innerWidth}
          height={window.innerHeight * 0.7}
        />
      )}
      <div className="absolute bottom-4 left-4 bg-white dark:bg-dark-light p-2 rounded-md shadow-md text-sm">
        <p className="font-semibold">Our Planet</p>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Explore the global impact of carbon emissions
        </p>
      </div>
    </div>
  )
}

export default GlobeComponent