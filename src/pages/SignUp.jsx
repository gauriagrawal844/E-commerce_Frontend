import React, { useState } from 'react';
import { signUp } from '../service/userApi'; // Ensure this import is correct
import { toast } from "sonner"; // Ensure sonner is installed
import { useNavigate } from 'react-router-dom'; // Use navigate for programmatic navigation
import InputField from '../components/InputField';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUp({
        fullName,
        email,
        phoneNo,
        password,
        confirmPassword,
      });
      setFullName("");
      setEmail("");
      setPhoneNo("");
      setPassword("");
      setConfirmPassword("");
      // navigate("/login");
      toast.success(response?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message);
      console.log(error.response.data);
    }
  };

  return (
    <>
      <div
        className="min-h-screen flex items-start justify-start"
        style={{
          backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20230718/pngtree-digital-retailing-illustration-laptop-keyboard-with-shopping-basket-and-e-commerce-image_3903657.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="bg-white bg-opacity-40 p-6 md:p-10 space-y-4 rounded-xl shadow-xl w-full max-w-sm md:max-w-md mt-16 mb-16 ml-10 mr-10">
          <img
            alt="Your Company"
            src="https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?resize=400x0"
            className="mx-auto h-11 w-11 rounded-full"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4 md:mb-6">
            Create Your Account
          </h2>
          <p className="text-xs md:text-sm text-center text-gray-800 mb-4 md:mb-8">
            Join us today! It only takes a few steps.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <InputField
              label="Full Name"
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              required
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />

            <InputField
              label="Email address"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <InputField
              label="Phone number"
              type="tel"
              name="phoneNo"
              placeholder="Enter your phone number"
              required
              onChange={(e) => setPhoneNo(e.target.value)}
              value={phoneNo}
            />

            <InputField
              label="Password"
              type="password"
              name="password"
              placeholder="Create a password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <InputField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />

            <div className="flex items-center mb-4 md:mb-6">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-blue-900 focus:ring-blue-800 border-gray-300 rounded transition-all duration-300"
                required
              />
              <label
                htmlFor="terms"
                className="ml-2 text-xs md:text-sm text-black-600"
              >
                I agree to the{' '}
                <Link to="/terms" className="text-black-500 underline">
                  terms and conditions
                </Link>
                .
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-400 transition-all duration-300"
            >
              Sign Up
            </button>
          </form>
          <p className="text-xs md:text-sm text-center text-black-600 mt-4">
            <Link to="/login" className="text-blue-900 underline">
              Already have an account?
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
