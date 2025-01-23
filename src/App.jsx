import React from "react";
import "react-quill/dist/quill.snow.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Uncomment this
import { Toaster } from "sonner";
import Navbar from "./UI/Navbar";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './UI/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
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
      </Routes>
      <Footer/>
      <Toaster richColors position="top-center"/>
    </BrowserRouter>
  );
}
export default App;

