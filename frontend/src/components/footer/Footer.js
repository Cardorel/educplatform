import React from "react";
import { Image } from "react-bootstrap";
import "./footer.scss";
import Visa from "../../assets/svg/partner/visa.svg";
import Master from "../../assets/svg/partner/mastercard.svg";
import Paypal from "../../assets/svg/partner/paypal.svg";
import Facebook from "../../assets/svg/social/facebook.svg";
import Instagram from "../../assets/svg/social/instagram.svg";
import Twitter from "../../assets/svg/social/twitter.svg";
import Linkdlen from "../../assets/svg/social/linkdlen.svg";
import Logo from "../logo/Logo";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <Logo />
          <p className="footer-date">© 2022</p>
        </div>
        <div className="footer-politic">
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
              Підписатися на розсилку
            </a>
          </div>
        </div>
        <div className="footer-contact-partner">
          <div className="footer-col partner">
            <h4 className="our-partner">Наші партнери:</h4>
            <div className="partner-col">
              <Image src={Visa} alt="visa" />
              <Image src={Master} alt="mastercard" />
              <Image src={Paypal} alt="paypal" />
            </div>
          </div>
          <div className="footer-col">
            <h4 className="footer-contact-text">Контакти</h4>
            <p className="adress-text">м. Київ, вул. Нижній Вал 33</p>
            <p className="adress-text">+38 097 555 33 44</p>
            <p className="adress-text">questions@ucs.ua</p>
            <div className="network-content">
              <a href="/#">
                <Image src={Instagram} alt="Instagram" />
              </a>
              <a href="/#">
                <Image src={Facebook} alt="Facebook" />
              </a>
              <a href="/#">
                <Image src={Twitter} alt="Twitter" />
              </a>
              <a href="/#">
                <Image src={Linkdlen} alt="Linkdlen" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
