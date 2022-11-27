import React from "react";
import { Image } from "react-bootstrap";
import Star from "../../assets/svg/student/star.svg";

export default function HeaderFeedback() {
  return (
    <div className="feedback">
      <div className="feedback-rating">
        <p className="feedback-title">Рейтинг програми</p>
        <div className="feedback-content">
          <p className="rating-para">
            <Image src={Star} alt="star-ico" />
            <span>4.6 / 5</span>
          </p>
          <div className="feedback-paras">
            <p>
              <span>Оцінили: </span>
              <span>502</span>
            </p>
            <p>
              <span>Зареєструвалися: </span>
              <span>614</span>
            </p>
          </div>
        </div>
      </div>
      <div className="feedback-rating">
        <p className="feedback-title time-title">Тривалість програми</p>
        <div className="feedback-content">
          <p>6 місяців</p>
          <div className="feedback-paras">
            <p>не довше 4 годин на день</p>
          </div>
        </div>
      </div>
      <div className="feedback-rating">
        <p className="feedback-title language-title">Мова викладання</p>
        <div className="feedback-content">
          <div>
            <p>Англійська мова</p>
            <p className="sub-title">
              <span>Субтитри: </span>
              <span>Українська</span>
            </p>
          </div>
        </div>
      </div>
      <div className="feedback-rating">
        <p className="feedback-title credit-title">Кредити ECTS</p>
        <div className="feedback-content">
          <p>Заробити залікові кредити</p>
          <div className="feedback-paras">
            <p>Залікові кредити приймаються у всіх університетах України</p>
          </div>
        </div>
      </div>
    </div>
  );
}
