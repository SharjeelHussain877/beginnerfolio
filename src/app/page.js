"use client";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useRef, useState } from "react";
import NavigationBar from "@/components/Navbar";
import HomeCarousel from "@/components/Carousel";
import About from "@/components/About";
import ExpertContainer from "@/components/ExpertContainer";
import ProjectSlider from "@/components/ProjectSlider";
import ToolStack from "@/components/ToolStack";
import ContactContainer from "@/components/ContactContainer";
import GithubContribution from "@/components/GithubContribution";
import Footer from "@/components/Footer";
import Techstack from "@/components/TechStack";
import Education from "@/components/Education";
import Experience from "@/components/Experiece";
import { Parallax } from "react-parallax";

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
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    contact: () => {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    projects: () => {
      projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    techstack: () => {
      console.log("success");
      techRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    toolstack: () => {
      toolRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    contribute: () => {
      contributionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
  };

  return (
    <div className="flex items-center flex-col mx-auto max-w-screen-3xl">
      <NavigationBar scrollFunction={scrollFunction} />
      <HomeCarousel />
      <span ref={aboutRef}>
        <About />
      </span>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-screen-2xl p-8">
        <Education />
        <Experience />
      </div>
      <h1
        className="text-4xl md:text-5xl mt-12 w-full max-w-screen-2xl nunito px-4 md:py-0 text-[#12372A]"
        ref={techRef}
      >
        Technical Expertise
      </h1>
      <ExpertContainer />
      {/* <div
        className="relative bg-fixed bg-cover bg-center w-full"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center">
          <span
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            className="px-8 lg:p-0 max-w-screen-2xl"
          >
            <h1
              className="text-4xl md:text-5xl text-center mt-12 nunito p-8 md:p-0 text-[#12372A]"
              ref={toolRef}
            >
              Tools <span className="text-[#adadad]">I use</span>
            </h1>
            <ToolStack />
          </span>
        </div>
      </div> */}
       <Parallax
      bgImage="/bg.jpg"
      bgImageAlt="background"
      strength={300}
      className="w-full"
    >
      <div className="flex flex-col items-center">
        <span
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          className="px-8 lg:p-0 max-w-screen-2xl"
        >
          <h1
            className="text-4xl md:text-5xl text-center mt-12 nunito p-8 md:p-0 text-[#12372A]"
            ref={toolRef}
          >
            Tools <span className="text-[#adadad]">I use</span>
          </h1>
          <ToolStack />
        </span>
      </div>
    </Parallax>
      {/* <h1 className="text-center text-5xl mt-12 nunito max-w-screen-2xl p-8 md:p-0">
        Skillset <span className="text-[#adadad]">I work with</span>
      </h1>
      <Techstack /> */}
      <h1
        className="text-4xl md:text-5xl md:mt-12 w-full max-w-screen-2xl px-4 md:py-0 text-[#12372A]"
        ref={projectRef}
      >
        Projects
      </h1>
      <ProjectSlider slides={projects} options={OPTIONS} />
      <h1
        className="text-4xl nunito md:text-5xl mt-12 w-full max-w-screen-2xl  px-4 md:py-0 text-[#12372A]"
        ref={contributionRef}
      >
        Github Contribution activity
      </h1>
      <GithubContribution />

      <span
        ref={contactRef}
        data-aos="flip-right"
        data-aos-duration="2000"
        data-aos-delay="400"
        data-aos-easing="ease-in-out"
      >
        <ContactContainer />
      </span>
      <Footer scrollFunction={scrollFunction} />
    </div>
  );
}
