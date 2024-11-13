import React, { useState } from "react";
import { Helmet } from "react-helmet";
import SignupForm from './components/SignupForm';

function App() {
  // State to control the visibility of the SignupForm popup
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // Function to toggle the signup form visibility
  const toggleSignupForm = () => {
    setIsSignupOpen(!isSignupOpen);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between p-4">
      {/* Adding title, image, and meta tags to the head */}
      <Helmet>
        <title>LzyCrazy</title>
        <meta property="og:title" content="LzyCrazy - The Best Platform" />
        <meta property="og:image" content="https://www.lzycrazy.com/assets/logobg-uV18nl4h.png" />
        <link rel="icon" href="https://www.lzycrazy.com/assets/logobg-uV18nl4h.png" type="image/png" />
      </Helmet>

      {/* Main Container with Two Columns */}
      <div className="flex-grow flex w-full max-w-6xl mx-auto">
        {/* Left Column: Logo, Search Bar, and Video */}
        <div className="w-1/2 flex flex-col justify-between items-center pr-20">
          <div className="text-center mb-1 mt-9">
            <img src="/img/logo.png" alt="LzyCrazy Logo" className="w-32 h-33 mx-auto -mb-10" />
          </div>
          <div className="relative w-48 mb-4">
            <input
              type="text"
              placeholder="Coming Soon"
              className="w-full px-4 py-2 border border-black/50 rounded-full text-left text-gray-500 bg-white"
              disabled
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</span>
          </div>
          <div className="mb-8 w-full max-w-[420px] -pt-20">
            <video controls className="w-full rounded-3xl">
              <source src="/img/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right Column: Login Form */}
        <div className="w-1/2 flex flex-col justify-center items-center pl-10 mt-20 ml-20">
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm border border-gray-200" style={{ fontFamily: 'Arial, sans-serif' }}>
            <input
              type="email"
              placeholder="Email address or phone number"
              className="w-full p-2 border border-gray-300 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
            />
            <button className="w-full py-2 mb-2 bg-[#040c4a] text-white rounded font-semibold hover:bg-[#3a8ecf] text-lg">
              Log In
            </button>
            <a href="#" className="text-blue-600 text-base text-center block mb-4 hover:underline">
              Forgotten password?
            </a>
            <hr className="border-gray-300 my-4 w-full" />
            <button
              className="w-full py-2 bg-[#42b72a] text-white rounded font-semibold hover:bg-[#358d23] text-lg"
              onClick={toggleSignupForm} // Open signup form on click
            >
              Create New Account
            </button>
          </div>
        </div>
      </div>

      {/* Location Info Section above the footer */}
      <div className="flex items-center justify-left space-x-2 my-4">
        <img src="/img/flag.png" alt="India flag" className="h-5 w-5" />
        <span className="text-gray-600 text-[18px] ml-[10px]">India</span>
      </div>

      {/* Footer Section */}
      <footer className="w-full py-2 border-t border-gray-300 ">
        <div className=" mx-auto flex justify-between items-center text-lg text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
          {/* Left-aligned Links */}
          <div className="flex space-x-12">
            <a href="#" className="hover:text-green-500">About</a>
            <a href="#" className="hover:text-green-500">Advertising</a>
            <a href="#" className="hover:text-green-500">Business</a>
            <a href="#" className="hover:text-green-500">Investor</a>
            <a href="#" className="hover:text-green-500">We are Hiring</a>
          </div>

          {/* Right-aligned Links */}
          <div className="flex space-x-12">
            <a href="#" className="hover:text-green-500">Privacy</a>
            <a href="#" className="hover:text-green-500">Terms</a>
            <a href="#" className="hover:text-green-500">Help</a>
          </div>
        </div>
      </footer>

      {/* Signup Form Popup (Modal) */}
      {isSignupOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl mb-4">Sign Up</h2>
            <SignupForm />
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={toggleSignupForm} // Close the popup
            >
              ❌
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
