import React, { createContext, useState } from "react";

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Men's Jacket",
            category: "Men's Clothing",
            price: 49.99,
            image: "https://pronk.in/cdn/shop/files/5_afb44dd2-7d9b-41a1-a904-5c770cfda6d5.jpg?v=1707213247",
        },
        {
            id: 2,
            title: "Women's Dress",
            category: "Women's Clothing",
            price: 39.99,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkpZww893f1DVIWgnuAQIhx9j64-4zgJxYg&s",
        },
        {
            id: 3,
            title: "Kids T-Shirt",
            category: "Kids",
            price: 19.99,
            image: "https://www.jiomart.com/images/product/original/rvrwi0nxyn/little-zing-girls-red-pure-cotton-graphic-print-t-shirt-2-3-years-product-images-rvrwi0nxyn-0-202211271449.jpg?im=Resize=(500,630)",
        },
        {
            id: 4,
            title: "Men's Shirt",
            category: "Men's Clothing",
            price: 49.19,
            image: "https://www.jiomart.com/images/product/original/4b5b0b5b-1b1b-4b5b-8b5b-5b5b5b5b5b5b_1_1_1.jpg?im=Resize=(500,330)",
        },
    ]);

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
        <ShopContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
            {children}
        </ShopContext.Provider>
    );
};

export { ShopContext, ShopProvider };
