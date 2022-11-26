import React from "react";
import { Image } from "react-bootstrap";
import ImageContent from "./ImageContent";

export default function SearchContent({ imageUrl, arrowUrl, text }) {
  return (
    <div className="search-content">
      <ImageContent imageUrl={imageUrl} text={text} />
      <Image src={arrowUrl} alt="image-arrow" />
    </div>
  );
}
