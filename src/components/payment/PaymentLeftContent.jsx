import React from "react";
import { Image } from "react-bootstrap";
import BigLogo from "../logo/BigLogo";
import ArrowBack from "../../assets/svg/backArrow.svg";
import { Link, useNavigate } from "react-router-dom";

export default function PaymentLeftContent() {
  const navigate = useNavigate();
  return (
    <div className="payment-left">
      <BigLogo />
      <button onClick={() => navigate(-1)}>
        <Image src={ArrowBack} alt="arrow-back" />
        <span>Назад до попередньої</span>
      </button>
      <Link to="/help" className="assistance-link">
        Служба підтримки
      </Link>
    </div>
  );
}
