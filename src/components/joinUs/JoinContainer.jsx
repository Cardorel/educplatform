import React from "react";
import BigLogo from "../logo/BigLogo";
import ArrowBack from "../../assets/svg/arrowLeflLong.svg";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function JoinContainer({ children }) {
  return (
    <div className="join">
      <div className="join-logo">
        <BigLogo />
        <button className="arrow-back">
          <Image src={ArrowBack} alt="arow" />
          Назад до головної
        </button>
        <Link className="help-link" to="/help">
          Служба підтримки
        </Link>
      </div>
      {children}
    </div>
  );
}
