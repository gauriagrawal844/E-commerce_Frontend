import React, { useLayoutEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from "./components/Navbar";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Orders';
import { ShopProvider } from './context/ShopContext';
import AdminPanel from "./pages/AdminPanel";
import { useSelector } from 'react-redux';
import Wishlist from './pages/Wishlist';
import Compare from './pages/Compare';
import RecentlyViewed from './components/RecentlyViewed';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Wrapper component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use instant instead of smooth for immediate effect
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Provider store={store}>
      <ShopProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/product/:productId"
              element={
                <>
                  <ProductDetail />
                  <div className="container mx-auto px-4">
                    <RecentlyViewed />
                  </div>
                </>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/placeorder"
              element={
                <ProtectedRoute>
                  <PlaceOrder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/adminpanel"
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/compare" element={<Compare />} />
          </Routes>
          <Footer />
          <Toaster richColors position="top-center" />
        </BrowserRouter>
      </ShopProvider>
    </Provider>
  );
}

export default App;
