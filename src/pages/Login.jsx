import React, { useState, useEffect } from "react"
import { login } from "../service/userApi"
import { toast } from "sonner"
import { useNavigate, Link } from "react-router-dom"
import { motion } from "framer-motion"
import InputField from "../components/InputField"
import { ShoppingBag, Truck, CreditCard, ShieldCheck } from "lucide-react"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({ email: "", password: "" })
  const [showAdditionalText, setShowAdditionalText] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAdditionalText(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const validateForm = () => {
    const errors = {}
    if (!email) errors.email = "Email is required."
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Enter a valid email."
    if (!password) errors.password = "Password is required."
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(true)
    try {
      const response = await login({ email, password })
      setEmail("")
      setPassword("")
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user", JSON.stringify(response.data.user))
      localStorage.setItem("isAdmin", response.data.user.role === "admin")
      localStorage.setItem("isAuthenticated", true)

      toast.success(response?.message || "Login successful!")
      navigate("/dashboard")
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed!")
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-blue-100 p-4">
      <div className="w-full max-w-6xl bg-white bg-opacity-90 p-8 rounded-2xl shadow-2xl flex flex-col overflow-hidden relative">
        {/* Background Elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-100 to-blue-100 opacity-30 rounded-2xl"
        ></motion.div>

        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 relative z-10"
        >
          <img
            alt="Trendzy"
            src="https://logo-variant.algo.design.vpsvc.com/67931d4357aa555cfe21d61b?sign=7ae2b141f6b00edc8e11b65a3620ee9d482d8ad87f02cd9fe601354d3613a23d&backgroundMode=TRANSPARENT&type=PNG&width=2000"
            className="h-20 w-20 mx-auto mb-4"
          />
          <h1 className="text-5xl font-bold text-gray-800">
            Welcome to <span className="text-indigo-600">Trendzy</span>
          </h1>
          {showAdditionalText && (
            <motion.p  className="text-xl text-gray-600 mt-4">
              Where trends meet style. Log in to explore the latest in fashion and lifestyle.
            </motion.p>
          )}
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 relative z-10">
          {/* Left Section - Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div  className="p-6 rounded-lg shadow-md">
                <ShoppingBag className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Trendy Products</h3>
                <p className="text-gray-600">Discover the latest fashion trends and stylish items.</p>
              </motion.div>
              <motion.div  className=" p-6 rounded-lg shadow-md">
                <Truck className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Get your orders delivered quickly and efficiently.</p>
              </motion.div>
              <motion.div  className=" p-6 rounded-lg shadow-md">
                <CreditCard className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Secure Payments</h3>
                <p className="text-gray-600">Shop with confidence using our secure payment methods.</p>
              </motion.div>
              <motion.div  className="p-6 rounded-lg shadow-md">
                <ShieldCheck className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">We ensure the highest quality for all our products.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2  p-8 rounded-lg shadow-md"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>
            <p className="text-center text-gray-600 mb-6">Log in to your account to continue.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <InputField
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  icon="mail"
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>
              <div>
                <InputField
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  icon="lock"
                />
                {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className={`w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300 text-lg font-semibold ${
                  loading && "opacity-50 cursor-not-allowed"
                }`}
              >
                {loading ? "Logging in..." : "Login"}
              </motion.button>
            </form>
            <p className="text-center text-gray-600 mt-6">
              Don't have an account?{" "}
              <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 underline">
                Sign up
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Login

