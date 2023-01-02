import React from "react";
import JoinContainer from "./JoinContainer";
import JoinUsContent from "./JoinUsContent";
import "./joinUs.scss";
import { useNavigate } from "react-router-dom";

export default function JoinUs() {
  const navigate = useNavigate();
  const handleClickSignIn = () => navigate("/status");
  const handleClickRegister = () => navigate("/register");
  return (
    <JoinContainer>
      <div className="content">
        <JoinUsContent
          title="Увійти до особистого кабінету"
          text="Для всіх зареєстрованих користувачів: студентів, менторів, роботодавців."
          btnText="УВІЙТИ"
          handleClick={handleClickSignIn}
        />
        <p className="text-separator">Або</p>
        <JoinUsContent
          title="... зареєструйтеся БЕЗКОШТОВНО"
          text="Створіть власний навчальний онлайн-план, отримайте підвищення кваліфікації, створюйте та монетизуйте свої онлайн-курси, підписку за допомогою ...
          "
          btnText="ЗАРЕЄСТРУВАТИСЯ СЬОГОДНІ"
          handleClick={handleClickRegister}
        />
      </div>
    </JoinContainer>
  );
}
