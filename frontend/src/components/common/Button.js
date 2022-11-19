import React from "react";
import { Image } from "react-bootstrap";

export default function Button({ padding, text, imageUrl }) {
  return (
    <button className="try-btn" style={{ padding }}>
      <span>{text}</span>
      {imageUrl && <Image src={imageUrl} alt="arrow-icon" />}
    </button>
  );
}
