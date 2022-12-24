import React, { useState } from "react";
import { formatlearningData } from "../../assets/consts/data";
import FormatPlan from "./FormatPlan";
import LearningPlan from "./LearningPlan";
import "./formatLearning.scss";
import { authentification } from "../../firebase/config";
import { useIdToken } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCurrentUserData } from "../../toolkit/reducers/getCurrentData";

export default function FormatLearning() {
  const [learns, setLearns] = useState(formatlearningData);
  const [user] = useIdToken(authentification);
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const handleSelectOffer = (id) => {
    setLearns((val) => {
      return val.map((v) =>
        v.id === id ? { ...v, isActive: true } : { ...v, isActive: false }
      );
    });
  };

  const handleClickToOffer = (
    plan,
    price,
    purchaseTitle,
    purchaseText,
    devise
  ) => {
    dispatch(
      getCurrentUserData({ plan, price, purchaseTitle, purchaseText, devise })
    );
    if (!user) {
      naviagte("/signin");
    } else {
      naviagte("/payment");
    }
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
            handleSelectOffer={handleSelectOffer}
            handleClickToOffer={handleClickToOffer}
            {...plan}
          />
        ))}
      </div>
    </div>
  );
}
