import React from "react";
import { Image } from "react-bootstrap";

export default function ImageContent({ imageUrl, text }) {
  return (
    <div className="search-image">
      <Image src={imageUrl} alt="image-content" />
      <p>{text}</p>
    </div>
  );
}
