import React from "react";
import { Image } from "react-bootstrap";
import Button from "../common/Button";
import InputText from "../common/InputText";
import ArrowBack from "../../assets/svg/arrowBack.svg";
import "./resetPassword.scss"
import Logo from "../logo/Logo";

export default function ResetPassword() {
  return (
    <div className="reset-password">
      <div className="logo-content">
        <Logo/>
      </div>
      <div className="reset-password-content">
        <h4>Увійти до особистого кабінету</h4>
        <InputText
          color="#FF5600"
          placeholder="Ваша електронна пошта"
          imageUrl={null}
          type="text"
        />
        <Button text="НАДІСЛАТИ ПОСИЛАННЯ ДЛЯ СКИДАННЯ ПАРОЛЮ" padding="23px" />
        <a className="link-reset" href="/#">
          <Image src={ArrowBack} alt="arrow-back" />
          <span>Назад</span>
        </a>
      </div>
    </div>
  );
}
