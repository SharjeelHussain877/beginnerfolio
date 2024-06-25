"use client";
import React from "react";
import Social from "./Social";
import "./css/profile.css";
import Image from "next/image";

// function ProfileCard() {
//   return (
//     <div className="relative flex flex-col text-gray-700 bg-white shadow-xl bg-clip-border rounded-xl w-full">
//       <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
//         <img
//           src="/myImage.jpg"
//           alt="profile-picture"
//           className="object-cover w-full h-full"
//         />
//       </div>
//       <div className="p-6 text-center">
//         <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 nunito">
//           Sharjeel Hussain
//         </h4>
//         <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 nunito">
//           CEO / Co-Founder
//         </p>
//       </div>
//       <div className="flex justify-center p-6 pt-2 gap-7">
//         <Social />
//       </div>
//     </div>
//   );
// }

function ProfileCard() {
  return (
    <div className="card">
      <div className="card__img">
        <Image src={"/banner.webp"} width={540} height={450} />
      </div>
      <div className="card__avatar">
        <img
          className="my-svg-element object-cover w-full h-full rounded-full"
          src="/myImage.jpg"
          alt="profile-picture"
          // className="object-cover w-full h-full"
        />
      </div>
      <div className="card__title">Sharjeel Hussain</div>
      <div className="card__subtitle">Web Development</div>
      <div className="card__wrapper">
        <Social />
      </div>
    </div>
  );
}

export default ProfileCard;
