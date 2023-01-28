import React from "react";
import { Image } from "react-bootstrap";
import CrossCircle from "../../assets/svg/course/crossCircle.svg";

export default function ParameterContent({ titleProgram, handleClick }) {
  return (
    <div className="parameter-content">
      <h4>{titleProgram}</h4>
      <div className="content">
        <h4>Додайте пункт</h4>
        <Image src={CrossCircle} alt="cross-circle" onClick={handleClick} />
      </div>
    </div>
  );
}
