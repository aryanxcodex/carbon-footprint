import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser, FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    // Clear error for the field being updated
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    setErrors({})
    setSuccess(false)

    try {
      const response = await axios.post("http://localhost:8000/auth/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      },
      {
          withCredentials: true // This ensures cookies, sessions, etc., are sent/received
      });

      if (response.status === 201) {
        setSuccess(true)
        setTimeout(() => navigate('/login'), 2000)
      } else {
        setErrors({ general: "Signup failed. Please try again." })
      }
    } catch (error) {
      if (error.response) {
        // Handle server-side validation errors (if your backend sends errors like { errors: { email: 'Email already exists' } })
        setErrors(error.response.data.errors || { general: "Signup failed. Please check your details." })
      } else {
        // Handle network errors (e.g., server down)
        setErrors({ general: "Unable to connect to the server. Please try again later." })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-md mx-auto">
        <div className="card p-8 shadow-lg rounded-lg bg-white">
          <h1 className="text-3xl font-bold text-center">Create an Account</h1>
          <p className="text-center text-gray-600 mt-2">
            Join our community and start reducing your carbon footprint
          </p>

          {success ? (
            <div className="mt-6 p-4 bg-green-100 text-green-700 rounded">
              Account created successfully! Redirecting to login...
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="mb-4">
                <label className="block text-sm font-medium">Full Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Email Address</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Password</label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-10 p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full p-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded`}
                  placeholder="••••••••"
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-sm">
                  I agree to the <a href="#" className="text-blue-600">Terms & Privacy Policy</a>
                </span>
              </div>
              {errors.agreeTerms && <p className="text-red-500 text-sm">{errors.agreeTerms}</p>}

              <button
                type="submit"
                className={`w-full p-3 bg-black text-white rounded ${isLoading ? 'opacity-70' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Sign Up'}
              </button>
            </form>
          )}

          {!success && (
            <>
              <div className="mt-6 text-center text-sm text-gray-500">
                Or sign up with:
              </div>
              <button className="mt-4 w-full p-3 border border-gray-300 flex items-center justify-center">
                <FaGoogle className="mr-2" /> Sign up with Google
              </button>

              <p className="mt-6 text-center text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600">Sign In</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Signup
