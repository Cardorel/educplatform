import React from "react";
import Button from "../common/Button";
import ArrowLeft from "../../assets/svg/arrowLeft.svg";

export default function JoinUsContent({ handleClick }) {
  return (
    <div>
      <h4>Увійти до особистого кабінету</h4>
      <p>
        Для всіх зареєстрованих користувачів: студентів, менторів, роботодавців.
      </p>
      <Button
        padding="15px 100px"
        text="УВІЙТИ"
        imageUrl={ArrowLeft}
        handleClick={handleClick}
      />
    </div>
  );
}
