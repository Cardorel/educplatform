import React, { useId, useState } from "react";
import PaymentLeftContent from "./PaymentLeftContent";
import PaymentRightContent from "./PaymentRightContent";
import "./payment.scss";
import {
  formattingCartCVV,
  formattingCartDate,
  formattingCartNumber,
} from "./formatting";
import { useDispatch, useSelector } from "react-redux";
import ModalPayment from "./ModalPayment";
import { setCourse } from "../../toolkit/reducers/setCourseData";

export default function Payment() {
  const [cvv, setCvv] = useState("");
  const [showed, setShowed] = useState(false);
  const [dateCart, setDateCart] = useState("");
  const [nmumberCart, setNummberCart] = useState("");
  const refNumber = useId();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state?.course);
  const handleChangeDateCart = (e) => {
    setDateCart(formattingCartDate(e.target.value));
  };
  const handleChangeNummberCart = (e) => {
    setNummberCart(formattingCartNumber(e.target.value));
  };

  const handleChangetCvv = (e) => {
    setCvv(formattingCartCVV(e.target.value));
  };

  const handleClickSubmit = () => {
    setTimeout(() => {
      dispatch(setCourse({ ...data, refNumber }));
      setShowed(true);
    }, 1000);
  };

  return (
    <div className="payment">
      <PaymentLeftContent />
      <PaymentRightContent
        cvv={cvv}
        dateCart={dateCart}
        nmumberCart={nmumberCart}
        handleChangeDateCart={handleChangeDateCart}
        handleChangeNummberCart={handleChangeNummberCart}
        handleClickSubmit={handleClickSubmit}
        handleChangetCvv={handleChangetCvv}
        data={data}
      />
      {showed && <ModalPayment />}
    </div>
  );
}
