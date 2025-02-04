import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./Product";

const Collection = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [sortOrder, setSortOrder] = useState("low-to-high");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://api.escuelajs.co/api/v1/products");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://api.escuelajs.co/api/v1/categories");
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchProducts();
        fetchCategories();
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((cat) => cat !== category)
                : [...prev, category]
        );
    };

    const handleTypeChange = (type) => {
        setSelectedTypes((prev) =>
            prev.includes(type)
                ? prev.filter((t) => t !== type)
                : [...prev, type]
        );
    };

    const sortedProducts = [...products].sort((a, b) =>
        sortOrder === "low-to-high" ? a.price - b.price : b.price - a.price
    );

    // const filteredProducts = sortedProducts.filter((product) => {
    //     const isCategoryMatch =
    //         selectedCategories.length === 0 || selectedCategories.includes(product.category.name.toLowerCase());
    //     const isTypeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type.toLowerCase());
    //     return isCategoryMatch && isTypeMatch;
    // });
    const filteredProducts = sortedProducts.filter((product) => {
        const isCategoryMatch =
            selectedCategories.length === 0 || selectedCategories.includes(product.category.name.toLowerCase());
        const isTypeMatch =
            selectedTypes.length === 0 || (product.type && selectedTypes.includes(product.type.toLowerCase()));
        return isCategoryMatch && isTypeMatch;
    });
    

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-8">ALL COLLECTIONS</h2>

            <div className="flex flex-col sm:flex-row gap-10">
                {/* Sidebar Filters */}
                <div className="w-full sm:w-1/4 lg:w-1/5 border-r pr-5">
                    <h3 className="text-xl font-semibold mb-4">Filters</h3>

                    <div className="mb-6">
                        <p className="font-medium">CATEGORIES</p>
                        {categories.map((category) => (
                            <label
                                key={category.id}
                                className="block text-sm text-gray-700 hover:bg-gray-200 p-2 rounded cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(category.name.toLowerCase())}
                                    onChange={() => handleCategoryChange(category.name.toLowerCase())}
                                    className="mr-2"
                                    aria-label={`Filter by ${category.name}`}
                                />
                                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                            </label>
                        ))}
                    </div>

                    <div>
                        <p className="font-medium">TYPE</p>
                        {["topwear", "bottomwear", "winterwear"].map((type) => (
                            <label
                                key={type}
                                className="block text-sm text-gray-700 hover:bg-gray-200 p-2 rounded cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedTypes.includes(type)}
                                    onChange={() => handleTypeChange(type)}
                                    className="mr-2"
                                    aria-label={`Filter by ${type}`}
                                />
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Main Product Grid */}
                <div className="w-full">
                    {/* Sorting Dropdown */}
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-lg font-semibold">Sort by:</p>
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="border p-2 rounded"
                        >
                            <option value="low-to-high">Low to High</option>
                            <option value="high-to-low">High to Low</option>
                        </select>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <p className="text-lg">No products found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;
