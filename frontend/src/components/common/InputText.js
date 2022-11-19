import React from "react";
import { Image } from "react-bootstrap";
import "./common.scss";

const InputText = ({ type, placeholder, color, imageUrl }) => (
  <div
    className="input-content"
    style={{ boxShadow: `inset 0px -2px 0px ${color}` }}
  >
    <input className="input-text" type={type} placeholder={placeholder} />
    {imageUrl && (
      <Image className="image-search" src={imageUrl} alt="search-image" />
    )}
  </div>
);

export default InputText;
