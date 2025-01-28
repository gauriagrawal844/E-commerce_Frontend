import React from "react"
import ImageCarousel from "../components/ImageCarousel"

const Dashboard = () => {
const categories = ["Women", "Men", "Kids", "Accessories", "Home", "Beauty", "Sale"]

const products = [
  { id: 1, name: "Summer Dress", price: 49.99, image: "/product1.jpg" },
  { id: 2, name: "Leather Jacket", price: 129.99, image: "/product2.jpg" },
  { id: 3, name: "Sneakers", price: 79.99, image: "/product3.jpg" },
  { id: 4, name: "Sunglasses", price: 29.99, image: "/product4.jpg" },
]

const newProducts = [
  { id: 5, name: "Floral Blouse", price: 39.99, image: "/product5.jpg" },
  { id: 6, name: "Denim Jeans", price: 59.99, image: "/product6.jpg" },
  { id: 7, name: "Watch", price: 99.99, image: "/product7.jpg" },
  { id: 8, name: "Handbag", price: 89.99, image: "/product8.jpg" },
]

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
      {/* Featured Products Section */}
      <main className="container mx-auto px-4 py-8">
      <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-indigo-600 font-bold">${product.price.toFixed(2)}</p>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    {/* New Arrivals Section */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {newProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-indigo-600 font-bold">${product.price.toFixed(2)}</p>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Special Offers Section */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Special Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-100 rounded-lg p-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Summer Sale</h3>
            <p className="text-gray-600 mb-4">Get up to 50% off on summer collection</p>
            <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
              Shop Now
            </button>
          </div>
          <img src="/summer-sale.jpg" alt="Summer Sale" className="w-1/3 h-auto rounded-md" />
        </div>
        <div className="bg-pink-100 rounded-lg p-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">New Customer Offer</h3>
            <p className="text-gray-600 mb-4">Get 10% off on your first purchase</p>
            <button className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition duration-300">
              Sign Up
            </button>
          </div>
          <img src="/new-customer.jpg" alt="New Customer Offer" className="w-1/3 h-auto rounded-md" />
        </div>
      </div>
    </section>
    </main>
      </div>
  )
}

export default Dashboard