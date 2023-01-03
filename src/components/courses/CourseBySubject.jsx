import React from "react";
import { useState } from "react";
import { Image } from "react-bootstrap";
import ArrowDown from "../../assets/svg/arrowDownWhite.svg";
import CourseContent from "./CourseContent";

export default function CourseBySubject({
  data,
  gender,
  handleClickLike,
  btnText,
}) {
  const [number, setNumber] = useState(3);
  const [isToggle, setIsToggle] = useState(true);
  const handleClickToggle = () => {
    setIsToggle((d) => !d);
    isToggle ? setNumber(3) : setNumber(1000);
  };

  return (
    <div className="course-by-subject">
      <div className="header">
        <h4>{gender}</h4>
        {btnText && (
          <button onClick={handleClickToggle}>
            {!isToggle ? "Більше" : "Менше"} {btnText}
            <Image
              src={ArrowDown}
              alt="arrow-down"
              className={isToggle ? "rotate-icon" : ""}
            />
          </button>
        )}
      </div>
      <div className="content">
        {data?.slice(0, number).map((item) => (
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
