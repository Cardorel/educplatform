import React from "react";
import { Image } from "react-bootstrap";
import CourseIcon from "../../assets/svg/profil/course.svg";
import CrossWhiteIco from "../../assets/svg/plusWhite.svg";
import ArrowBack from "../../assets/svg/arrowLeft.svg";

export default function OtherCourse({ text }) {
  return (
    <div className="other-course">
      <h4>Інші курси:</h4>
      <div className="other-course-container">
        <div className="other-course-content">
          <div>
            <Image src={CourseIcon} alt="course-img" />
            <p>Історія економічних вчень</p>
          </div>
          <div>
            <Image src={CourseIcon} alt="course-img" />
            <p>Історія економічних вчень</p>
          </div>
          <div>
            <Image src={CourseIcon} alt="course-img" />
            <p>Історія економічних вчень</p>
          </div>
          <div>
            <Image src={CourseIcon} alt="course-img" />
            <p>Історія економічних вчень</p>
          </div>
          <div>
            <Image src={CourseIcon} alt="course-img" />
            <p>Історія економічних вчень</p>
          </div>
        </div>
        {text && (
          <div className="img-content">
            <div className="img-icon">
              <Image src={CrossWhiteIco} alt="cross-icon" />
            </div>
            <p>{text}</p>
          </div>
        )}
        {!text && (
          <div className="btn-content">
            <button>
              <span>Пошук нових курсів</span>
              <Image src={ArrowBack} alt="back" />
            </button>
            <button>
              <span>Пошук менторів</span>
              <Image src={ArrowBack} alt="back" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
