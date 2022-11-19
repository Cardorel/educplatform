import React from "react";
import Button from "../common/Button";
import InputText from "../common/InputText";
import ArrowBlack from "../../assets/svg/arrowBlack.svg";
import "./signIn.scss";

export default function SignIn() {
  return (
    <div className="sign-in">
      <div className="logo-content">
        <h3 className="logo-text">Логотип</h3>
      </div>
      <div className="sign-in-content">
        <div className="sign-in-left">
          <h4>Увійти до особистого кабінету</h4>
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
