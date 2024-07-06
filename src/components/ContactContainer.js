"use client";
import React from "react";
import Form from "./Form";
import { Typography } from "@material-tailwind/react";
import { HiOutlineMail } from "react-icons/hi";

function ContactContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-screen-2xl w-full py-8">
      <div className="flex flex-col justify-center items-center p-4 ">
        <Typography className="w-full md:w-[60%] nunito text-6xl font-bold">
          Let's chat.
          <br /> Tell me about your project.
        </Typography>
        <Typography variant={"body"} className="w-full md:w-[60%] nunito text-xl mt-4">
          Let's create something together 👋🏻
        </Typography>
        <div className="flex gap-4 mt-4">
          <span className="h-12 w-12 bg-[#0E8388] flex items-center justify-center rounded-full">
            <HiOutlineMail size={20} />
          </span>
          <div>
            <span className="nunito">Mail me at</span>
            <br />
            <Typography component="a"
              href="mailto:sharjeelhussain877@gmail.com"
              className="nunito tracking-wider cursor-pointer">
              sharjeelhussain877@gmail.com
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-center">
        <Form />
      </div>
    </div>
  );
}

export default ContactContainer;
