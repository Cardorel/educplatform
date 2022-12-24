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
import { Link } from "react-router-dom";

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
            <Link to="/privacy-policy">Політика конфідеційності</Link>
            <a href="/#">Про нас</a>
            <Link to="/community">Політика для спільноти</Link>
            <a href="/#">Політика використання файлів cookie</a>
          </div>
          <div className="footer-col">
            <Link to="/contact">Мапа сайту</Link>
            <Link href="/">Служба підтримки</Link>
            <Link to="/contract">Договір публічної оферти</Link>
            <Link to="/#" className="footer-btn">
              Підписатися на розсилку
            </Link>
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
            <Link to="/contact" className="footer-contact-text">
              Контакти
            </Link>
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
