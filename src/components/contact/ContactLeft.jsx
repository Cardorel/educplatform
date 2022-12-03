import React from "react";
import InputCheckBox from "../common/InputCheckBox";
import InputContent from "../common/InputContent";

export default function ContactLeft() {
  return (
    <div className="contact-left">
      <h3 className="contact-title">Зворотній зв’язок</h3>
      <div className="contact-content-inputs">
        <InputContent
          color="#FF5600"
          placeholder="Скажіть нам Ваше ім’я"
          type="text"
          text="Як нам до Вас звертатися?"
        />
        <InputContent
          color="#FF5600"
          placeholder="Вкажіть мобільний номер телефону"
          type="text"
          text="Ваш телефон для швидкої комунікації:"
        />
      </div>
      <div className="input-checkbox-content">
        <h3 className="input-title">Визначте тип Вашого запиту:</h3>
        <div className="input-question-content">
          <InputCheckBox labelText="Питання" value="Питання" />
          <InputCheckBox labelText="Хочу запропонувати..." value="Питання" />
          <InputCheckBox labelText="Проблема" value="Питання" />
          <InputCheckBox labelText="Скарга" value="Питання" />
        </div>
      </div>
      <div className="text-area-content">
        <h3 className="text-area-content-title">Спитайте щось в нас</h3>
        <textarea placeholder="Тут пишіть свої питання, нарікання, скарги, проблеми..."></textarea>
      </div>
      <div className="btn-content">
        <button className="btn-clear">Стерти все</button>
        <button className="btn-ready">Готово!</button>
      </div>
    </div>
  );
}
