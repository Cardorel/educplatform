import React from "react";

export default function ContactHelpRight() {
  return (
    <div className="contact-right">
      <h3 className="contact-right-title">
        Не знайшли відповіді на своє питання?
      </h3>
      <h6 className="contact-right-sub-title">
        Зверніться до наших менеджерів:
      </h6>
      <div className="contact-info">
        <h3 className="contact-info-title">Контактна інформація</h3>
        <div className="contact-info-content">
          <div>
            <h5>Наш головний офіс:</h5>
            <p>вул. Нижній Вал, 33, 5 поверх, офіс. 307</p>
          </div>
          <div>
            <h5>Телефони:</h5>
            <div className="info-paragraphs">
              <p>+38 044 555 33 44</p>
              <p>+38 097 555 33 44</p>
            </div>
          </div>
          <div>
            <h5>Цілодобова допомога в пошті:</h5>
            <p>questions@ucs.ua</p>
          </div>
        </div>
      </div>
    </div>
  );
}
