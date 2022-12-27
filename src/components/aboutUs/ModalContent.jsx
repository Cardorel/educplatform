import React from "react";
import { Image } from "react-bootstrap";
import Raiting from "../student/whatNext/Raiting";
import Close from "../../assets/svg/close.svg";

export default function ModalContent({
  color,
  imageUrl,
  name,
  position,
  texts,
  rating,
  request,
  qualityOfknowledge,
  convenience,
  search,
  handleClickCloseModal,
}) {
  return (
    <div className="modal-content">
      <div className="swiper-about-header" style={{ background: color }}>
        <div className="img-content">
          <Image src={imageUrl} alt="image-profil" />
        </div>
        <div className="text-content">
          <p className="title">{name}</p>
          <p className="position">{position}</p>
        </div>
        <Image
          src={Close}
          alt="close-icon"
          className="close-bn"
          onClick={handleClickCloseModal}
        />
      </div>
      <div className="body">
        <div className="rating">
          <h5>Загальне враження:</h5>
          <Raiting number={rating} />
        </div>
        <div className="feedback-content">
          <div>
            <h4>Відгук:</h4>
            {texts?.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
          <div>
            <div>
              <h4>Реагування на запити:</h4>
              <p>{request}</p>
            </div>
            <div>
              <h4>Якість знань:</h4>
              <p>{qualityOfknowledge}</p>
            </div>
            <div>
              <h4>Зручність інтерфейсу:</h4>
              <p>{convenience}</p>
            </div>
            <div>
              <h4>Пошук роботи:</h4>
              <p>{search}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
