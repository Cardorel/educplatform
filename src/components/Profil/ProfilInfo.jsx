import React from "react";
import { Image } from "react-bootstrap";
import TelegramIco from "../../assets/svg/chat/send.svg";
import Email from "../../assets/svg/email.svg";
import Instagram from "../../assets/svg/social/instagram.svg";
import Facebook from "../../assets/svg/social/facebook.svg";
import Linkdlen from "../../assets/svg/social/linkdlen.svg";
import Twitter from "../../assets/svg/social/twitter.svg";

export default function ProfilInfo({
  day,
  month,
  year,
  country,
  phone,
  status,
  email,
}) {
  const date = new Date();
  return (
    <div className="profil-info">
      <h4>Загальна інформація:</h4>
      <div className="profil-info-content">
        <div className="profil-info-row">
          <div className="profil-info-col">
            <p>День народження:</p>
            <p>
              {day}.{month}.{year}
            </p>
          </div>
          <div className="profil-info-col">
            <p>Країна:</p>
            <p>{country}</p>
          </div>
          <div className="profil-info-col">
            <p>Котра зараз година:</p>
            <p>{date.toLocaleTimeString()}</p>
          </div>
          <div className="profil-info-col">
            <p>Телефон:</p>
            <p>{phone}</p>
          </div>
          <div className="profil-info-col">
            <p>Працевлаштування:</p>
            <p>
              {status?.mentor?.length ||
                status?.student?.length ||
                status?.worker?.length}
            </p>
          </div>
        </div>
        <div className="profil-info-img">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://web.telegram.org/"
            className="img-icon"
          >
            <Image src={TelegramIco} alt="phone-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={`mailto:${email}`}
            className="img-icon"
          >
            <Image src={Email} alt="phone-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/"
            className="img-icon"
          >
            <Image src={Instagram} alt="phone-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/"
            className="img-icon"
          >
            <Image src={Facebook} alt="phone-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/?lang=uk/"
            className="img-icon"
          >
            <Image src={Twitter} alt="phone-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/"
            className="img-icon"
          >
            <Image src={Linkdlen} alt="phone-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
