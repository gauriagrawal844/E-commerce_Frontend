import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowRight, FaHeart, FaRegHeart } from 'react-icons/fa';
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice';
import { toast } from 'sonner';
import Product from './Product';

const Dashboard = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [topCategories, setTopCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        const categories = [...new Set(data.map(product => product.category))];
        setTopCategories(categories);

        const featured = data
          .sort((a, b) => b.rating.rate - a.rating.rate)
          .slice(0, 4);
        setFeaturedProducts(featured);

        const arrivals = data
          .sort(() => Math.random() - 0.5)
          .slice(0, 6);
        setNewArrivals(arrivals);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleWishlist = (product) => {
    if (wishlistItems.some(item => item.id === product.id)) {
      dispatch(removeFromWishlist(product.id));
      toast.success('Removed from wishlist');
    } else {
      dispatch(addToWishlist(product));
      toast.success('Added to wishlist');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to EShop
            </h1>
            <p className="text-lg mb-8">
              Discover amazing products at unbeatable prices
            </p>
            <Link
              to="/collection"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Now
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topCategories.map((category) => (
              <Link
                key={category}
                to={`/collection?category=${category}`}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold capitalize">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="relative">
                <Product product={product} />
                <button
                  onClick={() => handleWishlist(product)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-red-500 transition-colors"
                >
                  {wishlistItems.some(item => item.id === product.id) ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">New Arrivals</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {newArrivals.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-square mb-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-medium line-clamp-2 mb-2">
                  {product.title}
                </h3>
                <p className="text-blue-600 font-semibold">
                  ${product.price.toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/collection"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Products
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

//<Link to={`/product/${product.id}`} className="text-blue-600">View Details</Link>

