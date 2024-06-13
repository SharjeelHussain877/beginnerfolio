import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
} from "react-icons/si";

function ToolStack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-screen-xl py-8">
      <div className="bg-white shadow-gray-100 px-24 py-12 shadow-xl">
        <SiVisualstudiocode className="text-7xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-24 py-12 shadow-xl">
        <SiPostman className="text-7xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-24 py-12 shadow-xl">
        <SiVercel className="text-7xl" />
      </div>
      <div className="bg-white shadow-gray-100 px-24 py-12 shadow-xl">
        <SiGithub className="text-7xl" />
      </div>
    </div>
  );
}

export default ToolStack;
