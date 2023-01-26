import React from "react";
import { Image } from "react-bootstrap";
import ProductContent from "../whatNext/ProductContent";
import ArrowDown from "../../../assets/svg/arrowDownWhite.svg";
import { Link } from "react-router-dom";

export default function CourseStudent({ data, title, handleMore }) {
  return (
    <div className="course-student-container">
      <h3 className="course-student-title">{title}</h3>
      <div className="course-student-content">
        {data?.map((d) => (
          <Link key={d?.id} to={`/student/${d?.id}`}>
            <ProductContent {...d} />
          </Link>
        ))}
      </div>
      <div className="btn-content">
        <button onClick={handleMore}>
          <span>Більше пропозицій</span>
          <Image src={ArrowDown} alt="arrow-back" />
        </button>
      </div>
    </div>
  );
}
