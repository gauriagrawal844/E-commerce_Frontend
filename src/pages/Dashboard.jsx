import React from "react";
import ImageCarousel from "../components/ImageCarousel";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <ImageCarousel />
      
      {/* Special Offers Section */}
      <main className="container mx-auto px-4 py-8">
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
  );
};

export default Dashboard;
