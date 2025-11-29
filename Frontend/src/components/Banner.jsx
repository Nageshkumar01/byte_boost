import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center justify-between my-16 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 dark:from-gray-900 dark:via-slate-800 dark:to-black rounded-3xl shadow-lg p-8 transition-all duration-500">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-24 space-y-8 order-2 md:order-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white leading-snug">
            Hello, welcome here to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              learn something new everyday! 🚀
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-md">
            Explore a world of knowledge, creativity, and inspiration. Start your
            learning journey with us and make every day a step closer to your dream!
          </p>

          {/* Email Input */}
          <div className="flex items-center justify-center md:justify-start">
            <label className="flex items-center gap-2 bg-white dark:bg-slate-900 shadow-md rounded-full px-4 py-2 w-full md:w-3/4 border border-pink-300 focus-within:ring-2 focus-within:ring-pink-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 text-pink-500"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793l6.674 3.217c.206.1.446.1.652 0L15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent outline-none text-gray-700 dark:text-white w-full"
              />
            </label>
          </div>

          {/* Button */}
          <button className="mt-6 bg-gradient-to-r from-pink-500 to-violet-500 text-white px-8 py-2 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300">
            Get Started ✨
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 order-1 flex justify-center">
          <img
            src={banner}
            alt="Learning Banner"
            className="md:w-[550px] md:h-[460px] rounded-3xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
