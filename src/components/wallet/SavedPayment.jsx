import React from "react";
import { Image } from "react-bootstrap";
import PlusIco from "../../assets/svg/crossWhite.svg";
import EditIco from "../../assets/svg/edit.svg";
import Visa from "../../assets/svg/visa.svg";
import Master from "../../assets/svg/master.svg";
import DeleteIco from "../../assets/svg/delete.svg";
import { cartData } from "../../assets/consts/data";
import { maskMiddleNumber } from "./maskMiddleNumber";
import { useState } from "react";

export default function SavedPayment({ handleClickCToggleModal }) {
  const typeCart = {
    master: Master,
    visa: Visa,
  };
  const [creditCartData, setCreditCartData] = useState(cartData);

  const handleClickDeleteCart = (id) => {
    setCreditCartData((c) => c.filter((d) => d.id !== id));
  };
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h4>Збережені платіжні засоби:</h4>
        <Image src={PlusIco} alt="cross" onClick={handleClickCToggleModal} />
      </div>
      <div className="cart-number-content">
        {creditCartData?.map(({ cartNumber, id, type, title }) => {
          return (
            <div className={`cart-user ${type}`} key={id}>
              <div className="cart-credit-content">
                <div>
                  <Image src={typeCart[type]} alt="cart-credit" />
                  <div>
                    <h5>{title}</h5>
                    <p>{maskMiddleNumber(cartNumber)}</p>
                  </div>
                </div>
              </div>
              <button className="edit-btn">
                <Image src={EditIco} alt="edit" />
              </button>
              <button
                className="delete-btn"
                onClick={() => handleClickDeleteCart(id)}
              >
                <Image src={DeleteIco} alt="delete" />
              </button>
            </div>
          );
        })}
        {creditCartData.length === 0 && <p className="no-cart">No Cart now</p>}
      </div>
    </div>
  );
}
