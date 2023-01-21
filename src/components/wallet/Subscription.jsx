import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { completeInfo, tabData } from "../../assets/consts/data";
import ArrowDown from "../../assets/svg/arrowDown.svg";
import InputContent from "../common/InputContent";
import InputText from "../common/InputText";
import Select from "../common/Select";
import TabParagraph from "./TabParagraph";

export default function Subscription() {
  const { days } = completeInfo;
  const [tabTexts, setTabTexts] = useState(tabData);
  const handleClickTab = (id) => {
    setTabTexts((d) =>
      d.map((v) =>
        v.id === id ? { ...v, isActive: true } : { ...v, isActive: false }
      )
    );
  };
  return (
    <div className="wallet-subscription">
      <h4>Сплатіть свою підписку:</h4>
      <div className="wallet-row">
        <div className="wallet-col">
          <p>Ментор</p>
          <Image src={ArrowDown} alt="arrow-down" />
        </div>
        <div className="wallet-col">
          <p>Місяць</p>
          <Image src={ArrowDown} alt="arrow-down" />
        </div>
      </div>
      <div className="subscription-content">
        <p>До сплати:</p>
        <p className="price">30 $</p>
      </div>
      <div className="subscription-content cart">
        {tabTexts?.map(({ id, text, isActive }) => (
          <TabParagraph
            text={text}
            isActive={isActive}
            key={id}
            id={id}
            handleClickTab={handleClickTab}
          />
        ))}
      </div>
      <div>
        <div className="cart-content">
          <div className="cart-body">
            <div className="cart-input">
              <InputContent
                text="Номер карти:"
                color="#FF5600"
                type="text"
                placeholder="Введіть номер своє карти:"
              />
            </div>
            <div className="payment-inputs">
              <div className="select-validity">
                <p>Строк дії:</p>
                <div className="select-content">
                  <Select data={days} />
                  <Select
                    data={[
                      "01",
                      "02",
                      "03",
                      "04",
                      "05",
                      "06",
                      "07",
                      "08",
                      "09",
                      "10",
                      "11",
                      "12",
                    ]}
                  />
                </div>
              </div>
              <div>
                <p>CW2/CVC2</p>
                <div className="cvv-content">
                  <InputText color="#FF5600" type="text" placeholder="0" />
                  <InputText color="#FF5600" type="text" placeholder="0" />
                  <InputText color="#FF5600" type="text" placeholder="0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-pay">
          <span>Сплатити</span>
        </button>
      </div>
    </div>
  );
}
