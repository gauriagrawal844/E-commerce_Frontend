const Product = ({ product }) => {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-2">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-56 object-contain mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-900 text-center">{product.title}</h2>
        <p className="text-gray-700 font-bold text-center">${product.price}</p>
      </div>
    );
  };
  
  export default Product;
  