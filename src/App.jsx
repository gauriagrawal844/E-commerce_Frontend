import React from "react";
import "react-quill/dist/quill.snow.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Uncomment this
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Orders';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route 
        path="/"
        element={
            <Dashboard/>
        }
        /> 

        <Route 
        path="/login"
        element={
            <Login/>
        }
        />

        <Route
          path="/signup"
          element={
              <SignUp />
          }
        />
        <Route
          path="/collection"
          element={
            <Collection />
          }
        />
        <Route
          path="/about"
          element={
            <About />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact />
          }
        />
        <Route
          path='product/:productId'
          element={
            <Product/>
          }
        />
        <Route
        path='/cart'
        element={
          <Cart/>
        }
        />
        <Route
        path='/placeorder'
        element={
          <PlaceOrder/>
        } 
        />
        <Route
        path='/order'
        element={ 
          <Order/>
        }
        />

      </Routes>
      <Footer/>
      <Toaster richColors position="top-center"/>
    </BrowserRouter>
  );
}
export default App;

