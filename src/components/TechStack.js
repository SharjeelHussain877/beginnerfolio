import React from "react";
import {
  SiNextdotjs,
  SiCss3,
  SiFirebase,
  SiTailwindcss,
  SiMui,
  SiReactrouter,
  SiRedux,
} from "react-icons/si";
import { FaHtml5, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BsBootstrapFill } from "react-icons/bs";
import { AiOutlineAntDesign } from "react-icons/ai";

function ToolStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 max-w-screen-2xl py-8">
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl hover:bg-[#212121] hover:text-white hover:scale-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <FaHtml5 className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl hover:bg-[#212121] hover:text-white hover:scale-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <SiCss3 className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl hover:bg-[#212121] hover:text-white hover:scale-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <BsBootstrapFill className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl hover:bg-[#212121] hover:text-white hover:scale-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <SiTailwindcss className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl hover:bg-[#212121] hover:text-white hover:scale-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <RiJavascriptFill className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl hover:bg-[#212121] hover:text-white hover:scale-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <SiFirebase className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl hover:bg-[#212121] hover:text-white hover:scale-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <FaReact className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl hover:bg-[#212121] hover:text-white hover:scale-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <SiNextdotjs className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl hover:bg-[#212121] hover:text-white hover:scale-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <SiMui className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl hover:bg-[#212121] hover:text-white hover:scale-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <AiOutlineAntDesign className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl hover:bg-[#212121] hover:text-white hover:scale-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <SiReactrouter className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl hover:bg-[#212121] hover:text-white hover:scale-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <SiRedux className="text-6xl" />
      </div>
    </div>
  );
}

export default ToolStack;
