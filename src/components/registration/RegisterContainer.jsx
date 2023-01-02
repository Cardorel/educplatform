import React from "react";
import JoinContainer from "../joinUs/JoinContainer";
import JoinUsContent from "../joinUs/JoinUsContent";
import GoogleIco from "../../assets/svg/google.svg";
import { Image } from "react-bootstrap";

export default function RegisterContainer() {
  return (
    <JoinContainer>
      <div className="register-container">
        <div className="join-us-content">
          <h4>Зареєструватися за допомогою Google</h4>
          <p>Спрощена система реєстрація, зручний вхід в подальшому.</p>
          <button className="btn-register-google">
            <Image src={GoogleIco} alt="ico-google" />
            ЗАРЕЄСТРУВАТИСЯ З GOOGLE
          </button>
        </div>
        <p className="text-separator">Або</p>
        <JoinUsContent
          btnText="ЗАРЕЄСТРУВАТИСЯ СЬОГОДНІ"
          text="Вмикніть автоматичне збереження вашого логіну та паролю та спростіть собі вхід на платформу."
          title="Зареєструватися за поштою"
        />
      </div>
    </JoinContainer>
  );
}
