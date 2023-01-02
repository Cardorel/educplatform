import React from "react";
import { Image } from "react-bootstrap";
import ArrowDown from "../../assets/svg/arrowDownWhite.svg";
import CourseContent from "./CourseContent";

export default function CourseBySubject({
  data,
  gender,
  handleClickLike,
  isToggle,
  handleClickToggle,
}) {
  return (
    <div className="course-by-subject">
      <div className="header">
        <h4>{gender}</h4>
        {isToggle && (
          <button onClick={handleClickToggle}>
            {!isToggle ? "Більше" : "Менше"} пропозицій
            <Image
              src={ArrowDown}
              alt="arrow-down"
              className={isToggle ? "rotate-icon" : ""}
            />
          </button>
        )}
      </div>
      <div className="content">
        {data?.map((item) => (
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
