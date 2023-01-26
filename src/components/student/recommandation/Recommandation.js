import React from "react";
import { Image } from "react-bootstrap";
import BgTop from "../../../assets/svg/student/bgTop.svg";
import Button from "../../common/Button";
import InputsRecommandation from "./InputsRecommandation";

export default function Recommandation() {
  return (
    <div className="student-recommandation">
      <div className="student-recommandation-col recommandation-image">
        <Image src={BgTop} alt="bg-to" />
        <p className="header-text">
          Отримуйте персональні рекомендації, підібрані відповідно до Вашого
          досвіду, освіти та цілей
        </p>
      </div>
      <InputsRecommandation
        title="Досвід роботи"
        firstText="Професія"
        secondText="Досвід роботи"
        thirdText="Роботодавець"
        firstPlaceholder="Приклад: фінансист"
        secondPlacehold="Приклад: фінансист"
        thirdPlaceholder="Приклад: Київстар"
      />
      <InputsRecommandation
        title="Освіта"
        firstText="Ступінь"
        secondText="Навчальний заклад"
        thirdText="Статус"
        firstPlaceholder="Приклад: бакалавр"
        secondPlacehold="Приклад: Університет ...."
        thirdPlaceholder="Приклад: Випускник"
      />
      <InputsRecommandation
        title="Кар’єрна ціль"
        firstText="Професія"
        secondText="Галузь"
        thirdText=""
        firstPlaceholder="Приклад: дата аналітик"
        secondPlacehold="Приклад: дата аналітик в ІТ"
        thirdPlaceholder={null}
      />
      <div className="btn-content">
        <Button text="ПРОДОВЖИТИ" padding="23px 50px" />
      </div>
    </div>
  );
}
