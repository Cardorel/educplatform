import React from "react";
import Button from "../common/Button";
import ArrowLeft from "../../assets/svg/arrowLeft.svg";

export default function JoinUsContent({ handleClick, title, text, btnText }) {
  return (
    <div className="join-us-content">
      <h4>{title}</h4>
      <p>{text}</p>
      <Button
        padding="15px 100px"
        text={btnText}
        imageUrl={ArrowLeft}
        handleClick={handleClick}
      />
    </div>
  );
}
