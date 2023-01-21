import React from "react";
import { Image } from "react-bootstrap";
import ProductContent from "../whatNext/ProductContent";
import ArrowDown from "../../../assets/svg/arrowDownWhite.svg";

export default function CourseStudent({ data, title }) {
  return (
    <div className="course-student-container">
      <h3 className="course-student-title">{title}</h3>
      <div className="course-student-content">
        {data?.map((d, idx) => (
          <ProductContent key={idx} {...d} />
        ))}
      </div>
      <div className="btn-content">
        <button>
          <span>Більше пропозицій</span>
          <Image src={ArrowDown} alt="arrow-back" />
        </button>
      </div>
    </div>
  );
}
