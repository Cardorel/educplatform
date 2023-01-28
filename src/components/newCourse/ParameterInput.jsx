import React from "react";
import InputText from "../common/InputText";
import CrossWhite from "../../assets/svg/course/crossWhite.svg";
import { Image } from "react-bootstrap";
import ArrowDown from "../../assets/svg/course/arrowDown.svg";

export default function ParameterInput({
  textName,
  textDesc,
  handleNameOnChange,
  handleDescOnChange,
  handleImgOnChange,
  idx,
}) {
  return (
    <div className="parameter-input">
      <div className="parameter-row">
        <p className="number">{idx}</p>
      </div>
      <div className="parameter-row-inputs">
        <InputText
          value={textName}
          color="#EDEDED"
          placeholder="Введіть назву"
          type="text"
          handleOnChange={handleNameOnChange}
        />
        <InputText
          color="#EDEDED"
          value={textDesc}
          placeholder="Розкажіть щось, надайте опис пункту"
          type="text"
          handleOnChange={handleDescOnChange}
        />
      </div>
      <div className="parameter-row">
        <label className="upload" htmlFor="add-img">
          <div className="content-img">
            <Image src={CrossWhite} alt="cross-white" />
          </div>
          <p className="content-text">Додати фото</p>
          <input
            type="file"
            onChange={handleImgOnChange}
            style={{ display: "none" }}
            id="add-img"
          />
        </label>
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
