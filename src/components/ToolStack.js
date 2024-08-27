import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

function ToolStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-screen-2xl py-8">
      <div className="bg-custom-500 text-white border border-custom-500 hover:custom-200 shadow-gray-900   min-w-36 min-h-24 shadow-xl hover:bg-custom-300 cursor-pointer hover:scale-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center">
        <SiVisualstudiocode className="text-6xl" />
      </div>
      <div className="bg-custom-500 text-white border border-custom-500 hover:custom-200 shadow-gray-900 min-w-36 min-h-24 shadow-xl hover:bg-custom-300 cursor-pointer hover:scale-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center">
        <SiPostman className="text-6xl" />
      </div>
      <div className="bg-custom-500 text-white border border-custom-500 hover:custom-200 shadow-gray-900 min-w-36 min-h-24 shadow-xl hover:bg-custom-300 cursor-pointer hover:scale-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center">
        <SiVercel className="text-6xl" />
      </div>
      <div className="bg-custom-500 text-white border border-custom-500 hover:custom-200 shadow-gray-900 min-w-36 min-h-24 shadow-xl hover:bg-custom-300 cursor-pointer hover:scale-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center">
        <SiGithub className="text-6xl" />
      </div>
      <div className="bg-custom-500 text-white border border-custom-500 hover:custom-200 shadow-gray-900 min-w-36 min-h-24 shadow-xl hover:bg-custom-300 cursor-pointer hover:scale-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center">
        <FaGitAlt className="text-6xl" />
      </div>
    </div>
  );
}

export default ToolStack;
