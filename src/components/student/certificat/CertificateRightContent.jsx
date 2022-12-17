import React from "react";
import { Image } from "react-bootstrap";

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
          <div className="image-content">
            <Image className="image-logo" src={logoUrl} alt="image-company" />
          </div>
          <p className="price">
            {price !== 0 ? price + " грн" : "Безкоштовно"}
          </p>
          <p className="title">{title}</p>
          <p className="school">{school}</p>
          <p className="kind">{kind}</p>
        </div>
      </div>
    </div>
  );
}
