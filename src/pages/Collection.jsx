import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Product from './Product';

const Collection = () => {
  const { products, categories } = useContext(ShopContext);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  // Filter products based on selected categories
  const filteredProducts = selectedCategories.length
    ? products.filter((product) => selectedCategories.includes(product.category))
    : products;

  return (
    <div className="flex gap-6 p-6">
      {/* Sidebar for Categories */}
      <div className="w-1/5 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="mb-2 flex items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="mr-2 accent-blue-500 cursor-pointer"
              />
              <label className="text-gray-700 cursor-pointer">{category}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid */}
      <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <Product key={product.id} product={product} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Collection;
