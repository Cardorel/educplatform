import React, { useState } from "react";
import { formatlearningData } from "../../assets/consts/data";
import FormatPlan from "./FormatPlan";
import LearningPlan from "./LearningPlan";
import "./formatLearning.scss";

export default function FormatLearning() {
    const [learns] = useState(formatlearningData)
  return (
    <div className="format-learning">
      <h2 className="format-learning-title">Формати навчання</h2>
      <div className="format-learning-row">
        {learns?.map((learn) => (
          <LearningPlan {...learn} />
        ))}
      </div>
      <h5 className="format-learning-sign-title">Оформіть підписку</h5>
      <div className="format-learning-row">
        {learns?.map((plan) => (
          <FormatPlan {...plan} />
        ))}
      </div>
    </div>
  );
}
