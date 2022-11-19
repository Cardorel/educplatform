import React from "react";
import { Image } from "react-bootstrap";

import "./skill.scss";
import PlayIcon from "../../../assets/svg/student/playIcon.svg";
import Starrond from "../../../assets/svg/student/starRondSkill.svg";
import StarOrange from "../../../assets/svg/student/starOrangeIcon.svg";

export default function Skill({ title , firstText, secondText, thirdText }) {
  return (
    <div className="skill-container">
      {title && <h3 className="skill-title">{title}</h3>}
      <div className="skill-row">
        <div className="skill-col">
          <Image src={PlayIcon} alt="play-icon" />
          <p className="text-icon">
            {firstText}
          </p>
        </div>
        <div className="skill-col">
          <Image src={Starrond} alt="play-icon" />
          <p className="text-icon">
            {secondText}
          </p>
        </div>
        <div className="skill-col">
          <Image src={StarOrange} alt="play-icon" />
          <p className="text-icon">
            {thirdText}
          </p>
        </div>
      </div>
    </div>
  );
}
