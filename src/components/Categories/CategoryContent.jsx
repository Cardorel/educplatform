import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ReverveLetter from "../common/ReverveLetter";
import CoursesHeader from "../courses/CoursesHeader";
import HowIsWorkContent from "../main/howIsWork/HowIsWorkContent";
import ArrowDown from "../../assets/svg/arrowDownWhite.svg";
import { Image } from "react-bootstrap";

export default function CategoryContent({ texts, data, btnText, direction }) {
  const navigate = useNavigate();
  return (
    <div className="category-container">
      <CoursesHeader />
      {btnText && (
        <div className="btn-back-content">
          <button className="btn-back" onClick={() => navigate(-1)}>
            <Image src={ArrowDown} alt="arrow-down" className="header-img" />{" "}
            {btnText}
          </button>
        </div>
      )}
      <div className="category-row">
        <div className="category-paragraph">
          {texts?.split(" ").map((text, idx) => (
            <p key={idx}>
              <ReverveLetter letters={text} />
            </p>
          ))}
        </div>
        <div className="category-content">
          {data?.map((category) => (
            <Link
              key={category.id}
              to={`/all-courses/${direction}/${category.title}`}
            >
              <HowIsWorkContent {...category} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
