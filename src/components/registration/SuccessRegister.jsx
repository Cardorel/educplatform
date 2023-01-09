import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import BigLogo from "../logo/BigLogo";

export default function SuccessRegister() {
  const navigate = useNavigate();
  const handleClickToNextPage = () => navigate("/start-message");
  return (
    <div className="success-register">
      <BigLogo />
      <div className="success-content">
        <h4>Дякуємо! Ваш запит надіслано!</h4>
        <p>
          На Вашу електронну пошту надійде лист підтвердження. Враховуючи
          складні обставини в яких опинилась Україна обробка запиту може тривати
          1-2 дні. Вибачте за незручності!
        </p>
      </div>
      <Button
        text="ПРОДОВЖИТИ"
        padding="15px 200px"
        handleClick={handleClickToNextPage}
      />
    </div>
  );
}
