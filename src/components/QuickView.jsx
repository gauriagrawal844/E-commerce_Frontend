import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaPlus, FaMinus, FaTimes } from 'react-icons/fa';
import { addToCart } from '../redux/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice';
import { toast } from 'sonner';

const QuickView = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    toast.success('Added to cart');
  };

  const handleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      toast.success('Removed from wishlist');
    } else {
      dispatch(addToWishlist(product));
      toast.success('Added to wishlist');
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < Math.round(rating)
            ? 'text-yellow-400'
            : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <FaTimes className="text-xl" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="space-y-4">
              <Link
                to={`/product/${product.id}`}
                className="text-xl font-bold hover:text-blue-600"
              >
                {product.title}
              </Link>

              <div className="flex items-center gap-2">
                <div className="flex">{renderStars(product.rating.rate)}</div>
                <span className="text-sm text-gray-600">
                  ({product.rating.count} reviews)
                </span>
              </div>

              <p className="text-2xl font-bold text-blue-600">
                ${product.price.toFixed(2)}
              </p>

              <p className="text-gray-600 line-clamp-3">{product.description}</p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <FaMinus />
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <FaPlus />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>

                <button
                  onClick={handleWishlist}
                  className={`p-2 rounded-lg ${
                    isInWishlist
                      ? 'text-red-500 bg-red-50'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {isInWishlist ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>

              <Link
                to={`/product/${product.id}`}
                className="block text-center text-blue-600 hover:underline mt-4"
              >
                View Full Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView; 