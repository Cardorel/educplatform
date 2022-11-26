import React from "react";
import Button from "../common/Button";
import InputText from "../common/InputText";
import ArrowBlack from "../../assets/svg/arrowBlack.svg";
import Google from "../../assets/svg/google.svg";
import "./signIn.scss";
import Logo from "../logo/Logo";
import { Image } from "react-bootstrap";

export default function SignIn() {
  return (
    <div className="sign-in">
      <div className="logo-content">
        <Logo />
      </div>
      <div className="sign-in-content">
        <div className="sign-in-left">
          <div className="sign-header">
            <h4 className="sign-title">Увійти до особистого кабінету</h4>
            <div className="google-content">
              <Image src={Google} alt="google" />
              <span>УВІЙТИ З GOOGLE</span>
            </div>
          </div>
          <InputText
            color="#FF5600"
            placeholder="Ваше повне ім‘я"
            imageUrl={null}
            type="text"
          />
          <InputText
            color="#FF5600"
            placeholder="Пароль"
            imageUrl={null}
            type="password"
          />
          <label className="label-input">
            <input type="checkbox" />
            <span>Запам’ятати мене</span>
          </label>
          <Button text="УВІЙТИ" padding="23px" />
          <p className="reset-password">Забули свій пароль</p>
        </div>
        <div className="sign-in-right">
          <h4>... зареєструйтеся БЕЗКОШТОВНО</h4>
          <p className="sign-in-right-para">
            Створіть власний навчальний онлайн-план, отримайте підвищення
            кваліфікації, створюйте та монетизуйте свої онлайн-курси, підписку
            за допомогою ...
          </p>
          <Button
            text="ЗАРЕЄСТРУВАТИСЯ СЬОГОДНІ"
            padding="23px"
            imageUrl={ArrowBlack}
          />
        </div>
      </div>
    </div>
  );
}
