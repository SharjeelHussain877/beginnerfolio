"use client";
import React from "react";
import Form from "./Form";
import { Typography } from "@material-tailwind/react";
import { HiOutlineMail } from "react-icons/hi";

function ContactContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-2 max-w-screen-2xl w-full py-8">
      <div className="flex flex-col justify-center items-center p-4 md:col-span-3">
        <Typography className="w-full text-6xl md:text-[4rem] lg:text-[6rem] leading-none font-clubbed tracking-wide font-bold text-custom-500">
          Let's chat.
          <br /> Tell me about your project.
        </Typography>
        <Typography variant={"body"} className="w-full nunito text-xl mt-4 text-custom-400">
          Let's create something together 👋🏻
        </Typography>
        <div className="w-full flex gap-4 mt-4">
          <span className="h-12 w-12 bg-custom-400 flex items-center justify-center rounded-full">
            <HiOutlineMail size={20} />
          </span>
          <div>
            <span className="nunito text-custom-400">Mail me at</span>
            <br />
            <Typography component="a"
              href="mailto:sharjeelhussain877@gmail.com"
              className="nunito tracking-wider cursor-pointer text-custom-400">
              sharjeelhussain877@gmail.com
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-center md:col-span-2">
        <Form />
      </div>
    </div>
  );
}

export default ContactContainer;
