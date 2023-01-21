import React from "react";
import { Image } from "react-bootstrap";
import { interestCourse } from "../../assets/consts/data";
import PlayIco from "../../assets/svg/interest/play.svg";
import CloseIco from "../../assets/svg/close.svg";
import ButtonWithArrow from "../common/ButtonWithArrow";
import HeaderInterestContainer from "../file/HeaderInterestContainer";

import "./video.scss";

export default function Video() {
  return (
    <HeaderInterestContainer interests={interestCourse}>
      <div className="video">
        <h4>Відео</h4>
        <div className="video-row">
          <div className="video-col">
            <div className="video-body">
              <p>Назва відеокурсу</p>
              <Image src={CloseIco} className="close-ico" alt="close-ico" />
              <div className="img-content">
                <Image
                  src="https://i.ibb.co/DQCq4Xq/swiper-Img-1.png"
                  alt="image"
                  className="img-bg"
                />
                <div className="image-content-play">
                  <Image src={PlayIco} alt="play-ico" className="play-ico" />
                </div>
              </div>
            </div>
            <ButtonWithArrow text="Перейти до програми" />
          </div>
          <div className="video-col">
            <div className="video-body">
              <p>Назва відеокурсу</p>
              <Image src={CloseIco} className="close-ico" alt="close-ico" />
              <div className="img-content">
                <Image
                  src="https://i.ibb.co/DQCq4Xq/swiper-Img-1.png"
                  alt="image"
                  className="img-bg"
                />
                <div className="image-content-play">
                  <Image src={PlayIco} alt="play-ico" className="play-ico" />
                </div>
              </div>
            </div>
            <ButtonWithArrow text="Перейти до програми" />
          </div>
          <div className="video-col">
            <div className="video-body">
              <p>Назва відеокурсу</p>
              <Image src={CloseIco} className="close-ico" alt="close-ico" />
              <div className="img-content">
                <Image
                  src="https://i.ibb.co/DQCq4Xq/swiper-Img-1.png"
                  alt="image"
                  className="img-bg"
                />
                <div className="image-content-play">
                  <Image src={PlayIco} alt="play-ico" className="play-ico" />
                </div>
              </div>
            </div>
            <ButtonWithArrow text="Перейти до програми" />
          </div>
        </div>
      </div>
    </HeaderInterestContainer>
  );
}
