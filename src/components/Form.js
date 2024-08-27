import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Loader from "./Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [load, setLoad] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    name: "",
    email: "",
    message: "",
  });
  const onSubmit = (data) => {
    sendEmail(data);
  };

  const sendEmail = (obj) => {
    setLoad(true);
    emailjs.init({
      publicKey: "8Cwvsof5QtYu4nIGq", // must add public key and connect your gmail with email.js
      blockHeadless: true,
      blockList: {
        list: ["foo@emailjs.com", "bar@emailjs.com"],
        watchVariable: "userEmail",
      },
      limitRate: {
        id: "app",
        throttle: 10000,
      },
    });
    emailjs
      .send("service_h3v51k5", "template_1nwrqv3", obj)  //  add your service key and template id
      .then((response) => {
        toast.success("sent successfully", {
          theme: "dark",
        });
        reset();
        setLoad(false);
      })
      .catch((error) => {
        setLoad(false);
        toast.error("Your form did not send!", {
          theme: "dark",
        });
      });
  };

  return (
    <div className="relative flex flex-col text-gray-700 bg-transparent p-4 shadow-lg rounded-xl bg-clip-border w-full">
      <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-custom-500 nunito">
        Send me a message 🚀
      </h4>
      <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 w-80 nunito">
        Nice to meet you! Enter your details below to get in touch. 📧
      </p>
      <form
        className="max-w-screen-lg mt-8 mb-2 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-6 mb-1">
          <h6 className="block -mb-3 font-sans text-base antialiased leading-relaxed tracking-normal text-custom-300 nunito">
            Your Name <sup className="text-[#a21515]">*</sup>
          </h6>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              {...register("name", {
                required: "Name is required",
                maxLength: {
                  value: 30,
                  message: "Name cannot exceed 30 characters",
                },
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              placeholder="john smith"
              className="peer h-full w-full rounded-md border border-custom-400 bg-transparent px-3 py-3 font-sans text-sm font-normal text-custom-500 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-custom-400 focus:border-2 focus:border-custom-500 focus:outline-0 disabled:border-0 placeholder:focus:text-transparent disabled:bg-custom-500 nunito"
            />
            <span className="text-[12px] text-[#FD7700]">
              {errors?.name?.message}
            </span>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 nunito" />
          </div>
          <h6 className="block -mb-3 font-sans text-base antialiased leading-relaxed tracking-normal text-custom-300 nunito">
            Your Email <sup className="text-[#a21515]">*</sup>
          </h6>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email address",
                },
              })}
              aria-invalid={errors.mail ? "true" : "false"}
              placeholder="abc@gmail.com"
              className="peer h-full w-full rounded-md border border-custom-400 bg-transparent px-3 py-3 font-sans text-sm font-normal text-custom-500 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-custom-400 focus:border-2 focus:border-custom-500 focus:outline-0 disabled:border-0 placeholder:focus:text-transparent disabled:bg-custom-500 nunito"
            />
            <span className="text-[12px] text-[#FD7700]">
              {errors?.email?.message}
            </span>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 nunito" />
          </div>
          <h6 className="block -mb-3 font-sans text-base antialiased leading-relaxed tracking-normal text-custom-300 nunito">
            Message <sup className="text-[#a21515]">*</sup>
          </h6>
          <div className="relative h-24 w-full min-w-[200px]">
            <textarea
              {...register("message", {
                required: "Please type message!",
              })}
              rows="4"
              placeholder="Write your message here..."
              className="peer h-full w-full rounded-md border border-custom-400 bg-transparent px-3 py-3 font-sans text-sm font-normal text-custom-500 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-custom-400 focus:border-2 focus:border-custom-500 focus:outline-0 disabled:border-0 placeholder:focus:text-transparent disabled:bg-custom-500 nunito"
            ></textarea>
            <span className="text-[12px] text-[#FD7700]">
              {errors?.message?.message}
            </span>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" />
          </div>
        </div>
        <button type="submit" disabled={load} className="sent-btn mt-8 w-full">
          {load ? (
            <Loader />
          ) : (
            <>
              <strong className="nunito flex items-center strong"> send ✈️</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </>
          )}
        </button>
      </form>
      <ToastContainer draggable />
    </div>
  );
}

export default Form;
