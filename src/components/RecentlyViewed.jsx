import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const RecentlyViewed = () => {
  const recentlyViewed = useSelector((state) => state.recentlyViewed.items);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-sm ${
          index < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  if (recentlyViewed.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Recently Viewed</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {recentlyViewed.slice(0, 6).map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 group"
          >
            <div className="aspect-square mb-3">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-sm font-medium line-clamp-2 mb-1">
              {product.title}
            </h3>
            <div className="flex items-center gap-1 mb-1">
              {renderStars(product.rating.rate)}
            </div>
            <p className="text-blue-600 font-semibold">
              ${product.price.toFixed(2)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed; 