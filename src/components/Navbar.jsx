import React, { useState, useEffect } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes, FaHeart, FaBalanceScale } from 'react-icons/fa';

// FakeStore API URL for fetching products
const API_URL = "https://fakestoreapi.com/products";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { totalQuantity } = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const compareItems = useSelector((state) => state.compare.items);

  // Fetch products from FakeStore API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filteredResults = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredResults.length > 0 ? filteredResults : [{ title: "Not Found" }]);
  };

  // Clear search input
  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  // Logout function
  const handleLogout = () => {
    dispatch(logout());
    setShowUserMenu(false);
    navigate("/login");
  };

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-sm">Free shipping on orders over $50</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/help" className="text-sm hover:underline">Help</Link>
            <Link to="/contact" className="text-sm hover:underline">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://logo-variant.algo.design.vpsvc.com/67931d4357aa555cfe21d61b?sign=7ae2b141f6b00edc8e11b65a3620ee9d482d8ad87f02cd9fe601354d3613a23d&backgroundMode=TRANSPARENT&type=PNG&width=2000"
              className="w-16"
              alt="Logo"
            />
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 text-gray-500 hover:text-blue-600"
              >
                <FaSearch />
              </button>
            </form>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            {/* Cart */}
            <Link to="/cart" className="relative group">
              <FaShoppingCart className="text-2xl text-gray-700 group-hover:text-blue-600 transition-colors" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>

            {/* Compare */}
            <Link
              to="/compare"
              className="text-gray-700 hover:text-blue-600 transition-colors relative"
            >
              <FaBalanceScale className="text-2xl" />
              {compareItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {compareItems.length}
                </span>
              )}
            </Link>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="text-gray-700 hover:text-blue-600 transition-colors relative"
            >
              <FaHeart className="text-2xl" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 group"
              >
                <FaUser className="text-2xl text-gray-700 group-hover:text-blue-600 transition-colors" />
                {isAuthenticated && (
                  <span className="hidden md:inline text-sm">{user?.name || 'Account'}</span>
                )}
              </button>

              {/* User Dropdown */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  {isAuthenticated ? (
                    <>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => setShowUserMenu(false)}
                      >
                        My Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => setShowUserMenu(false)}
                      >
                        My Orders
                      </Link>
                      <Link
                        to="/wishlist"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Wishlist
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setVisible(!visible)}
              className="md:hidden text-gray-700"
            >
              {visible ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 text-gray-500"
            >
              <FaSearch />
            </button>
          </form>
        </div>

        {/* Categories Navigation */}
        <nav className="hidden md:flex justify-center space-x-8 mt-4">
          {[
            { name: "Home", path: "/" },
            { name: "Collection", path: "/collection" },
            { name: "Deals", path: "/deals" },
            { name: "New Arrivals", path: "/new-arrivals" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 transition-colors ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu */}
        {visible && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <nav className="flex flex-col space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Collection", path: "/collection" },
                { name: "Deals", path: "/deals" },
                { name: "New Arrivals", path: "/new-arrivals" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-gray-700 hover:text-blue-600 transition-colors ${
                      isActive ? "text-blue-600 font-semibold" : ""
                    }`
                  }
                  onClick={() => setVisible(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
