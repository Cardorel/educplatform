import React from "react";
import { Image } from "react-bootstrap";
import Google from "../../assets/svg/google.svg";
import PrivatBank from "../../assets/svg/privatBank.svg";
import InputText from "../common/InputText";
import VisaIcon from "../../assets/svg/visa.svg";
import MasterIcon from "../../assets/svg/master.svg";
import MaestroIcon from "../../assets/svg/maestro.svg";

export default function PaymentRightContent({
  cvv,
  dateCart,
  nmumberCart,
  handleChangetCvv,
  handleChangeDateCart,
  handleChangeNummberCart,
  handleClickSubmit,
}) {
  return (
    <div className="payment-right">
      <h4 className="payment-right-title">Оплата навчальних послуг</h4>
      <div className="payment-right-content">
        <div className="payment-order-content">
          <div className="order-content">
            <p>Замовлення № 327</p>
            <p>
              Назва платежу: Оплата навчання за спеціальною сертифікаційною
              програмою <span>“Введення в науку про дані”</span>
            </p>
          </div>
          <div className="pay-content">
            <p>До сплати</p>
            <p className="price">
              13 500,00 <span>грн</span>
            </p>
          </div>
        </div>
        <div className="payment-system">
          <p className="payment-system-title">
            Спрощена система оплати для Вашої зручності
          </p>
          <div className="payment-system-content">
            <Image src={Google} alt="google" />
            <span>GOOGLE PAY</span>
          </div>
          <div className="payment-system-content">
            <Image alt="privatBank" src={PrivatBank} />
            <span>ПРИВАТ24</span>
          </div>
        </div>
      </div>
      <div className="payment-separator">
        <p className="paragraph-or-text">Або</p>
        <p className="text-method">скористайтесь іншим методом</p>
      </div>
      <div className="payment-cart-content">
        <div className="payment-cart-method">
          <p className="pay-text">Платіжна картка</p>
          <div className="image-content">
            <div className="cart-icon">
              <Image src={VisaIcon} alt="visa-cart" />
            </div>
            <div className="cart-icon">
              <Image src={MasterIcon} alt="master-cart" />
            </div>
            <div className="cart-icon">
              <Image src={MaestroIcon} alt="maestro-cart" />
            </div>
          </div>
        </div>
        <div className="payment-cart-input-content">
          <div className="payment-cart-input">
            <div className="payment-cart-nummer">
              <InputText
                value={nmumberCart}
                color="#FF5600"
                placeholder="Номер картки"
                handleOnChange={handleChangeNummberCart}
              />
            </div>
            <div className="payment-cart-date">
              <InputText
                value={dateCart}
                color="#FF5600"
                placeholder="Термін дії"
                handleOnChange={handleChangeDateCart}
              />
            </div>
          </div>
          <div className="payment-cart-input second-input">
            <div className="payment-cart-termin">
              <InputText
                handleOnChange={handleChangetCvv}
                color="#FF5600"
                placeholder="CVV"
                value={cvv}
              />
            </div>
          </div>
          <div className="payment-btn-content">
            <button onClick={handleClickSubmit} className="payment-btn">
              ОПЛАТИТИ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
