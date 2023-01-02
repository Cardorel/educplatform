import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import SignButton from "../common/SignButton";
import JoinContainer from "./JoinContainer";

export default function ChooseStatus() {
  const navigate = useNavigate();
  const handleClickRegister = () => {
    navigate("/");
  };
  return (
    <JoinContainer>
      <div className="status-container">
        <h4>Оберіть Ваш статус:</h4>
        <div className="status-content">
          <SignButton tabIndex={0} text="Для студента" />
          <SignButton tabIndex={1} text="Для ментора" />
          <SignButton tabIndex={2} text="Для роботодавця" />
        </div>
        <div className="register-content">
          <p>У мене немає акаунту!</p>
          <Button
            text="Зареєструватися"
            padding="15px 200px"
            handleClick={handleClickRegister}
          />
        </div>
      </div>
    </JoinContainer>
  );
}
