import React from "react";
import { Image } from "react-bootstrap";
import CourseIcon from "../../assets/svg/profil/course.svg";
import CrossWhiteIco from "../../assets/svg/plusWhite.svg";

export default function OtherCourse() {
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
        <div className="img-content">
          <div className="img-icon">
            <Image src={CrossWhiteIco} alt="cross-icon" />
          </div>
          <p>Запропонувати новий курс</p>
        </div>
      </div>
    </div>
  );
}
