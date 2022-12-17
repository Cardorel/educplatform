import React, { useState } from "react";
import { formatlearningData } from "../../assets/consts/data";
import FormatPlan from "./FormatPlan";
import LearningPlan from "./LearningPlan";
import "./formatLearning.scss";

export default function FormatLearning() {
  const [learns, setLearns] = useState(formatlearningData);
  const handleSelectOffer = (id) => {
    setLearns((val) => {
      return val.map((v) =>
        v.id === id ? { ...v, isActive: true } : { ...v, isActive: false }
      );
    });
  };
  return (
    <div className="format-learning">
      <h2 className="format-learning-title">Формати навчання</h2>
      <div className="format-learning-row">
        {learns?.map((learn) => (
          <LearningPlan
            key={learn.id}
            {...learn}
            handleSelectOffer={handleSelectOffer}
          />
        ))}
      </div>
      <h5 className="format-learning-sign-title">Оформіть підписку</h5>
      <div className="format-learning-row">
        {learns?.map((plan) => (
          <FormatPlan
            key={plan.id}
            {...plan}
            handleSelectOffer={handleSelectOffer}
          />
        ))}
      </div>
    </div>
  );
}
