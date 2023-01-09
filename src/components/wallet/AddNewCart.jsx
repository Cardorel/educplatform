import React from "react";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { cartData, completeInfo } from "../../assets/consts/data";
import CloseIco from "../../assets/svg/close.svg";
import InputContent from "../common/InputContent";
import InputText from "../common/InputText";
import Select from "../common/Select";
import { formattingCartNumber } from "../payment/formatting";

export default function AddNewCart({ handleClickCToggleModal }) {
  const { days } = completeInfo;
  const [cartNumber, setCartNumber] = useState("");
  const [firstChiffreCVV, setFirstChiffreCVV] = useState("");
  const [secondChiffreCVV, setSecondChiffreCVV] = useState("");
  const [thirdChiffreCVV, setThirdChiffreCVV] = useState("");
  const handleChangeCartNumber = (e) => {
    setCartNumber(formattingCartNumber(e.target.value));
  };

  const handleClickCancel = () => {
    setCartNumber("");
    handleClickCToggleModal();
    setFirstChiffreCVV("");
    setThirdChiffreCVV("");
    setSecondChiffreCVV("");
  };

  const handleClickAdd = () => {
    const id = Math.random();
    cartData.push({
      id,
      cartNumber,
      type: "master",
      title: "Картка виплат",
    });
    handleClickCToggleModal();
  };
  return (
    <div className="add-new-cart">
      <div className="add-new-cart-container">
        <div className="add-new-cart-header">
          <h5>Додати нову платіжну картку</h5>
          <Image
            src={CloseIco}
            alt="close-ico"
            onClick={handleClickCToggleModal}
          />
        </div>
        <div className="add-new-cart-content">
          <InputContent
            text="Номер карти:"
            color="#FF5600"
            type="text"
            placeholder="Введіть номер своє карти:"
            value={cartNumber}
            handleOnChange={handleChangeCartNumber}
          />
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
              <InputText
                color="#FF5600"
                type="text"
                placeholder="0"
                value={firstChiffreCVV}
                handleOnChange={(e) => setFirstChiffreCVV(e.target.value)}
              />
              <InputText
                color="#FF5600"
                type="text"
                placeholder="0"
                value={secondChiffreCVV}
                handleOnChange={(e) => setSecondChiffreCVV(e.target.value)}
              />
              <InputText
                color="#FF5600"
                type="text"
                placeholder="0"
                value={thirdChiffreCVV}
                handleOnChange={(e) => setThirdChiffreCVV(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="btns">
        <button className="btn-cancel" onClick={handleClickCancel}>
          Скасувати
        </button>
        <button className="btn-add" onClick={handleClickAdd}>
          Додати
        </button>
      </div>
    </div>
  );
}
