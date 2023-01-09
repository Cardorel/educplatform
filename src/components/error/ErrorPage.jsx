import React from "react";
import { Image } from "react-bootstrap";
import Error from "../../assets/svg/error.svg";
import "./errorPage.scss";
import ArrowLeft from "../../assets/svg/arrowLeft.svg";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <div className="error-page-content">
        <Image src={Error} alt="error-img" />
        <h5>Упс! Ця сторінка не працює наразі!</h5>
        <p>
          Нам потрібно трошки часу, аби полагодити деякі елементи, які вийшли з
          ладу. Почекайте трошки! А поки Ви в режимі очікування - перегляньте
          інші нові курси, які запропонували наші популярні ментори:
        </p>
        <div className="btn-content">
          <button className="btn" onClick={() => navigate(-1)}>
            Перейти до сторінки
            <Image src={ArrowLeft} alt="arrow-left" />
          </button>
        </div>
      </div>
    </div>
  );
}
