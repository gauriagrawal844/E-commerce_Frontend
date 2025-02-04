import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <img 
                src={product.images[0]}  // Use product.images[0] if images is an array
                alt={product.title} 
                className="w-full h-64 object-cover" 
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-500">{product.category.name}</p>
                <p className="text-gray-700 font-bold">${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
