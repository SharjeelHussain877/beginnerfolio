"use client";
import React from "react";
import Form from "./Form";
import { Typography } from "@material-tailwind/react";

function ContactContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-screen-2xl w-full py-8">
      <div className="flex flex-col justify-center items-center p-4">
        <Typography variant={"h2"} className="w-full md:w-[60%] nunito">
          Let's chat.
          <br /> Tell me about your project.
        </Typography>
        <Typography variant={"body"} className="w-full md:w-[60%] nunito  ">
          Let's create something together 👋🏻
        </Typography>
        <div className="flex gap-4 mt-4">
          <span className="h-12 w-12 bg-gray-100 flex items-center justify-center rounded-full">
            <i className="fa-regular fa-envelope"></i>
          </span>
          <div>
            <span className="nunito">Mail me at</span>
            <br />
            <span className="nunito font-semibold">
              sharjeelhussain877@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <Form />
      </div>
    </div>
  );
}

export default ContactContainer;
