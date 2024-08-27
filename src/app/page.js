"use client";
import "./globals.css";
import "aos/dist/aos.css";
import { Parallax } from "react-parallax";
import AOS from "aos";
import React, { useEffect, useRef, Suspense, lazy } from "react";

const NavigationBar = lazy(() => import("@/components/Navbar"));
const HomeCarousel = lazy(() => import("@/components/Carousel"));
const About = lazy(() => import("@/components/About"));
const ExpertContainer = lazy(() => import("@/components/ExpertContainer"));
const ProjectSlider = lazy(() => import("@/components/ProjectSlider"));
const ToolStack = lazy(() => import("@/components/ToolStack"));
const ContactContainer = lazy(() => import("@/components/ContactContainer"));
const GithubContribution = lazy(() =>
  import("@/components/GithubContribution")
);
const Footer = lazy(() => import("@/components/Footer"));
const Education = lazy(() => import("@/components/Education"));
const Experience = lazy(() => import("@/components/Experiece"));

const OPTIONS = { loop: true };
const projects = [
  {
    image: "/tour.png",
    title: "Morocco Tour",
    description:
      "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
    type: "web app",
  },
  {
    image: "/landing.png",
    title: "OST",
    description:
      "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
    type: "landing page",
  },
  {
    image: "/e-commerce.png",
    title: "E-Commerce",
    description:
      "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
    type: "web app",
  },
];

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);

  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const toolRef = useRef(null);
  const techRef = useRef(null);
  const contributionRef = useRef(null);

  const scrollFunction = {
    about: () => {
      window.scrollTo({
        top: aboutRef.current.offsetTop - 20,
        behavior: "smooth",
      });
    },
    contact: () => {
      window.scrollTo({
        top: contactRef.current.offsetTop - 20,
        behavior: "smooth",
      });
    },
    projects: () => {
      window.scrollTo({
        top: projectRef.current.offsetTop - 20,
        behavior: "smooth",
      });
    },
    techstack: () => {
      window.scrollTo({
        top: techRef.current.offsetTop - 20,
        behavior: "smooth",
      });
    },
    toolstack: () => {
      window.scrollTo({
        top: toolRef.current.offsetTop - 20,
        behavior: "smooth",
      });
    },
    contribute: () => {
      window.scrollTo({
        top: contributionRef.current.offsetTop - 20,
        behavior: "smooth",
      });
    },
  };

  return (
    <Suspense fallback={<p>Loading</p>}>
      <main className="flex items-center flex-col w-full mx-auto bg-custom">
        <NavigationBar scrollFunction={scrollFunction} />
        <HomeCarousel />
        <div ref={aboutRef}>
          <About />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-screen-2xl p-8">
          <Education />
          <Experience />
        </div>
        <div ref={techRef} className="w-full max-w-screen-2xl">
          <h1 className="text-4xl md:text-6xl mt-12 w-full max-w-screen-2xl px-4 md:py-0 text-white font-clubbed tracking-widest font-bold">
            Technical
            <span className="text-custom-500 ms-4">Expertise</span>
          </h1>
          <ExpertContainer />
        </div>

        {/* <Parallax
      bgImage="/bg.jpg"
      bgImageAlt="background"
      strength={300}
      className="w-full"
    >
        </Parallax> */}
        <div className="flex flex-col items-center" ref={toolRef}>
          <span
            // data-aos="fade-up"
            // data-aos-delay="50"
            // data-aos-duration="1000"
            className="px-8 lg:p-0 max-w-screen-2xl"
          >
            <h1 className="text-4xl md:text-6xl text-center mt-12 p-8 md:p-0 text-white font-clubbed tracking-widest font-bold">
              Tools
              <span className="text-custom-500 ms-4">I use</span>
            </h1>
            <ToolStack />
          </span>
        </div>
        <div
          // data-aos="fade-in"
          // data-aos-duration="2000"
          className="w-full max-w-screen-2xl"
          ref={projectRef}
        >
          <h1 className="text-4xl md:text-6xl md:mt-12 w-full max-w-screen-2xl px-4 md:py-0 text-white font-clubbed tracking-widest font-bold">
            Projects
          </h1>
          <ProjectSlider slides={projects} options={OPTIONS} />
        </div>

        <div className="w-full max-w-screen-2xl">
          <h1
            className="text-4xl md:text-6xl mt-12 w-full max-w-screen-2xl px-4 md:py-0 text-white font-clubbed tracking-widest font-bold"
            ref={contributionRef}
          >
            Github
            <span className="text-custom-500 ms-4">Contribution activity</span>
          </h1>
          <GithubContribution />
        </div>
        {/* <div ref={contactRef} data-aos="zoom-in" data-aos-duration="1000"> */}
        <div ref={contactRef}>
          <ContactContainer />
        </div>
        <Footer scrollFunction={scrollFunction} />
      </main>
    </Suspense>
  );
}
