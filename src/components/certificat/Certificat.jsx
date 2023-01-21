import React from "react";
import { interestCourse } from "../../assets/consts/data";
import HeaderInterestContainer from "../file/HeaderInterestContainer";
import SignetIco from "../../assets/svg/menuLeft/certificat.svg";
import ButtonWithArrow from "../common/ButtonWithArrow";
import ArrowDown from "../../assets/svg/arrowDownWhite.svg";

import "./certificat.scss";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Certificat() {
  return (
    <HeaderInterestContainer interests={interestCourse}>
      <div className="certificat-interest">
        <div className="certificat-header">
          <h4>Відео</h4>
          <Link to="/file">
            <Image src={ArrowDown} alt="back-img" />
            назад до всіх файлів
          </Link>
        </div>
        <div className="certificat-row">
          <div className="certificat-col">
            <div className="certificat-body">
              <p>Назва програми/курсу</p>
              <div className="img-content">
                <Image
                  src="https://i.ibb.co/DQCq4Xq/swiper-Img-1.png"
                  alt="image"
                  className="img-bg"
                />
                <div className="image-content-play">
                  <Image src={SignetIco} alt="play-ico" className="play-ico" />
                </div>
              </div>
              <div>
                <a target="_blank" href="/html_tutorial.pdf">
                  Завантажити сертифікат
                </a>
              </div>
            </div>
            <ButtonWithArrow text="Перейти до програми" />
          </div>
          <div className="certificat-col">
            <div className="certificat-body">
              <p>Назва програми/курсу</p>
              <div className="img-content">
                <Image
                  src="https://i.ibb.co/DQCq4Xq/swiper-Img-1.png"
                  alt="image"
                  className="img-bg"
                />
                <div className="image-content-play">
                  <Image src={SignetIco} alt="play-ico" className="play-ico" />
                </div>
              </div>
              <div>
                <a target="_blank" href="/html_tutorial.pdf">
                  Завантажити сертифікат
                </a>
              </div>
            </div>
            <ButtonWithArrow text="Перейти до програми" />
          </div>
          <div className="certificat-col">
            <div className="certificat-body">
              <p>Назва програми/курсу</p>
              <div className="img-content">
                <Image
                  src="https://i.ibb.co/DQCq4Xq/swiper-Img-1.png"
                  alt="image"
                  className="img-bg"
                />
                <div className="image-content-play">
                  <Image src={SignetIco} alt="play-ico" className="play-ico" />
                </div>
              </div>
              <div>
                <a target="_blank" href="/html_tutorial.pdf">
                  Завантажити сертифікат
                </a>
              </div>
            </div>
            <ButtonWithArrow text="Перейти до програми" />
          </div>
          <div className="certificat-col">
            <div className="certificat-body">
              <p>Назва програми/курсу</p>
              <div className="img-content">
                <Image
                  src="https://i.ibb.co/DQCq4Xq/swiper-Img-1.png"
                  alt="image"
                  className="img-bg"
                />
                <div className="image-content-play">
                  <Image src={SignetIco} alt="play-ico" className="play-ico" />
                </div>
              </div>
              <div>
                <a target="_blank" href="/html_tutorial.pdf">
                  Завантажити сертифікат
                </a>
              </div>
            </div>
            <ButtonWithArrow text="Перейти до програми" />
          </div>
        </div>
      </div>
    </HeaderInterestContainer>
  );
}
