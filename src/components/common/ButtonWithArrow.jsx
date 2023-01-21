import React from "react";
import { Image } from "react-bootstrap";
import ArrowLeft from "../../assets/svg/arrowLeft.svg";

export default function ButtonWithArrow({ text }) {
  return (
    <button className="btn-arrow-left">
      <span>{text}</span>
      <Image src={ArrowLeft} alt="arrow-left" />
    </button>
  );
}
