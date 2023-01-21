import React, { useState } from "react";
import { certificateData } from "../../assets/consts/data";
import CourseFilterContainer from "../courses/CourseFilterContainer";
import MyCourseContent from "./MyCourseContent";
import "./myCourse.scss";

export default function MyCourse() {
  const [, setAllCourse] = useState(certificateData);
  return (
    <div className="my-course">
      <CourseFilterContainer
        setAllCourse={setAllCourse}
        certificateData={certificateData}
      >
        <MyCourseContent />
      </CourseFilterContainer>
    </div>
  );
}
