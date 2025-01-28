import React from "react"
import ImageCarousel from "../components/ImageCarousel"

const Dashboard = () => {
const categories = ["Women", "Men", "Kids", "Accessories", "Home", "Beauty", "Sale"]

  return (
// Category Section
    <div className="min-h-screen bg-gray-100">
       <nav className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6">
          {categories.map((category) => (
            <li key={category}>
              <a href="#" className="block py-4 px-2 hover:bg-indigo-700 transition duration-300">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
      <ImageCarousel />
      </div>
  )
}

export default Dashboard