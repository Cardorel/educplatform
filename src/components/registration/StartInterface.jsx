import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

export default function StartInterface() {
  const navigate = useNavigate();
  const handleClickToNextPage = () => navigate("/student");
  return (
    <div className="interface-register">
      <h4>Почнемо знайомство з інтерфейсом?</h4>
      <p>
        Він інтуїтивно зрозумілий, але ми хочемо показати деякі особливості
        нашої платформи - лайфхаки, як швидко користуватися усіма представленими
        інструментами.
      </p>
      <Button
        text="ПРОДОВЖИТИ"
        padding="15px 200px"
        handleClick={handleClickToNextPage}
      />
    </div>
  );
}
