import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { FaPlus, FaMinus } from 'react-icons/fa';

// Separate loading component
const ProductSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-md p-6">
    <div className="animate-pulse">
      <div className="w-full h-56 bg-gray-200 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 mx-auto"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
    </div>
  </div>
);

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <ProductSkeleton />;
  }

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

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-2">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-56 object-contain mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-900 text-center">{product.title}</h2>
        <p className="text-gray-700 font-bold text-center">${product.price.toFixed(2)}</p>
      </Link>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center border rounded-lg">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="px-3 py-1 text-gray-600 hover:text-blue-600 disabled:opacity-50"
            disabled={quantity <= 1}
          >
            <FaMinus />
          </button>
          <span className="px-3 py-1 border-x">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="px-3 py-1 text-gray-600 hover:text-blue-600 disabled:opacity-50"
            disabled={quantity >= 10}
          >
            <FaPlus />
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="flex-1 ml-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;