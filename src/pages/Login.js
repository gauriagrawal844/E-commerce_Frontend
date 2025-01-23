import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-white" style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20230718/pngtree-digital-retailing-illustration-laptop-keyboard-with-shopping-basket-and-e-commerce-image_3903657.jpg')" }}>
      <div className="bg-green shadow-2xl p-8 rounded-lg w-96">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?resize=400x0"
            alt="Logo"
            className="w-24 h-24 rounded-full"
          />
        </div>
        {/* Login Form */}
        <form>
          <h1 className="text-3xl text-center font-bold  mb-5">Login</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username or E-mail"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember-me" className="mr-2" />
            <label htmlFor="remember-me" className="text-gray-700">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-300 transition"
          >
            Login
          </button>
          <div className="flex justify-between items-center mt-4">
            <a href="/forget-password" className="text-blue-500 hover:underline">Forgot Password?</a>
            <button
              type="button"
              className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-300 transition"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
