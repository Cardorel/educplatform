import React from "react";
import CertificatLeft from "./CertificatLeft";
import CertificatRight from "./CertificatRight";
import "./certificat.scss";
import NextIcon from "../../../assets/svg/arrowDownWhite.svg";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Certificat() {
  const navigate = useNavigate();
  const goToCertificate = () => navigate("/");
  return (
    <div className="certificat">
      <h3 className="certificat-title">Сертифікаційне навчання</h3>
      <p className="certificat-text">
        Отримайте сертифікат про підвищення кваліфікації та досягніть своїх
        кар’єрних цілей
      </p>
      <div className="certificat-row">
        <CertificatLeft />
        <CertificatRight />
      </div>
      <div className="btn-next-content">
        <button className="next-btn" onClick={goToCertificate}>
          Більше пропозицій <Image src={NextIcon} alt="next-icon" />
        </button>
      </div>
    </div>
  );
}
