import React from "react";
import { useState } from "react";
import { certificateData } from "../../assets/consts/data";
import CourseFilterContainer from "../courses/CourseFilterContainer";
import QualificationContent from "./QualificationContent";

export default function Qualification() {
  const [allCourse, setAllCourse] = useState(certificateData);

  const handleClickLike = (id) =>
    setAllCourse((data) =>
      data.map((d) => (d.id === id ? { ...d, liked: true } : d))
    );
  return (
    <CourseFilterContainer
      setAllCourse={setAllCourse}
      certificateData={certificateData}
    >
      <QualificationContent
        handleClickLike={handleClickLike}
        allCourse={allCourse}
      />
    </CourseFilterContainer>
  );
}
