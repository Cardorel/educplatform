import React from "react";
import { Image } from "react-bootstrap";
import ArrowRight from "../../assets/svg/arrowUpWhite.svg";

export default function AccountItem({ text }) {
  return (
    <li>
      <span>{text}</span>
      <Image src={ArrowRight} alt="arrow-left" />
    </li>
  );
}
