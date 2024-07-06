"use client";
import React from "react";
import ProfileCard from "./ProfileCard";
import { Typography, Collapse } from "@material-tailwind/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./css/showmore.css";

function About() {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 order-2 md:order-1 md:grid-cols-3 gap-2 max-w-screen-2xl w-full p-8">
        <div className="col-span-2 order-3 md:order-2">
          <Typography
            variant="h1"
            className="mb-4 text-4xl md:text-7xl text-white nunito"
          >
           <span className="text-[#0E8388]">About </span>Me
          </Typography>
          <Typography
            variant="lead"
            className="mb-12 opacity-80 text-[#CBE4DE] nunito"
          >
            I'm a web and application developer with a passion for creating
            beautiful and functional digital solutions. My journey began with my
            studies in computer science, which I completed at SMIT. During my
            time there, I developed a strong foundation in programming and web
            development, which has been crucial in my career.
            <br />
            <br />I specialize in using modern technologies like React and
            Next.js. With React, I build dynamic and responsive user interfaces
            that provide an excellent user experience. Next.js allows me to
            create powerful server-rendered applications that are fast and
            SEO-friendly. I’m also proficient with various libraries and tools
            that complement these technologies, ensuring I can tackle a wide
            range of projects efficiently.
          </Typography>
          <Collapse open={open}>
            <Typography
              variant="lead"
              className="mb-12 opacity-80 text-[#CBE4DE] nunito"
            >
              What I love most about my work is solving complex problems and
              turning ideas into reality. Whether it’s a sleek portfolio site or
              a robust e-commerce platform, I enjoy the challenge of building
              something that’s both functional and visually appealing. I believe
              in continuous learning and stay updated with the latest industry
              trends and best practices to ensure my skills are always sharp.
              <br />
              <br />
              In every project, my goal is to deliver high-quality solutions
              that meet and exceed client expectations. I take a collaborative
              approach, working closely with clients to understand their needs
              and create customized solutions that drive success. If you’re
              looking for a dedicated developer who is passionate about web
              building and problem-solving, I’d love to connect and discuss how
              we can work together on your next project.
            </Typography>
          </Collapse>
          <button
            className="nunito flex gap-2 items-center showmore !bg-[#0E8388]"
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
