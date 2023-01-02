import React, { useState } from "react";
import CoursesHeader from "./CoursesHeader";
import Filter from "./Filter";

export default function CourseFilterContainer({
  setAllCourse,
  certificateData,
  children,
}) {
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

        {children}
      </div>
    </div>
  );
}
