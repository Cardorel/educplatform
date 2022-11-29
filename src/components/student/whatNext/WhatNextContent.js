import React from "react";
import { Image } from "react-bootstrap";
import MySwiper from "../../swiper/MySwiper";
import NextIcon from "../../../assets/svg/student/nextIcon.svg";

export default function WhatNextContent({ text, data, isBtnExist }) {
  return (
    <div className="what-next-swiper">
      <h3 className="swiper-text">{text}</h3>
      <div>
        <MySwiper lists={data} />
        <div className="next-image">
          <Image src={NextIcon} alt="next-icon" />
        </div>
      </div>
    </div>
  );
}
