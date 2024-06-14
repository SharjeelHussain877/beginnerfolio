"use client";
import React from "react";
import ProfileCard from "./ProfileCard";
import { Typography, Button } from "@material-tailwind/react";

function About() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-screen-2xl w-full p-8">
        <div className="col-span-2">
          <Typography
            variant="h1"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl text-gray-900 nunito"
          >
            About Me
          </Typography>
          <Typography
            variant="lead"
            className="mb-12 opacity-80 text-gray-700 nunito"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
          <div className="flex gap-2">
            <Button className="nunito">Show more</Button>
            <Button variant="outlined" className="nunito">
              Show more
            </Button>
          </div>
        </div>
        <div>
          <ProfileCard />
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
