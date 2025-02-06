import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await axios.get('https://fakestoreapi.com/products');
        const categoryResponse = await axios.get('https://fakestoreapi.com/products/categories');

        setProducts(productResponse.data);
        setCategories(categoryResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ShopContext.Provider value={{ products, categories }}>
      {children}
    </ShopContext.Provider>
  );
};
