import React from "react";
import InputText from "../common/InputText";

export default function Info() {
  return (
    <div className="info-contact">
      <h3>Більше інформації</h3>
      <div className="info-contact-row">
        <div className="info-contact-col">
          <h5>Подзвоніть мені</h5>
          <InputText
            color="#8C8E10"
            placeholder="Введіть свій номер телефону"
            type="text"
          />
        </div>
        <div className="info-contact-col">
          <h5>Написати мені на пошту</h5>
          <InputText
            color="#8C8E10"
            placeholder="Введіть свою електронну пошту"
            type="email"
          />
        </div>
      </div>
    </div>
  );
}
