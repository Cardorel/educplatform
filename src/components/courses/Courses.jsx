import CoursesHeader from "./CoursesHeader";
import "./course.scss";
import Filter from "./Filter";
import CourseBySubject from "./CourseBySubject";
import { Image } from "react-bootstrap";
import ArrowDown from "../../assets/svg/arrowDownWhite.svg";
import { filterDataByGender } from "./filterDataByGender";
import { certificateData } from "../../assets/consts/data";
import { useState } from "react";

export default function Courses() {
  const [searchByshortCourse, setsearchByshortCourse] = useState({
    isChecked: false,
    value: null,
  });
  const [searchBycertificateTraining, setsearchByCertificateTraining] =
    useState({
      isChecked: false,
      value: null,
    });
  const [searchByCertificateProgram, setsearchByCertificateProgram] = useState({
    isChecked: false,
    value: null,
  });
  const [searchByCreatedAt, setsearchByCreatedAt] = useState({
    isChecked: false,
    value: null,
  });
  const [searchByStartAt, setsearchByStartAt] = useState({
    isChecked: false,
    value: null,
  });
  const [searchByendAt, setsearchByendAt] = useState({
    isChecked: false,
    value: null,
  });

  const handleChangeSearchByshortCourse = (e) => {
    setsearchByshortCourse((v) => {
      if (e.target.checked === true) {
        return {
          isChecked: e.target.checked,
          value: "Короткостроковий курс",
        };
      } else {
        return {
          isChecked: e.target.checked,
          value: null,
        };
      }
    });
  };
  const handleChangeSearchBycertificateTraining = (e) => {
    setsearchByCertificateTraining((v) => {
      if (e.target.checked === true) {
        return {
          isChecked: e.target.checked,
          value: "Підвищення кваліфікації",
        };
      } else {
        return {
          isChecked: e.target.checked,
          value: null,
        };
      }
    });
  };
  const handleChangeSearchByCertificateProgram = (e) => {
    setsearchByCertificateProgram((v) => {
      if (e.target.checked === true) {
        return {
          isChecked: e.target.checked,
          value: "Сертифікаційна програма",
        };
      } else {
        return {
          isChecked: e.target.checked,
          value: null,
        };
      }
    });
  };

  const handleChangeSearchByCreatedAt = (e) => {
    setsearchByCreatedAt((v) => {
      if (e.target.checked === true) {
        return {
          isChecked: e.target.checked,
          value: "startCourse",
        };
      } else {
        return {
          isChecked: e.target.checked,
          value: null,
        };
      }
    });
  };
  const handleChangeSearchByStartAt = (e) => {
    setsearchByStartAt((v) => {
      if (e.target.checked === true) {
        return {
          isChecked: e.target.checked,
          value: "startCourse",
        };
      } else {
        return {
          isChecked: e.target.checked,
          value: null,
        };
      }
    });
  };
  const handleChangeSearchByendAt = (e) => {
    setsearchByStartAt((v) => {
      if (e.target.checked === true) {
        return {
          isChecked: e.target.checked,
          value: "startCourse",
        };
      } else {
        return {
          isChecked: e.target.checked,
          value: null,
        };
      }
    });
  };

  const handleClickClear = () => {};
  const handleClickSubmit = () => {};

  return (
    <div className="course">
      <CoursesHeader />
      <div className="course-all">
        <Filter
          searchByshortCourse={searchByshortCourse}
          searchBycertificateTraining={searchBycertificateTraining}
          searchByCertificateProgram={searchByCertificateProgram}
          searchByCreatedAt={searchByCreatedAt}
          searchByStartAt={searchByStartAt}
          searchByendAt={searchByendAt}
          handleChangeSearchByshortCourse={handleChangeSearchByshortCourse}
          handleChangeSearchBycertificateTraining={
            handleChangeSearchBycertificateTraining
          }
          handleChangeSearchByCertificateProgram={
            handleChangeSearchByCertificateProgram
          }
          handleChangeSearchByCreatedAt={handleChangeSearchByCreatedAt}
          handleChangeSearchByStartAt={handleChangeSearchByStartAt}
          handleChangeSearchByendAt={handleChangeSearchByendAt}
          handleClickClear={handleClickClear}
          handleClickSubmit={handleClickSubmit}
        />
        <div className="course-right">
          <div className="header">
            <h4>Курси підвищення кваліфікації</h4>
            <button>
              <Image src={ArrowDown} alt="arrow-down" className="header-img" />{" "}
              до всіх галузей
            </button>
          </div>
          <CourseBySubject
            gender="Фінанси"
            data={filterDataByGender(certificateData, "Фінанси")}
          />
          <CourseBySubject
            gender="Право"
            data={filterDataByGender(certificateData, "Право")}
          />
        </div>
      </div>
    </div>
  );
}
