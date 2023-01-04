import React from "react";
import { completeInfo } from "../../assets/consts/data";
import Button from "../common/Button";
import InputCheckBox from "../common/InputCheckBox";
import InputText from "../common/InputText";
import Select from "../common/Select";
import JoinContainer from "../joinUs/JoinContainer";

export default function CompleteInfo() {
  const { contries, days, months, languages, years } = completeInfo;
  return (
    <JoinContainer>
      <div className="complete-info">
        <h4>Доповніть інформацію про себе</h4>
        <p className="text">
          Ця інформація потрібна для кращої роботи системи автоматичного підбору
          курсів. Вони будуть відповідати віднині Вашим смакам та вимогам.
        </p>
        <div className="complete-content">
          <div className="complete-row">
            <h3>Дата народження:</h3>
            <Select data={days} />
            <Select data={months} />
            <Select data={years} />
          </div>
          <div className="complete-row">
            <div className="status-content">
              <h3 className="status">Ваша стать:</h3>
              <div className="inputs">
                <InputCheckBox labelText="Чоловіча" />
                <InputCheckBox labelText="Жіноча" />
              </div>
            </div>
            <div>
              <div className="complete-col">
                <h3>Я з:</h3>
                <Select data={contries} />
              </div>
              <div className="complete-col-l">
                <h3>Я спілкуюся:</h3>
                <Select data={languages} />
              </div>
              <p className="text-l">
                Тут Ви можете додати кілька мов. Це допоможе нам рекомендувати
                Вам цікаві курси іншими мовами.
              </p>
            </div>
          </div>
          <div className="complete-row">
            <h3 className="input-title">Мої інтереси:</h3>
            <InputText color="#FF5600" placeholder="Почніть вводити інтереси" />
          </div>
          <div className="complete-row">
            <h3 className="input-title">Риси характеру:</h3>
            <InputText
              color="#FF5600"
              placeholder="Почніть вводити риси характеру"
            />
          </div>
          <p className="text-help">
            Це потрібно для пошуку нових співрозмовників. Наша розумна система
            проаналізує та запропонує найкращі варіанти. Так Ви уникнете
            нецікавих Вам людей та швидше розширите коло друзів.
          </p>
          <div className="btn-content">
            <Button text="ПРОДОВЖИТИ" padding="15px 200px" />
          </div>
        </div>
      </div>
    </JoinContainer>
  );
}
