import React from "react";
import { Image } from "react-bootstrap";
import ArrowDown from "../../assets/svg/arrowDownGreen.svg";

export default function RightKnowledge({ lists }) {
  return (
    <ul>
      {lists &&
        lists.map((item, idx) => (
          <li className="knowledge-item" key={idx}>
            <span>{item}</span>
            <Image src={ArrowDown} alt="arrow-down" className="arrow-down" />
          </li>
        ))}
    </ul>
  );
}
