import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSun, FaMoon, FaLeaf, FaBars, FaTimes, FaUser } from 'react-icons/fa'
import useEnergyStore from '../store/energySTore'
import authStore from '../store/authStore'
import EnergyIndicator from './EnergyIndicator'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {
    isLowEnergyMode,
    isDarkMode,
    batteryLevel,
    setIsLowEnergyMode,
    setIsDarkMode,
  } = useEnergyStore();
  const { isAuthenticated, logout } = authStore()
  const navigate = useNavigate()

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleEnergyMode = () => {
    setIsLowEnergyMode(!isLowEnergyMode)
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="bg-white dark:bg-dark shadow-md transition-colors duration-300">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary flex items-center">
            <FaLeaf className="mr-2" />
            <span>EcoFootprint</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
                <button 
                  onClick={handleLogout}
                  className="hover:text-primary transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-primary transition-colors">Login</Link>
                <Link to="/signup" className="btn btn-primary">Sign Up</Link>
              </>
            )}
          </nav>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <EnergyIndicator />
            
            <button 
              onClick={toggleEnergyMode}
              className={`p-2 rounded-full transition-colors ${
                isLowEnergyMode ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-dark-light'
              }`}
              aria-label="Toggle energy saving mode"
              title={`Energy saving mode: ${isLowEnergyMode ? 'On' : 'Off'}`}
            >
              <FaLeaf />
            </button>
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-dark-light transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            
            {batteryLevel < 100 && (
              <div className="text-xs text-gray-600 dark:text-gray-400">
                🔋 {Math.round(batteryLevel)}%
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/contact" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              {isAuthenticated ? (
                <>
                  <Link to="/user/dashboard" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
                  <button 
                    onClick={() => {
                      handleLogout()
                      setIsMenuOpen(false)
                    }}
                    className="hover:text-primary transition-colors text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Login</Link>
                  <Link to="/signup" className="btn btn-primary inline-block w-max" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                </>
              )}
              
              <div className="flex items-center space-x-4 pt-2">
                <EnergyIndicator />
                
                <button 
                  onClick={toggleEnergyMode}
                  className={`p-2 rounded-full transition-colors ${
                    isLowEnergyMode ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-dark-light'
                  }`}
                  aria-label="Toggle energy saving mode"
                >
                  <FaLeaf />
                </button>
                
                <button 
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-200 dark:bg-dark-light transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>
                
                {batteryLevel < 100 && (
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    🔋 {Math.round(batteryLevel)}%
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header