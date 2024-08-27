"use client";
import React from "react";
import ProfileCard from "./ProfileCard";
import { Typography, Collapse } from "@material-tailwind/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function About() {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 order-2 md:order-1 md:grid-cols-3 gap-2 max-w-screen-2xl w-full p-8">
        <div className="col-span-2 order-3 md:order-2">
          <Typography
            variant="h1"
            className="mb-4 text-4xl md:text-7xl text-white font-clubbed tracking-widest font-bold"
          >
            About
           <span className="text-custom-500 ms-4">me</span>
          </Typography>
          <Typography
            variant="lead"
            className="mb-12 opacity-80 text-white nunito tracking-wider"
          >
            I'm a web and application developer with a passion for creating
            beautiful and functional digital solutions. My journey began with my
            studies in computer science, which I completed at SMIT. During my
            time there, I developed a strong foundation in programming and web
            development, which has been crucial in my career.
          </Typography>
          <Collapse open={open}>
            <Typography
              variant="lead"
              className="mb-12 opacity-80 text-white tracking-wider nunito"
            >
              What I love most about my work is solving complex problems and
              turning ideas into reality. Whether it’s a sleek portfolio site or
              a robust e-commerce platform, I enjoy the challenge of building
              something that’s both functional and visually appealing. I believe
              in continuous learning and stay updated with the latest industry
              trends and best practices to ensure my skills are always sharp.
            </Typography>
          </Collapse>
          <button
            className="nunito flex gap-2 items-center showmore bg-custom-500"
            onClick={toggleOpen}
          >
            Show more
            {!open ? <IoIosArrowDown size={20} /> : <IoIosArrowUp size={20} />}
          </button>
        </div>
        <div className="md:order-3">
          <ProfileCard />
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
