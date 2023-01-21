import React from "react";
import MySwiper from "../../swiper/MySwiper";

export default function WhatNextContent({ text, data }) {
  return (
    <div className="what-next-swiper">
      {text && <h3 className="swiper-text">{text}</h3>}
      <div className="swiper-container">
        <MySwiper lists={data} />
      </div>
    </div>
  );
}
