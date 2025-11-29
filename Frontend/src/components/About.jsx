import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../public/about.png"; // You can add your own image

function About() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-center gap-12 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 dark:from-gray-900 dark:via-slate-800 dark:to-black rounded-3xl shadow-xl p-10"
      >
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">
              BookStore
            </span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Welcome to <strong>BookStore</strong> — your one-stop platform for
            learning and self-growth. We provide a wide collection of books and
            courses that empower learners to explore technology, creativity, and
            innovation every day. 📚✨
          </p>
          <p className="text-gray-700 dark:text-gray-400 text-md">
            Our mission is to make learning easy, affordable, and exciting for
            everyone. Whether you’re a student, developer, or lifelong learner,
            BookStore helps you grow at your own pace.
          </p>

          <button className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300">
            Explore Courses 🚀
          </button>
        </div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={aboutImg}
            alt="About us illustration"
            className="rounded-3xl w-[400px] hover:scale-105 transition-transform duration-500 shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
