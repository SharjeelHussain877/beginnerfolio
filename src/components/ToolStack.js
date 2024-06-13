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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 max-w-screen-xl py-8">
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl">
        <SiVisualstudiocode className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl">
        <SiPostman className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl">
        <SiVercel className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl">
        <SiGithub className="text-6xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-16 py-8 shadow-xl">
        <FaGitAlt className="text-6xl" />
      </div>
    </div>
  );
}

export default ToolStack;
