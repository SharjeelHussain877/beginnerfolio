"use client";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";


const theme = {
  carousel: {
    defaultProps: {
      autoplay: true,
      autoplayDelay: 5000,
      transition: {
        type: "tween",
        duration: 0.5,
      },
      loop: true,
    },
  },
};

export default function HomeCarousel() {
  return (
    <main className="bg-transparent relative overflow-hidden w-full max-w-screen-2xl">
      <div className="flex relative z-20 items-center overflow-hidden">
        <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-5 relative py-16">
          <div className="flex flex-col relative z-20 col-span-1 md:col-span-3 slide-right">
            <span className="w-20 h-2 bg-white mb-12">
            </span>
            <h1 className="uppercase text-6xl sm:text-8xl font-black md:flex md:flex-col leading-none dark:text-white text-custom-500 ">
              Hi,
              <span className="text-5xl sm:text-7xl text-white">
                I'm Sharjeel
              </span>
            </h1>
            <p className="text-lg tracking-wider sm:tracking-normal sm:text-base text-gray-200 dark:text-white">
              A passionate Mern Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
            </p>
            <div className="flex gap-4 my-4">
              <span className="p-2 bg-[#333333] rounded-full hover:bg-black text-white cursor-pointer"><FaGithub size={24} /></span>
              <span className="p-2 bg-[#0E76A8] rounded-full hover:bg-black text-white cursor-pointer"><FaLinkedin size={24} /></span>
              <span className="p-2 bg-[#EA4335] rounded-full hover:bg-black text-white cursor-pointer"><MdEmail size={24} /></span>
              <span className="p-2 bg-[#F48024] rounded-full hover:bg-black text-white cursor-pointer"><FaStackOverflow size={24} /></span>
              <span className="p-2 bg-[#3B5998] rounded-full hover:bg-black text-white cursor-pointer"><FaFacebookF size={24} /></span>
            </div>
            <div className="flex mt-8">
              <a href="#" className="uppercase py-2 px-4 rounded-lg bg-custom-500 border-2 border-transparent text-white text-md mr-4 hover:bg-custom-300">
                Contact me
              </a>
              <a href="/myResume.pdf" download className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-custom-500 text-custom-500 dark:text-white hover:bg-custom-300 hover:text-white text-md">
                Download my resume
              </a>
            </div>
          </div>
          <div className="hidden md:flex relative col-span-2 slide-left">
            <img src="/avatar.svg" className="mx-auto ml-0" />
          </div>
        </div>
      </div>
    </main>
  );
}
