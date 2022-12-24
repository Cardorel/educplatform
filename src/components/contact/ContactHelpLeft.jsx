import React from "react";
import InputContent from "../common/InputContent";

export default function ContactHelpLeft() {
  return (
    <div className="contact-left">
      <h3 className="contact-title">Служба підтримки</h3>
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
