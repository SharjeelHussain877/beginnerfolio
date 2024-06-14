"use client";
import "./globals.css";
import React, { useState } from "react";
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
const arr = [
  {
    image:
      "https://www.hyundai.com/content/dam/hyundai/ww/en/images/find-a-car/pip/cars/sonata-dn8-2023/highlights/gallery/dn8-highlights-gallery-6-left-sideview-gray-sonata.jpg",
    title: "Hyundai Sonata",
    description:
      "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
    type: "job",
  },
  {
    image:
      "https://di-uploads-pod27.dealerinspire.com/patriothyundaiofbartlesville/uploads/2021/12/The-New-2022-Hyundai-Sonata.jpg",
    title: "Hyundai Sonata",
    description:
      "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
    type: "job",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2024-hyundai-sonata-n-line-101-64ef8c4d94261.jpg?crop=0.864xw:0.791xh;0.0765xw,0.0791xh&resize=980:*",
    title: "Hyundai Sonata",
    description:
      "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
    type: "job",
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
      <ProjectSlider slides={arr} options={OPTIONS} />
      <h1 className="text-5xl mt-12 w-full max-w-screen-2xl p-4 md:p-0">
        Github Contribution activity
      </h1>
      <GithubContribution />
      <ContactContainer />
      <Footer />
    </div>
  );
}
