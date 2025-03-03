import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaLeaf, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import useEnergyStore from '../store/energySTore'

const Footer = () => {
 
  const { energyUsage,savedEnergy} = useEnergyStore();
  
  // Calculate carbon footprint (simplified model)
  const carbonSaved = savedEnergy * 0.5 // kg CO2 per kWh (simplified)
  
  return (
    <footer className="bg-white dark:bg-dark shadow-inner transition-colors duration-300 mt-12">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="text-xl font-bold text-primary flex items-center">
              <FaLeaf className="mr-2" />
              <span>EcoFootprint</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Raising awareness about carbon footprints and promoting sustainable digital practices.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/login" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Login</Link></li>
              <li><Link to="/signup" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Sign Up</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Carbon Calculator</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Eco Tips</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Sustainability Guide</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Research Papers</a></li>
            </ul>
          </div>
          
          {/* Energy Stats */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Impact</h3>
            <div className="bg-gray-100 dark:bg-dark-light p-4 rounded-lg">
              <div className="mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Energy Saved:</span>
                <span className="ml-2 font-medium">{savedEnergy.toFixed(6)} kWh</span>
              </div>
              <div>
                <span className="text-sm text-gray-600 dark:text-gray-400">CO₂ Reduced:</span>
                <span className="ml-2 font-medium">{carbonSaved.toFixed(6)} kg</span>
              </div>
              <div className="mt-4 text-xs text-gray-500 dark:text-gray-500">
                This website is designed to minimize energy consumption.
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} EcoFootprint. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer