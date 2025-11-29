import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    // ✅ Working and colorful book images with tech themes
    const sampleBooks = [
      {
        _id: "1",
        title: "Learn React Basics",
        author: "Dan Abramov",
        category: "Free",
        description:
          "A beginner-friendly guide to building modern web apps using React.js.",
        image:
          "https://m.media-amazon.com/images/I/41Bq+wz2MPL._SX379_BO1,204,203,200_.jpg",
      },
      {
        _id: "2",
        title: "Node.js for Beginners",
        author: "Ryan Dahl",
        category: "Free",
        description:
          "Start your backend journey with Node.js, Express, and MongoDB.",
        image:
          "https://m.media-amazon.com/images/I/51x9W7bWlDL._SX379_BO1,204,203,200_.jpg",
      },
      {
        _id: "3",
        title: "Mastering JavaScript",
        author: "Kyle Simpson",
        category: "Free",
        description:
          "A deep dive into JavaScript fundamentals, closures, and async programming.",
        image:
          "https://m.media-amazon.com/images/I/71HMyqG6MRL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        _id: "4",
        title: "Intro to Data Structures",
        author: "Nagesh Kumar",
        category: "Free",
        description:
          "Understand arrays, linked lists, stacks, and queues with real-world examples in C++.",
        image:
          "https://m.media-amazon.com/images/I/51qBToforeL._SX342_SY445_.jpg",
      },
      {
        _id: "5",
        title: "Python for Everyone",
        author: "Guido van Rossum",
        category: "Free",
        description:
          "A smooth introduction to Python programming for absolute beginners.",
        image:
          "https://m.media-amazon.com/images/I/81MZ7aN9lCL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        _id: "6",
        title: "Artificial Intelligence Made Easy",
        author: "Andrew Ng",
        category: "Free",
        description:
          "Learn the fundamentals of AI and Machine Learning with hands-on projects.",
        image:
          "https://m.media-amazon.com/images/I/61O2a-ZJfFL._AC_UF1000,1000_QL80_.jpg",
      },
    ];

    setBook(sampleBooks);
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Free Tech Books & Courses 📚
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Expand your tech knowledge with these free resources from experts worldwide!
          </p>
        </div>

        {/* Slider */}
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards key={item._id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
