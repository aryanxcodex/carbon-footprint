import { FaLeaf, FaGlobeAmericas, FaLightbulb, FaUsers } from 'react-icons/fa'

const About = () => {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About EcoFootprint</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          We're on a mission to raise awareness about carbon footprints and promote sustainable digital practices.
        </p>
      </section>
      
      {/* Our Mission */}
      <section className="mb-16">
        <div className="card p-8">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                At EcoFootprint, we believe that small changes can make a big difference. Our mission is to educate and empower individuals and organizations to understand and reduce their carbon footprint.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We're committed to leading by example, which is why our website is designed to be as energy-efficient as possible. From automatically switching to dark mode after 5:00 PM to offering a low-energy browsing option, we're constantly looking for ways to minimize our environmental impact.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                By providing real-time energy tracking and educational resources, we hope to inspire a global movement towards more sustainable digital practices.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-dark-light rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Our Impact So Far</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaLeaf /></span>
                  <span>Reduced carbon emissions by an estimated 500kg through energy-efficient web design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaUsers /></span>
                  <span>Educated over 10,000 users about their digital carbon footprint</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaGlobeAmericas /></span>
                  <span>Partnered with 15 organizations to implement sustainable digital practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaLightbulb /></span>
                  <span>Developed innovative solutions for energy-efficient web browsing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Team Member 1 */}
          <div className="card overflow-hidden">
            <div className="h-64 bg-gray-300 dark:bg-gray-700"></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Jane Doe</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Founder & CEO</p>
              <p className="mt-2 text-sm">Environmental scientist with a passion for sustainable technology.</p>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="card overflow-hidden">
            <div className="h-64 bg-gray-300 dark:bg-gray-700"></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">CTO</p>
              <p className="mt-2 text-sm">Software engineer specializing in energy-efficient web development.</p>
            </div>
          </div>
          
          {/* Team Member 3 */}
          <div className="card overflow-hidden">
            <div className="h-64 bg-gray-300 dark:bg-gray-700"></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Emily Chen</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Head of Research</p>
              <p className="mt-2 text-sm">Climate scientist focused on digital carbon footprint analysis.</p>
            </div>
          </div>
          
          {/* Team Member 4 */}
          <div className="card overflow-hidden">
            <div className="h-64 bg-gray-300 dark:bg-gray-700"></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Michael Johnson</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Community Manager</p>
              <p className="mt-2 text-sm">Environmental advocate with expertise in community engagement.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6">
            <div className="text-primary text-4xl mb-4">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We provide accessible information and resources to help individuals and organizations understand their carbon footprint and the impact of their digital activities.
            </p>
          </div>
          
          <div className="card p-6">
            <div className="text-primary text-4xl mb-4">
              <FaGlobeAmericas />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We develop and promote innovative solutions for reducing digital carbon footprints, from energy-efficient web design to sustainable hosting practices.
            </p>
          </div>
          
          <div className="card p-6">
            <div className="text-primary text-4xl mb-4">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We believe in the power of collective action. By building a community of environmentally conscious individuals and organizations, we can make a significant impact.
            </p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          Together, we can create a more sustainable digital future. Sign up today to join our community and start making a difference.
        </p>
        <a href="/signup" className="btn btn-primary">Sign Up Now</a>
      </section>
    </div>
  )
}

export default About