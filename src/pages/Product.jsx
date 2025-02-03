import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="p-4  rounded-lg text-center"> {/* Removed 'border' class */}
            <img src={product.image} alt={product.title} className="w-full h-60 object-cover rounded" />
            <h3 className="mt-2 text-lg font-medium">{product.title}</h3>
            <p className="text-sm text-gray-600">{product.category}</p>
            <p className="mt-1 text-lg font-bold">${product.price}</p>
        </div>
    );
};

export default ProductCard;
