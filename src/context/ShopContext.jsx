import React, { createContext, useState, useEffect } from "react";

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products when the component mounts
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        // Simulate fetching products from a backend or large dataset
        const fetchedProducts = Array.from({ length: 200 }, (_, index) => ({
            id: index + 1,
            title: `Product ${index + 1}`,
            category: "General",
            price: (Math.random() * 100).toFixed(2),
            image: "https://via.placeholder.com/150",
        }));

        setProducts(fetchedProducts);
    };

    const fetchUpdatedPrices = async () => {
        // Simulate fetching updated prices from a backend or API
        const updatedProducts = products.map((product) => ({
            ...product,
            price: (Math.random() * 100).toFixed(2) // Simulate price fluctuation
        }));
        setProducts(updatedProducts);
    };

    const addProduct = (newProduct) => {
        // Basic validation
        if (!newProduct.title || !newProduct.category || !newProduct.price || !newProduct.image) {
            console.error("Missing fields in new product");
            return;
        }

        setProducts([...products, { id: products.length + 1, ...newProduct }]);
    };

    const updateProduct = (id, updatedProduct) => {
        setProducts(products.map((product) => (product.id === id ? updatedProduct : product)));
    };

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <ShopContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, fetchProducts, fetchUpdatedPrices }}>
            {children}
        </ShopContext.Provider>
    );
};

export { ShopContext, ShopProvider };
