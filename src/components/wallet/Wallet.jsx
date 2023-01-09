import React from "react";
import { useState } from "react";
import MainModal from "../modal/MainModal";
import AddNewCart from "./AddNewCart";
import Platform from "./Platform";
import SavedPayment from "./SavedPayment";
import Subscription from "./Subscription";
import "./wallet.scss";

export default function Wallet() {
  const [isOpened, setIsOpened] = useState(false);
  const handleClickCToggleModal = () => setIsOpened((d) => !d);
  return (
    <div className="wallet">
      <Subscription />
      <div>
        <SavedPayment handleClickCToggleModal={handleClickCToggleModal} />
        <Platform />
      </div>
      {isOpened && (
        <MainModal handleCloseModal={handleClickCToggleModal}>
          <AddNewCart handleClickCToggleModal={handleClickCToggleModal} />
        </MainModal>
      )}
    </div>
  );
}
