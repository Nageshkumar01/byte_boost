import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Course() {
  const courses = [
    // ----- 📚 Books -----
    {
      id: 1,
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Programming Best Practices",
      duration: "3 Weeks",
      lectures: "12 Chapters",
      resources: "YouTube Series, GitHub Examples",
      image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      title: "Introduction to Algorithms",
      author: "Cormen et al.",
      category: "Data Structures & Algorithms",
      duration: "6 Weeks",
      lectures: "35 Chapters",
      resources: "MIT OCW, AlgoExpert",
      image: "https://m.media-amazon.com/images/I/61Pgdn8HsmL.jpg",
    },
    {
      id: 3,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt, David Thomas",
      category: "Software Development",
      duration: "4 Weeks",
      lectures: "20 Chapters",
      resources: "Audiobook, YouTube Talks",
      image: "https://m.media-amazon.com/images/I/51A4T9KjRkL.jpg",
    },
    {
      id: 4,
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell, Peter Norvig",
      category: "AI Fundamentals",
      duration: "8 Weeks",
      lectures: "27 Chapters",
      resources: "Stanford AI Course, Coursera",
      image: "https://m.media-amazon.com/images/I/71m0Nn3r8zL.jpg",
    },
    {
      id: 5,
      title: "Deep Learning with Python",
      author: "François Chollet",
      category: "Machine Learning",
      duration: "5 Weeks",
      lectures: "15 Chapters",
      resources: "Keras Docs, TensorFlow Tutorials",
      image: "https://m.media-amazon.com/images/I/41s8t8D5oQL._SX397_BO1,204,203,200_.jpg",
    },

    // ----- 💻 Technologies -----
    {
      id: 6,
      title: "React.js",
      author: "Meta (Facebook)",
      category: "Frontend Development",
      duration: "3 Weeks",
      lectures: "20 Modules",
      resources: "React Docs, freeCodeCamp",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      id: 7,
      title: "Node.js & Express",
      author: "Ryan Dahl",
      category: "Backend Development",
      duration: "4 Weeks",
      lectures: "18 Modules",
      resources: "Node Docs, Traversy Media",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      id: 8,
      title: "MongoDB",
      author: "MongoDB Inc.",
      category: "Database",
      duration: "2 Weeks",
      lectures: "10 Modules",
      resources: "MongoDB University",
      image: "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg",
    },
    {
      id: 9,
      title: "Python Programming",
      author: "Guido van Rossum",
      category: "Programming Language",
      duration: "5 Weeks",
      lectures: "25 Modules",
      resources: "Python.org, W3Schools, Real Python",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      id: 10,
      title: "Docker & Kubernetes",
      author: "Open Source",
      category: "DevOps & Cloud",
      duration: "6 Weeks",
      lectures: "15 Modules",
      resources: "Kubernetes Docs, Docker Labs",
      image: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
    },
    {
      id: 11,
      title: "Git & GitHub Mastery",
      author: "Linus Torvalds",
      category: "Version Control",
      duration: "2 Weeks",
      lectures: "12 Modules",
      resources: "Git Docs, YouTube Tutorials",
      image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
    {
      id: 12,
      title: "Java Full Stack",
      author: "Oracle",
      category: "Full Stack Development",
      duration: "7 Weeks",
      lectures: "24 Modules",
      resources: "GeeksforGeeks, Udemy",
      image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    },
    {
      id: 13,
      title: "C++ Masterclass",
      author: "Bjarne Stroustrup",
      category: "System Programming",
      duration: "5 Weeks",
      lectures: "20 Modules",
      resources: "C++ Docs, CodeWithHarry",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    },
    {
      id: 14,
      title: "Data Science Essentials",
      author: "Open Source",
      category: "Analytics & Visualization",
      duration: "6 Weeks",
      lectures: "22 Modules",
      resources: "Kaggle, Coursera",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Data_visualization_process_v1.png",
    },
    {
      id: 15,
      title: "Cyber Security Fundamentals",
      author: "Open Security Foundation",
      category: "Information Security",
      duration: "5 Weeks",
      lectures: "18 Modules",
      resources: "Cybrary, edX, NPTEL",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Cyber_Security_Icon.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 dark:from-gray-900 dark:via-slate-800 dark:to-black transition-all duration-500">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Header Section */}
        <div className="mt-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Explore Top <span className="text-pink-500">Books</span> &{" "}
            <span className="text-violet-500">Technologies</span>
          </h1>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Level up your skills with our curated collection of programming books and trending technologies.
            Each includes resources, project ideas, and recommended learning paths.
          </p>
          <Link to="/">
            <button className="mt-8 bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-2 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300">
              ⬅ Back to Home
            </button>
          </Link>
        </div>

        {/* Cards Section */}
        <div className="mt-16 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {courses.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-slate-900 shadow-lg rounded-2xl overflow-hidden hover:shadow-pink-400/30 transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-contain bg-slate-100 dark:bg-slate-800 p-4"
              />
              <div className="p-5 text-left">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.author}
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  <strong>Category:</strong> {item.category}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Duration:</strong> {item.duration}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Lectures:</strong> {item.lectures}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Resources:</strong> {item.resources}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center pb-10">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} BookVerse — Built with 💖 by Nagesh
          </p>
        </div>
      </div>
    </div>
  );
}

export default Course;
