import React from "react";
import { Image } from "react-bootstrap";
import ArrowDown from "../../assets/svg/arrowDown.svg";

export default function FormatPlan({
  id,
  devise,
  plan,
  color,
  description,
  purchaseTitle,
  purchaseText,
  price,
  isActive,
  handleSelectOffer,
  handleClickToOffer,
}) {
  return (
    <div
      onClick={() => handleSelectOffer(id)}
      style={{ backgroundColor: isActive ? "#131313" : color }}
      className="format-plan-col format-learning-col"
      key={id}
    >
      <div className={`format-plan-content ${isActive ? "active" : ""}`}>
        <p className="format-plan-price">
          {price}
          {devise}
        </p>
        <p className="format-plan-description">{description}</p>
        <div className="format-plan-plan">
          <p>{plan}</p>
          <Image src={ArrowDown} alt="plus-icon" />
        </div>
      </div>
      <div className="btn-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() =>
            handleClickToOffer(plan, price, purchaseTitle, purchaseText, devise)
          }
          className="get-plan"
        >
          Підписатися
        </button>
      </div>
    </div>
  );
}
