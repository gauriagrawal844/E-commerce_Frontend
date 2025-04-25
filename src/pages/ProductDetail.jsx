import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice';
import { toast } from 'sonner';
import { FaHeart, FaRegHeart, FaShoppingCart, FaStar, FaShare, FaPlus, FaMinus } from 'react-icons/fa';
import { addToCompare } from '../redux/slices/compareSlice';
import { addToRecentlyViewed } from '../redux/slices/recentlyViewedSlice';
import Reviews from '../components/Reviews';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = product && wishlistItems.some(item => item.id === product.id);
  const compareItems = useSelector((state) => state.compare.items);
  const isInCompare = compareItems.some((item) => item.id === product?.id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
        
        // Fetch related products from the same category
        const relatedResponse = await fetch(
          `https://fakestoreapi.com/products/category/${data.category}`
        );
        const relatedData = await relatedResponse.json();
        setRelatedProducts(relatedData.filter(item => item.id !== data.id).slice(0, 4));
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  useEffect(() => {
    if (product) {
      dispatch(addToRecentlyViewed(product));
    }
  }, [product, dispatch]);

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

  const handleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      toast.success('Removed from wishlist');
    } else {
      dispatch(addToWishlist(product));
      toast.success('Added to wishlist');
    }
  };

  const handleAddToCompare = () => {
    if (isInCompare) {
      toast.info('Product is already in compare list');
      return;
    }
    if (compareItems.length >= 4) {
      toast.error('Compare list is full (max 4 items)');
      return;
    }
    dispatch(addToCompare(product));
    toast.success('Added to compare list');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`${
          index < Math.round(rating)
            ? 'text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  if (loading || !product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2">
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li>/</li>
              <li><Link to="/collection" className="text-gray-600 hover:text-blue-600">Collection</Link></li>
              <li>/</li>
              <li className="text-gray-800">{product.title}</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {renderStars(product.rating.rate)}
              <span className="ml-2 text-gray-600">
                ({product.rating.count} reviews)
              </span>
            </div>
          </div>

          <p className="text-2xl font-bold text-blue-600 mb-6">
            ${product.price}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-4 py-2 text-gray-600 hover:text-blue-600 disabled:opacity-50"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-4 py-2 text-gray-600 hover:text-blue-600 disabled:opacity-50"
                disabled={quantity >= 10}
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaShoppingCart />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={handleWishlist}
              className="p-3 text-red-500 hover:text-red-600 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              {isInWishlist ? <FaHeart className="text-xl" /> : <FaRegHeart className="text-xl" />}
            </button>

            <button
              onClick={handleAddToCompare}
              className={`px-4 py-2 rounded-lg border ${
                isInCompare
                  ? 'bg-gray-100 text-gray-600'
                  : 'border-blue-600 text-blue-600 hover:bg-blue-50'
              } transition-colors`}
            >
              {isInCompare ? 'In Compare' : 'Add to Compare'}
            </button>

            <button
              onClick={handleShare}
              className="p-3 text-gray-600 hover:text-blue-600 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaShare className="text-xl" />
            </button>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-2">Product Details:</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Category: {product.category}</li>
              <li>SKU: {product.id}</li>
              <li>Availability: In Stock</li>
            </ul>
          </div>
        </div>
      </div>

      <Reviews productId={product.id} />

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-4">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {relatedProduct.title}
                  </h3>
                  <p className="font-bold text-blue-600">
                    ${relatedProduct.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail; 