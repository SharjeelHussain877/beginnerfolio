"use client";
import React from "react";
import Slider from "react-slick";
import DemoCard from "./DemoCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let myExpertise = [
  {
    title: "JavaScript",
    description:
      "JavaScript is the heart of web development, and I'm skilled in using it to bring websites to life. Whether it's for creating interactive elements, handling events, or manipulating the DOM, I rely on JavaScript to make web pages dynamic and user-friendly.",
  },
  {
    title: "Firebase",
    description:
      "Firebase is a powerful tool for building and managing web applications. I'm experienced in using Firebase for real-time database management, authentication, and hosting. It helps me quickly deploy and scale applications while ensuring they remain secure and reliable.",
  },
  {
    title: "React.js",
    description:
      "Skilled in developing dynamic and responsive user interfaces with React.js, utilizing state management with Redux, and implementing hooks for efficient component lifecycle management.",
  },
  {
    title: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework that I use to style my applications. It allows me to quickly apply styles directly in the HTML without leaving my markup. This approach speeds up the development process and makes my designs more consistent and responsive.",
  },
  {
    title: "Material-UI (MUI)",
    description:
      "Material-UI provides pre-designed components that help me build beautiful, consistent interfaces with ease. Using MUI, I can implement Google's Material Design principles in my applications, ensuring a great user experience and visual appeal.",
  },
  {
    title: "Redux",
    description:
      "Redux is essential for managing state in complex applications. I use Redux to handle the state of my React applications efficiently, ensuring that data flows smoothly and predictably throughout the app. This makes debugging easier and helps maintain a consistent state across components.",
  },
  {
    title: "Next.js",
    description:
      "Next.js is a powerful framework that allows me to create server-rendered React applications. It enhances performance and SEO capabilities, making my web applications faster and more discoverable. With Next.js, I can build full-stack applications with ease.",
  },
  {
    title: "Node.js",
    description:
      "Adept at using Node.js for server-side development, creating scalable network applications, and leveraging its non-blocking I/O model for high-performance solutions.",
  },
  {
    title: "Express.js",
    description:
      "Experienced in building robust backend services and APIs using Express.js, implementing middleware for request handling, and ensuring seamless communication between the server and the client.",
  },
  {
    title: "MongoDB",
    description:
      "Proficient in using MongoDB for creating and managing databases, designing schemas, and optimizing queries for efficient data retrieval in web applications.",
  },
  {
    title: "React Native",
    description:
      "React Native allows me to build mobile applications using the same principles I apply in web development with React. I use React Native to create cross-platform mobile apps that run smoothly on both iOS and Android, providing a native look and feel with a single codebase.",
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
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: true,
    // centerMode: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
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
        breakpoint: 770,
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
          <DemoCard
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
