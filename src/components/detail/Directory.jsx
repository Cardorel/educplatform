import React from "react";
import { Image } from "react-bootstrap";
import ArrowRight from "../../assets/svg/arrowDown.svg";

export default function Directory({ title, kind, gender }) {
  return (
    <div className="detail-directory">
      <p className="detail-directory-text">Головна</p>
      <Image
        className="detail-directory-arrow"
        src={ArrowRight}
        alt="arrow-left"
      />
      <p className="detail-directory-text">{kind}</p>
      <Image
        className="detail-directory-arrow"
        src={ArrowRight}
        alt="arrow-left"
      />
      <p className="detail-directory-text">{gender}</p>
      <Image
        className="detail-directory-arrow"
        src={ArrowRight}
        alt="arrow-left"
      />
      <p className="detail-directory-text">{title}</p>
    </div>
  );
}
