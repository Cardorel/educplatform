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
  const [allCourse, setAllCourse] = useState(certificateData);
  const [searchByshortCourse, setsearchByshortCourse] = useState(false);
  const [searchBycertificateTraining, setsearchByCertificateTraining] =
    useState(false);
  const [searchByCertificateProgram, setsearchByCertificateProgram] =
    useState(false);

  const handleChangeSearchByshortCourse = (e) => {
    const checked = e.target.checked;
    setsearchByshortCourse(checked);
    setsearchByCertificateTraining(false);
    setsearchByCertificateProgram(false);
    setAllCourse(certificateData);

    if (checked) {
      setAllCourse((c) =>
        c.filter((d) => d.status === "Короткостроковий курс")
      );
    } else if (checked && searchBycertificateTraining) {
      setAllCourse(
        certificateData.filter(
          (d) =>
            d.status === "Короткостроковий курс" &&
            d.status === "Підвищення кваліфікації"
        )
      );
    }
  };

  const handleChangeSearchBycertificateTraining = (e) => {
    const checked = e.target.checked;
    setsearchByCertificateTraining(checked);
    setsearchByshortCourse(false);
    setsearchByCertificateProgram(false);
    setAllCourse(certificateData);
    if (checked) {
      setAllCourse((c) =>
        c.filter((d) => d.status === "Підвищення кваліфікації")
      );
    }
  };
  const handleChangeSearchByCertificateProgram = (e) => {
    const checked = e.target.checked;
    setsearchByshortCourse(false);
    setsearchByCertificateTraining(false);
    setsearchByCertificateProgram(checked);
    setAllCourse(certificateData);
    setAllCourse(certificateData);
    if (checked) {
      setAllCourse((c) =>
        c.filter((d) => d.status === "Сертифікаційна програма")
      );
    }
  };

  const handleClickClear = () => {
    setsearchByshortCourse(false);
    setsearchByCertificateTraining(false);
    setsearchByCertificateProgram(false);
    setAllCourse(certificateData);
  };

  const handleClickLike = (id) =>
    setAllCourse((data) =>
      data.map((d) => (d.id === id ? { ...d, liked: true } : d))
    );

  return (
    <div className="course">
      <CoursesHeader />
      <div className="course-all">
        <Filter
          searchByshortCourse={searchByshortCourse}
          searchBycertificateTraining={searchBycertificateTraining}
          searchByCertificateProgram={searchByCertificateProgram}
          handleChangeSearchByshortCourse={handleChangeSearchByshortCourse}
          handleChangeSearchBycertificateTraining={
            handleChangeSearchBycertificateTraining
          }
          handleChangeSearchByCertificateProgram={
            handleChangeSearchByCertificateProgram
          }
          handleClickClear={handleClickClear}
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
            handleClickLike={handleClickLike}
            data={filterDataByGender(allCourse, "Фінанси")}
          />
          <CourseBySubject
            gender="Право"
            handleClickLike={handleClickLike}
            data={filterDataByGender(allCourse, "Право")}
          />
        </div>
      </div>
    </div>
  );
}
