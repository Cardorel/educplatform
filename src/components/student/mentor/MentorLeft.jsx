import React from "react";
import { Image } from "react-bootstrap";
import { howChooseMentor } from "../../../assets/consts/data";
import CrossBlue from "../../../assets/svg/plusIcon.svg";
import Button from "../../common/Button";
import BoxHeader from "./BoxHeader";
import ArrowLeft from "../../../assets/svg/arrowLeftBlack.svg";

export default function MentorLeft() {
  return (
    <div className="mentor-left">
      <p className="text-mentor">
        Отримайте можливість навчатись з менторською підтримкою
      </p>
      <div className="content">
        <div className="row">
          {howChooseMentor?.map(({ id, title, data }) => (
            <div key={id} className="col">
              <h4>{title}</h4>
              <ul className="list">
                {data?.map(({ id, text }) => (
                  <li key={id} className="list-item">
                    <Image src={CrossBlue} alt="cross-icon" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="user-content">
          <h4>Популярні ментори, яких рекомендують користувачі UCS</h4>
          <div>
            <BoxHeader />
          </div>
          <div className="btn-mentor-content">
            <p>Знайди свого ментора</p>
            <Button
              padding="17px 10px"
              text="Перейти до пошуку ментора"
              imageUrl={ArrowLeft}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
