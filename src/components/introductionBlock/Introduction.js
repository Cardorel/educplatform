import React from "react";
import "./introduction.scss";

export default function Introduction() {
  return (
    <div className="block">
      <p className="introheader">Онлайн платформа, яка полегшує навчання</p>
      <div className="moreInfo">
        <p className="moreInfoText">Більше інформації</p>
        <img className="moreInfoIMG" alt="arrow" src="arrow.png" />
      </div>
    </div>
  );
}
