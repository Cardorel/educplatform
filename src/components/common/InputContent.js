import React from "react";
import InputText from "./InputText";

export default function InputContent({
  text,
  type,
  placeholder,
  color,
  imageUrl,
  value,
  handleOnChange,
}) {
  return (
    <div className="input-text-content">
      <h4>{text}</h4>
      <InputText
        type={type}
        placeholder={placeholder}
        color={color}
        imageUrl={imageUrl}
        value={value}
        handleOnChange={handleOnChange}
      />
    </div>
  );
}
