import React from "react";
import { Image } from "react-bootstrap";
import TelegramIco from "../../assets/svg/chat/send.svg";
import Email from "../../assets/svg/email.svg";
import Instagram from "../../assets/svg/social/instagram.svg";
import Facebook from "../../assets/svg/social/facebook.svg";
import Linkdlen from "../../assets/svg/social/linkdlen.svg";
import Twitter from "../../assets/svg/social/twitter.svg";

export default function ProfilInfo() {
  return (
    <div className="profil-info">
      <h4>Загальна інформація:</h4>
      <div className="profil-info-content">
        <div className="profil-info-row">
          <div className="profil-info-col">
            <p>День народження:</p>
            <p>03/11/1995</p>
          </div>
          <div className="profil-info-col">
            <p>Країна:</p>
            <p>Швейцарія</p>
          </div>
          <div className="profil-info-col">
            <p>Котра зараз година:</p>
            <p>6:28 AM</p>
          </div>
          <div className="profil-info-col">
            <p>Телефон:</p>
            <p>+41 76 548 0 000</p>
          </div>
          <div className="profil-info-col">
            <p>Працевлаштування:</p>
            <p>Викладач</p>
          </div>
        </div>
        <div className="profil-info-img">
          <div className="img-icon">
            <Image src={TelegramIco} alt="phone-icon" />
          </div>
          <div className="img-icon">
            <Image src={Email} alt="phone-icon" />
          </div>
          <div className="img-icon">
            <Image src={Instagram} alt="phone-icon" />
          </div>
          <div className="img-icon">
            <Image src={Facebook} alt="phone-icon" />
          </div>
          <div className="img-icon">
            <Image src={Twitter} alt="phone-icon" />
          </div>
          <div className="img-icon">
            <Image src={Linkdlen} alt="phone-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
