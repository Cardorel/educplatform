import React from "react";
import { Image } from "react-bootstrap";
import PhoneIco from "../../assets/svg/chat/phoneIcon.svg";
import MessageIco from "../../assets/svg/profil/message.svg";
import LikeIco from "../../assets/svg/like.svg";
import Button from "../common/Button";

export default function ProfilHeader({ btnText, displayName, name, imageUrl }) {
  return (
    <div className="profil-right">
      <div className="header">
        <Image src={imageUrl} alt="image-profil" />
      </div>
      <div className="header-row">
        <div className="header-col">
          <h4 className="username">
            {displayName} {name}
          </h4>
          <div className="content-text">
            <p>Курс:</p>
            <p>Unknown</p>
          </div>
          <div className="content-text">
            <p>Статус:</p>
            <p className="online">Зараз онлайн</p>
          </div>
        </div>
        {btnText && (
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
        )}
      </div>
    </div>
  );
}
