import React from "react";
import { Image } from "react-bootstrap";

export default function AddFileContent({
  text,
  img,
  idx,
  accept,
  value,
  handleChange,
}) {
  return (
    <label htmlFor={`file-img-${idx}`}>
      <Image src={img} alt="img-ico" />
      <p>{text}</p>
      <input
        id={`file-img-${idx}`}
        type="file"
        style={{ display: "none" }}
        accept={accept}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}
