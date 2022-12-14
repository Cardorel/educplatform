import React from "react";
import { Image } from "react-bootstrap";

export default function HowIsWorkContent({ url, title, isTop, id, color }) {
  return (
    <div
      key={id}
      className={`home-image-container ${isTop ? "is-top" : "is-not-top"}`}
    >
      <div
        className={`home-work-image-content ${
          color !== "#FF8001" ? "bg-img" : ""
        }`}
      >
        <Image className="image" alt={title} src={url} />
        <p className="title">{title}</p>
      </div>
    </div>
  );
}
