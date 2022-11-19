import React from "react";
import Button from "../common/Button";
import InputText from "../common/InputText";
import "./registration.scss";

export default function Registration() {
  return (
    <div className="registration-container">
      <div className="logo-content">
        <h3 className="logo-text">Логотип</h3>
      </div>
      <h4 className="registration-text">Створіть Ваш новий обліковий запис</h4>
      <div className="registration-input-content">
        <InputText
          color="#FF5600"
          placeholder="Ваше повне ім‘я"
          imageUrl={null}
          type="text"
        />
        <InputText
          color="#FF5600"
          placeholder="Ім‘я користувача"
          imageUrl={null}
          type="text"
        />
        <InputText
          color="#FF5600"
          placeholder="Номер телефону"
          imageUrl={null}
          type="text"
        />
        <InputText
          color="#FF5600"
          placeholder="Статус користувача: слухач/ментор"
          imageUrl={null}
          type="text"
        />
        <InputText
          color="#FF5600"
          placeholder="Електронна пошта"
          imageUrl={null}
          type="email"
        />
        <InputText
          color="#FF5600"
          placeholder="Пароль"
          imageUrl={null}
          type="password"
        />
        <InputText
          color="#FF5600"
          placeholder="Повторіть пароль"
          imageUrl={null}
          type="password"
        />
        <Button text="ЗАРЕЄСТРУВАТИСЯ" padding="23px" />
      </div>
      <div className="registration-footer">
        <p className="registration-privacy">
          Натискаючи цю кнопку, ви погоджуєтеся з{" "}
          <a href="/#" className="registration-link">положеннями і умовами</a> та {" "}
          <a href="/#" className="registration-link">політикою конфіденційності</a>.
        </p>
        <p className="registration-autho">Уже маєте обліковий запис ...? <a className="registration-link" href="/#">авторизуйтеся</a></p>
      </div>
    </div>
  );
}
