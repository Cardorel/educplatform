import React, { useState } from "react";
import { Image } from "react-bootstrap";
import ArrowDown from "../../assets/svg/arrowDownWhite.svg";
import CourseContent from "./CourseContent";

export default function CourseBySubject({ data, gender, handleClickLike }) {
  const [defaultNumber, setDefaultNumber] = useState(3);
  const [isToggle, setIsToggle] = useState(false);
  const handleClickToggle = () => {
    if (!isToggle) {
      setIsToggle((d) => !d);
      setDefaultNumber(1000);
    } else {
      setIsToggle((d) => !d);
      setDefaultNumber(3);
    }
  };

  return (
    <div className="course-by-subject">
      <div className="header">
        <h4>{gender}</h4>
        <button onClick={handleClickToggle}>
          {!isToggle ? "Більше" : "Менше"} пропозицій
          <Image
            src={ArrowDown}
            alt="arrow-down"
            className={isToggle ? "rotate-icon" : ""}
          />
        </button>
      </div>
      <div className="content">
        {data?.slice(0, defaultNumber).map((item) => (
          <CourseContent
            key={item.id}
            handleClickLike={handleClickLike}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
