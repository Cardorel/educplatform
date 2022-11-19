import React from "react";
import { Image } from "react-bootstrap";
import { certificateAdvantages } from "../../../assets/consts/data";
import StarRond from "../../../assets/svg/student/starrondIcon.svg";

export default function CertificatLeft() {
  return (
    <div className="certificate-left-content">
      <h4>Переваги та можливості сертифікаційного навчання:</h4>
      <ul>
        {certificateAdvantages?.map((adv, idx) => (
          <li key={idx}>
            <Image src={StarRond} alt="adv-certificate" />
            <span>{adv}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
