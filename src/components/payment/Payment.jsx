import React from "react";
import PaymentLeftContent from "./PaymentLeftContent";
import PaymentRightContent from "./PaymentRightContent";
import "./payment.scss";

export default function Payment() {
  return (
    <div className="payment">
      <PaymentLeftContent />
      <PaymentRightContent />
    </div>
  );
}
