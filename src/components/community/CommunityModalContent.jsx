import React from "react";
import Spam from "../../assets/svg/spam.svg";
import Fiching from "../../assets/svg/fiching.svg";
import Profil from "../../assets/svg/profil.svg";
import ArrowLeft from "../../assets/svg/arrowLeft.svg";
import { Image } from "react-bootstrap";
import CloseIcon from "../../assets/svg/close.svg";

export default function CommunityModalContent({
  handleCloseModal,
  title,
  text,
  btnText,
  data,
  index,
}) {
  const images = [Spam, Fiching, Profil];
  return (
    <div className="community-modal-content">
      <Image
        src={CloseIcon}
        className="close-btn"
        alt="btn-close"
        onClick={handleCloseModal}
      />
      <div className="community-modal-content-img">
        <div className="img">
          <Image src={images[index]} alt="image" />
        </div>
        <div community-modal-content>
          <p className="paragraph">{text}</p>
          <button>
            {btnText} <Image src={ArrowLeft} alt="arrow-left" />
          </button>
        </div>
      </div>
      <div className="community-modal-content-left">
        <h3>{title}</h3>
        {data.map(({ title, desc, id, textColor }) => (
          <div key={id} className="content">
            {title && <h3 className="title-color">{title}</h3>}
            <p>
              <span className="text-color">{textColor} </span>
              <span>{desc}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
