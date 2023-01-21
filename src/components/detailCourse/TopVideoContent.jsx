import React from "react";
import { Image } from "react-bootstrap";
import Like from "../../assets/svg/like.svg";
import ImgVideo from "../../assets/svg/imgVideo.svg";

export default function TopVideoContent() {
  return (
    <div className="top-video-content">
      <p className="text">Курс 1: Наука про дані, що це?</p>
      <div className="left-video">
        <div className="top-content">
          <Image src={Like} alt="like" />
          <span className="video-img">546</span>
        </div>
        <div className="top-content">
          <Image src={ImgVideo} alt="img" />
          <span className="video-img">367</span>
        </div>
      </div>
    </div>
  );
}
