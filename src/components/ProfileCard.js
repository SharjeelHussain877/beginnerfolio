"use client";
import React from "react";
import Social from "./Social";
import Image from "next/image";
import "./css/profile.css";

function ProfileCard() {
  return (
    <div className="card">
      <div className="card__img">
        <Image src={"/banner.jpg"} width={540} height={450} />
      </div>
      <div className="card__avatar">
        <img
          className="my-svg-element object-cover w-full h-full rounded-full"
          src="/myImage.jpg"
          alt="profile-picture"
          // className="object-cover w-full h-full"
        />
      </div>
      <div className="card__title nunito">Sharjeel Hussain</div>
      <div className="card__subtitle nunito">Web Development</div>
      <div className="card__wrapper">
        <Social />
      </div>
    </div>
  );
}

export default ProfileCard;
