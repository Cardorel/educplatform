import React from "react";
import { Image } from "react-bootstrap";
import PriceContent from "../../../assets/svg/student/price.svg";

export default function CertificateRightContent({
  price,
  title,
  school,
  kind,
  logoUrl,
  image,
}) {
  return (
    <div className="certificat-right-content">
      <div className="certificat-right-image">
        <Image className="image-company" src={image} alt="image-company" />
      </div>
      <div className="certificat-right-col">
        <div className="position-contenu">
          <p className="price">
            <span>{price !== 0 ? price + " грн" : "Безкоштовно"}</span>
            <Image src={PriceContent} alt="content" />
          </p>
          <p className="title">{title}</p>
          <p className="school">{school}</p>
          <p className="kind">{kind}</p>
        </div>
      </div>
    </div>
  );
}
