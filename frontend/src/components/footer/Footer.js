import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h3 className="footer-logo">Логотип</h3>
          <p className="footer-date">© 2022</p>
        </div>
        <div className="footer-col">
          <a href="/#">Політика конфідеційності</a>
          <a href="/#">Про нас</a>
          <a href="/#">Користувацька угода</a>
          <a href="/#">Політика використання файлів cookie</a>
        </div>
        <div className="footer-col">
          <a href="/#">Мапа сайту</a>
          <a href="/#">Служба підтримки</a>
          <a href="/#">Договір публічної оферти</a>
          <a href="/#" className="footer-btn">
            Політика використання файлів cookie
          </a>
        </div>
        <div className="footer-contact-partner">
          <div className="footer-col partner">
            <h4 className="our-partner">Наші партнери:</h4>
            <div className="partner-col">
              <p>Visa</p>
              <p>Mastercard</p>
              <p>Paypal</p>
            </div>
            <div className="partner-col">
              <p>Visa</p>
              <p>Mastercard</p>
            </div>
            <div className="partner-col">
              <p>Visa</p>
              <p>Mastercard</p>
              <p>Paypal</p>
            </div>
          </div>
          <div className="footer-col">
            <h4 className="footer-contact-text">Контакти</h4>
            <p className="adress-text">м. Київ, вул. Нижній Вал 33</p>
            <p className="adress-text">+38 097 555 33 44</p>
            <p className="adress-text">Пошта</p>
            <div className="network-content">
              <p className="network"></p>
              <p className="network"></p>
              <p className="network"></p>
              <p className="network"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
