import React from "react";
import { Image } from "react-bootstrap";
import ImgProfil from "../../assets/images/img-sw-3.png";
import PhoneIco from "../../assets/svg/chat/phoneIcon.svg";
import MessageIco from "../../assets/svg/messageIcon.svg";
import LikeIco from "../../assets/svg/like.svg";
import Button from "../common/Button";

export default function ProfilHeader() {
  return (
    <div className="profil-right">
      <div className="header">
        <Image src={ImgProfil} alt="image-profil" />
      </div>
      <div className="header-row">
        <div className="header-col">
          <h4>Amy Schwarzwald</h4>
          <div className="content-text">
            <p>Курс:</p>
            <p>Конституційне право</p>
          </div>
          <div className="content-text">
            <p>Статус:</p>
            <p className="online">Зараз онлайн</p>
          </div>
        </div>
        <div>
          <div className="icon-content">
            <div className="img-icon">
              <Image src={PhoneIco} alt="phone-icon" />
            </div>
            <div className="img-icon">
              <Image src={MessageIco} alt="message-icon" />
            </div>
            <div className="img-icon">
              <Image src={LikeIco} alt="like-icon" />
            </div>
          </div>
          <div className="btn-header">
            <Button text="Видалити друга" padding="10px 50px" />
          </div>
        </div>
      </div>
    </div>
  );
}
