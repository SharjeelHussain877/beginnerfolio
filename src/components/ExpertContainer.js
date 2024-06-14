// "use client";
// import React from "react";
// import ExpertiseCard from "./ExpretiseCard";

// let myExpertise = [
//   {
//     title: "MongoDB",
//     description:
//       "Proficient in using MongoDB for creating and managing databases, designing schemas, and optimizing queries for efficient data retrieval in web applications.",
//   },
//   {
//     title: "Express.js",
//     description:
//       "Experienced in building robust backend services and APIs using Express.js, implementing middleware for request handling, and ensuring seamless communication between the server and the client.",
//   },
//   {
//     title: "React.js",
//     description:
//       "Skilled in developing dynamic and responsive user interfaces with React.js, utilizing state management with Redux, and implementing hooks for efficient component lifecycle management.",
//   },
//   {
//     title: "Node.js",
//     description:
//       "Adept at using Node.js for server-side development, creating scalable network applications, and leveraging its non-blocking I/O model for high-performance solutions.",
//   },
// ];

// function ExpertContainer() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-screen-xl w-full py-8">
//       {myExpertise.map((elem, index) => (
//         <ExpertiseCard
//           key={index}
//           title={elem.title}
//           description={elem.description}
//         />
//       ))}
//     </div>
//   );
// }

// export default ExpertContainer;

"use client";
import React from "react";
import ExpertiseCard from "./ExpretiseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

let myExpertise = [
  {
    title: "MongoDB",
    description:
      "Proficient in using MongoDB for creating and managing databases, designing schemas, and optimizing queries for efficient data retrieval in web applications.",
  },
  {
    title: "Express.js",
    description:
      "Experienced in building robust backend services and APIs using Express.js, implementing middleware for request handling, and ensuring seamless communication between the server and the client.",
  },
  {
    title: "React.js",
    description:
      "Skilled in developing dynamic and responsive user interfaces with React.js, utilizing state management with Redux, and implementing hooks for efficient component lifecycle management.",
  },
  {
    title: "Node.js",
    description:
      "Adept at using Node.js for server-side development, creating scalable network applications, and leveraging its non-blocking I/O model for high-performance solutions.",
  },
  {
    title: "Node.js",
    description:
      "Adept at using Node.js for server-side development, creating scalable network applications, and leveraging its non-blocking I/O model for high-performance solutions.",
  },
  {
    title: "Node.js",
    description:
      "Adept at using Node.js for server-side development, creating scalable network applications, and leveraging its non-blocking I/O model for high-performance solutions.",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#EEEEEE",
        borderRadius: "50%",
        // padding: "10px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <i
        className="fas fa-arrow-right"
        style={{ color: "white", fontSize: "20px" }}
      ></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#EEEEEE",
        borderRadius: "50%",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
}

function ExpertContainer() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full max-w-screen-2xl p-8">
      <Slider {...settings}>
        {myExpertise.map((elem, index) => (
          <ExpertiseCard
            key={index}
            title={elem.title}
            description={elem.description}
          />
        ))}
      </Slider>
    </div>
  );
}

export default ExpertContainer;
