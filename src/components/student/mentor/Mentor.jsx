import React from "react";
import MentorLeft from "./MentorLeft";
import MentorRight from "./MentorRight";
import "./mentor.scss";

export default function Mentor() {
  return (
    <div className="mentor-container">
      <h3>Знайди свого ментора</h3>
      <div className="mentor">
        <MentorLeft />
        <MentorRight />
      </div>
    </div>
  );
}
