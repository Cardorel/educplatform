import React from "react";
import { Image } from "react-bootstrap";
import InputText from "../common/InputText";
import ArrowDown from "../../assets/svg/course/arrowDown.svg";

export default function ParameterTwoContent({
  textName,
  handleNameOnChange,
  textDesc,
  handleDescOnChange,
  idx,
}) {
  return (
    <div className="parameter-w-content">
      <div className="parameter-row">
        <p className="number">{idx}</p>
      </div>
      <div className="parameter-row-inputs">
        <InputText
          color="#EDEDED"
          placeholder="Розкажіть щось, надайте опис пункту"
          type="text"
          value={textName}
          handleOnChange={handleNameOnChange}
        />
        <InputText
          color="#EDEDED"
          placeholder="Розкажіть щось, надайте опис пункту"
          type="text"
          value={textDesc}
          handleOnChange={handleDescOnChange}
        />
      </div>
      <div className="parameter-row-btn">
        <button className="btn-left">
          <Image src={ArrowDown} alt="arrow-down" />
        </button>
        <button>
          <Image src={ArrowDown} className="img-up" alt="arrow-down" />
        </button>
      </div>
    </div>
  );
}
