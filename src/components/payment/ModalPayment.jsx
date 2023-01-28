import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import MainModal from "../modal/MainModal";

export default function ModalPayment() {
  const navigation = useNavigate();
  const goToCourse = () => navigation(`/course/detail-course/2`);
  return (
    <MainModal>
      <div className="payment-modal">
        <div className="payment-content">
          <h4>Оплату проведено успішно</h4>
          <div className="btn-content">
            <button>Назва квитанції/змінити назву</button>
            <button>Завантажити</button>
          </div>
        </div>
        <div className="btn-course">
          <Button text="Перейти до курсу" handleClick={goToCourse} />
        </div>
      </div>
    </MainModal>
  );
}
