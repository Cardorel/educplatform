import React from "react";
import { Image } from "react-bootstrap";
import "./common.scss";

const InputText = ({
  type,
  placeholder,
  color,
  imageUrl,
  value,
  handleOnChange,
  errorText,
}) => (
  <div className="inputs-content-validation">
    <div
      className="input-content"
      style={{ boxShadow: `inset 0px -2px 0px ${color}` }}
    >
      <input
        className="input-text"
        value={value}
        onChange={handleOnChange}
        type={type}
        placeholder={placeholder}
      />
      {imageUrl && (
        <Image className="image-search" src={imageUrl} alt="search-image" />
      )}
    </div>
    {errorText && <h5>{errorText}</h5>}
  </div>
);

export default InputText;
