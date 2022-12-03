import React from "react";
import { Image } from "react-bootstrap";
import ArrowDown from "../../assets/svg/arrowDown.svg";
import PlusIcon from "../../assets/svg/plusIconRose.svg";

export default function LearningPlan({
  descriptions,
  id,
  purchaseTitle,
  purchaseText,
  format,
  isActive,
}) {
  return (
    <div className={`format-learning-col ${isActive ? "active" : ""}`} key={id}>
      <div className="format-learning-col-header">
        <h4>{purchaseTitle}</h4>
        <h3>{purchaseText}</h3>
      </div>
      <div className="format-learning-plan">
        <p>{format}</p>
        <Image src={ArrowDown} alt="arrow-down" />
      </div>
      <div className="description-content">
        {descriptions.map(({ id, description }) => (
          <div className="description-plan" key={id}>
            <Image src={PlusIcon} alt="plus-icon" />
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
