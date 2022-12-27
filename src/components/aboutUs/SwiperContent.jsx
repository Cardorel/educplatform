import React from "react";
import { Image } from "react-bootstrap";
import ArrowLeft from "../../assets/svg/arrowLeft.svg";

export default function SwiperAboutUsContent({ item, handleClickModal }) {
  const { texts, name, color, position, imageUrl } = item;
  return (
    <div className="swiper-about-container">
      <div className="swiper-about-header" style={{ background: color }}>
        <div className="img-content">
          <Image src={imageUrl} alt="image-profil" />
        </div>
        <div className="text-content">
          <p className="title">{name}</p>
          <p className="position">{position}</p>
        </div>
      </div>
      <div className="swiper-about-content">
        {texts?.slice(0, 3)?.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
      <button className="btn-content" onClick={() => handleClickModal(item)}>
        Читати повністю <Image src={ArrowLeft} alt="arow-left" />
      </button>
    </div>
  );
}
