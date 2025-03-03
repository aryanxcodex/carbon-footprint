
import { Link } from 'react-router-dom'
import { FaLeaf, FaChartLine, FaUsers, FaGlobeAmericas } from 'react-icons/fa'
import Globe from '../components/Globe'
import useEnergyStore from '../store/energySTore'

const Dashboard = () => {
  
  const {
    isLowEnergyMode,
    isDarkMode,
    batteryLevel,
    setIsLowEnergyMode,
    setIsDarkMode,
  } = useEnergyStore();
  
  return (
    <div>
      {/* Hero Section with Globe */}
      <section className="relative">
        <Globe />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Reduce Your Carbon Footprint</h1>
            <p className="text-xl md:text-2xl mb-8">Together we can make a difference for our planet</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/about" className="btn btn-primary">Learn More</Link>
              <button 
                onClick={() => setIsLowEnergyMode(!isLowEnergyMode)}
                className={`btn ${isLowEnergyMode ? 'btn-secondary' : 'btn-outline text-white'}`}
              >
                {isLowEnergyMode ? 'Eco Mode: ON' : 'Activate Eco Mode'}
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Energy Tracker Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Real-Time Energy Impact</h2>
        <EnergyTracker />
      </section>
      
      {/* Features Section */}
      <section className="bg-gray-100 dark:bg-dark-light py-12 transition-colors duration-300">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose EcoFootprint?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="text-primary text-4xl mb-4">
                <FaLeaf />
              </div>
              <h3 className="text-xl font-semibold mb-2">Energy Efficient</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our website is designed to minimize energy consumption, automatically switching to dark mode 
                after 5:00 PM and offering a low-energy browsing option.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="text-primary text-4xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Monitor your energy consumption and carbon footprint reduction in real-time with our 
                advanced tracking dashboard.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="text-primary text-4xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Focused</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join a community of environmentally conscious individuals working together to reduce 
                global carbon emissions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who are actively reducing their carbon footprint and contributing to a healthier planet.
          </p>
          <Link to="/signup" className="btn bg-white text-primary hover:bg-gray-100 transition-colors">
            Sign Up Now
          </Link>
        </div>
      </section>
      
      {/* Latest News/Blog Preview */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card overflow-hidden">
            <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Understanding Your Digital Carbon Footprint</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Learn how your online activities contribute to carbon emissions and what you can do to minimize your impact.
              </p>
              <a href="#" className="text-primary hover:underline">Read More →</a>
            </div>
          </div>
          
          <div className="card overflow-hidden">
            <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">The Future of Sustainable Web Design</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Explore how web designers and developers are creating more energy-efficient websites and applications.
              </p>
              <a href="#" className="text-primary hover:underline">Read More →</a>
            </div>
          </div>
          
          <div className="card overflow-hidden">
            <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Simple Steps to Reduce Your Carbon Footprint</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Practical tips and lifestyle changes that can help you minimize your environmental impact.
              </p>
              <a href="#" className="text-primary hover:underline">Read More →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard