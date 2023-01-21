import React, { useState } from "react";
import PaymentLeftContent from "./PaymentLeftContent";
import PaymentRightContent from "./PaymentRightContent";
import "./payment.scss";
import {
  formattingCartCVV,
  formattingCartDate,
  formattingCartNumber,
} from "./formatting";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [cvv, setCvv] = useState("");
  const [dateCart, setDateCart] = useState("");
  const [nmumberCart, setNummberCart] = useState("");
  const { data } = useSelector((state) => state?.currentData);
  const navigate = useNavigate();

  const handleChangeDateCart = (e) => {
    setDateCart(formattingCartDate(e.target.value));
  };

  const handleChangeNummberCart = (e) => {
    setNummberCart(formattingCartNumber(e.target.value));
  };

  const handleChangetCvv = (e) => {
    setCvv(formattingCartCVV(e.target.value));
  };

  const handleClickSubmit = () => {
    setTimeout(() => {
      navigate("/all-courses");
    }, 1000);
  };

  return (
    <div className="payment">
      <PaymentLeftContent />
      <PaymentRightContent
        cvv={cvv}
        dateCart={dateCart}
        nmumberCart={nmumberCart}
        handleChangeDateCart={handleChangeDateCart}
        handleChangeNummberCart={handleChangeNummberCart}
        handleClickSubmit={handleClickSubmit}
        handleChangetCvv={handleChangetCvv}
        data={data}
      />
    </div>
  );
}
