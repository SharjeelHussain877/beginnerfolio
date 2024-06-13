import React from "react";
import { SiNextdotjs, SiCss3, SiFirebase, SiTailwindcss,SiMui, SiReactrouter, SiRedux } from "react-icons/si";
import { FaHtml5, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BsBootstrapFill } from "react-icons/bs";
import { AiOutlineAntDesign } from "react-icons/ai";

function ToolStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 max-w-screen-xl py-8">
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl">
        <FaHtml5 className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl">
        <SiCss3 className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl">
        <BsBootstrapFill className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl">
        <SiTailwindcss className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl">
        <RiJavascriptFill className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl">
        <SiFirebase className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl">
        <FaReact className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl">
        <SiNextdotjs className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl">
        <SiMui className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl">
        <AiOutlineAntDesign className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl">
        <SiReactrouter className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl">
        <SiRedux className="text-6xl" />
      </div>
    </div>
  );
}

export default ToolStack;
