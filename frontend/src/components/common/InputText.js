import React from "react";
import "./common.scss";

const InputText = ({ type, placeholder, color }) => (
  <div className="input-content" style={{ background: color }}>
    <input className="input-text" type={type} placeholder={placeholder} />
  </div>
);

export default InputText;
