import React, { useState } from "react"
import { motion } from "framer-motion"
import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react"

const InputField = ({ label, type, name, placeholder, required, onChange, value, icon }) => {
  const [showPassword, setShowPassword] = useState(false)

  const getIcon = () => {
    switch (icon) {
      case "user":
        return <User className="h-5 w-5 text-gray-400" />
      case "mail":
        return <Mail className="h-5 w-5 text-gray-400" />
      case "phone":
        return <Phone className="h-5 w-5 text-gray-400" />
      case "lock":
        return <Lock className="h-5 w-5 text-gray-400" />
      default:
        return null
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <motion.div
      initial={{ opacity: 0,y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-1"
    >
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{getIcon()}</div>
        <input
          type={showPassword ? "text" : type}
          name={name}
          id={name}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          value={value}
          className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-300"
        />
        {type === "password" && (
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default InputField

