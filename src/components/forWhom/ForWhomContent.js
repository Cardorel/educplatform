import React from "react";
import { Image } from "react-bootstrap";

export default function ForWhomContent({ image, lists, title, iconUrl , color }) {
  return (
    <div className="for-whom-content">
      <div className="for-whom-content-left">
        <Image src={image} alt="image-user" />
      </div>
      <div className="for-whom-content-right">
        <h3 style={{color}}>{title}</h3>
        <ul>
          {lists &&
            lists.map((item, idx) => (
              <li key={idx}>
                <Image src={iconUrl} alt="icon-plus" />
                <p>{item}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
