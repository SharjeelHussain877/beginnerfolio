"use client";
import "./globals.css";
import React, { useRef, useState } from "react";
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

const OPTIONS = { loop: true };
const projects = [
  {
    image:
      "/tour.png",
    title: "Morocco Tour",
    description:
      "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
    type: "web app",
  },
  {
    image:
      "/landing.png",
    title: "OST",
    description:
      "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
    type: "landing page",
  },
  {
    image:
      "/e-commerce.png",
    title: "E-Commerce",
    description:
      "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
    type: "web app",
  },
];

export default function Page() {


  return (
    <div className="flex items-center flex-col mx-auto max-w-screen-3xl">
      <NavigationBar />
      <HomeCarousel />
      <About />
      <ExpertContainer />
      <h1 className="text-center text-5xl mt-12 nunito p-8 md:p-0">
        Tools <span className="text-[#adadad]">I use</span>
      </h1>
      <ToolStack />
      <h1 className="text-center text-5xl mt-12 nunito max-w-screen-2xl p-8 md:p-0">
        Skillset <span className="text-[#adadad]">I work with</span>
      </h1>
      <Techstack />
      <h1 className="text-5xl mt-12 w-full max-w-screen-2xl p-4 px-4 md:py-0">
        Projects
      </h1>
      <ProjectSlider slides={projects} options={OPTIONS} />
      <h1 className="text-5xl mt-12 w-full max-w-screen-2xl p-4 px-4 md:py-0">
        Github Contribution activity
      </h1>
      <GithubContribution />
      <ContactContainer />
      <Footer />
    </div>
  );
}
