import React from "react";
import { Image } from "react-bootstrap";
import Star from "../../assets/svg/student/star.svg";

export default function HeaderFeedback({
  subTitles,
  voted,
  registred,
  rating,
  startCourse,
  endCourse,
  timeByDay,
  language,
}) {
  const myStartDate = startCourse?.split(".");
  const myEndtDate = endCourse?.split(".");
  const startDate = new Date(
    myStartDate[2],
    myStartDate[1],
    myStartDate[0]
  ).getMonth();
  const endDate = new Date(
    myEndtDate[2],
    myEndtDate[1],
    myEndtDate[0]
  ).getMonth();
  const dataSum = endDate - startDate;
  return (
    <div className="feedback">
      <div className="feedback-rating">
        <p className="feedback-title">Рейтинг програми</p>
        <div className="feedback-content">
          <p className="rating-para">
            <Image src={Star} alt="star-ico" />
            <span>{rating} / 5</span>
          </p>
          <div className="feedback-paras">
            <p>
              <span>Оцінили: </span>
              <span>{voted}</span>
            </p>
            <p>
              <span>Зареєструвалися: </span>
              <span>{registred}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="feedback-rating">
        <p className="feedback-title time-title">Тривалість програми</p>
        <div className="feedback-content">
          <p>
            {dataSum} {dataSum > 4 ? " місяців" : " місяці"}
          </p>
          <div className="feedback-paras">
            <p>
              не довше {timeByDay} {timeByDay > 4 ? " годин " : " години "}
              на день
            </p>
          </div>
        </div>
      </div>
      <div className="feedback-rating">
        <p className="feedback-title language-title">Мова викладання</p>
        <div className="feedback-content">
          <div>
            <p>{language}</p>
            <p className="sub-title">
              <span>Субтитри: </span>
              {subTitles?.map((sub, idx) => (
                <span key={idx}>{sub} </span>
              ))}
              {!subTitles && <span>немає</span>}
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
