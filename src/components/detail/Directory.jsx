import React from 'react'
import { Image } from "react-bootstrap";
import ArrowRight from "../../assets/svg/arrowDown.svg";

export default function Directory() {
  return (
    <div className="detail-directory">
        <p className="detail-directory-text">Головна</p>
        <Image
          className="detail-directory-arrow"
          src={ArrowRight}
          alt="arrow-left"
        />
        <p className="detail-directory-text">Сертифікаційне навчання</p>
        <Image
          className="detail-directory-arrow"
          src={ArrowRight}
          alt="arrow-left"
        />
        <p className="detail-directory-text">Наука про дані</p>
        <Image
          className="detail-directory-arrow"
          src={ArrowRight}
          alt="arrow-left"
        />
        <p className="detail-directory-text">Аналіз даних</p>
      </div>
  )
}
