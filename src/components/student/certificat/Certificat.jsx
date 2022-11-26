import React from "react";
import CertificatLeft from "./CertificatLeft";
import CertificatRight from "./CertificatRight";
import "./certificat.scss";
import NextIcon from "../../../assets/svg/student/nextIcon.svg";
import { Image } from "react-bootstrap";


export default function Certificat() {
  return (
    <div className="certificat">
      <h3 className="certificat-title">Сертифікаційне навчання</h3>
      <p className="certificate-text">
        Отримайте сертифікат про підвищення кваліфікації та досягніть своїх
        кар’єрних цілей
      </p>
      <div className="certificat-row">
        <CertificatLeft />
        <CertificatRight />
      </div>
      <div className="btn-next-content">
        <button className="next-btn">Більше пропозицій <Image src={NextIcon} alt='next-icon'/></button>
      </div>
    </div>
  );
}
