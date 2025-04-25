import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCompare, clearCompare } from '../redux/slices/compareSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { FaShoppingCart, FaTimes, FaTrash } from 'react-icons/fa';

const Compare = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.compare);

  const handleRemoveFromCompare = (productId) => {
    dispatch(removeFromCompare(productId));
    toast.success('Product removed from comparison');
  };

  const handleClearCompare = () => {
    dispatch(clearCompare());
    toast.success('Comparison cleared');
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success('Added to cart');
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">No products to compare</h2>
        <p className="text-gray-600 mb-8">Add some products to compare them side by side!</p>
        <Link
          to="/collection"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Compare Products</h1>
        <button
          onClick={handleClearCompare}
          className="flex items-center gap-2 text-red-600 hover:text-red-700"
        >
          <FaTrash />
          <span>Clear All</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr>
              <th className="p-4 text-left bg-gray-50">Feature</th>
              {items.map((product) => (
                <th key={product.id} className="p-4 text-left bg-gray-50 min-w-[250px]">
                  <div className="relative">
                    <button
                      onClick={() => handleRemoveFromCompare(product.id)}
                      className="absolute -top-2 -right-2 text-red-500 hover:text-red-600"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Product Image */}
            <tr className="border-t">
              <td className="p-4 font-semibold">Product</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-48 h-48 object-contain mx-auto mb-4"
                    />
                  </Link>
                </td>
              ))}
            </tr>

            {/* Product Name */}
            <tr className="border-t">
              <td className="p-4 font-semibold">Name</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  <Link
                    to={`/product/${product.id}`}
                    className="font-semibold hover:text-blue-600"
                  >
                    {product.title}
                  </Link>
                </td>
              ))}
            </tr>

            {/* Price */}
            <tr className="border-t">
              <td className="p-4 font-semibold">Price</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  <span className="font-bold text-blue-600">${product.price}</span>
                </td>
              ))}
            </tr>

            {/* Category */}
            <tr className="border-t">
              <td className="p-4 font-semibold">Category</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  {product.category}
                </td>
              ))}
            </tr>

            {/* Rating */}
            <tr className="border-t">
              <td className="p-4 font-semibold">Rating</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  {product.rating.rate} / 5 ({product.rating.count} reviews)
                </td>
              ))}
            </tr>

            {/* Description */}
            <tr className="border-t">
              <td className="p-4 font-semibold">Description</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  <p className="text-sm text-gray-600">{product.description}</p>
                </td>
              ))}
            </tr>

            {/* Add to Cart */}
            <tr className="border-t">
              <td className="p-4 font-semibold">Action</td>
              {items.map((product) => (
                <td key={product.id} className="p-4">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FaShoppingCart />
                    <span>Add to Cart</span>
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Compare; 