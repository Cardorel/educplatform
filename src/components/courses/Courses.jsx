import "./course.scss";
import { certificateData } from "../../assets/consts/data";
import { useState } from "react";
import CourseFilterContainer from "./CourseFilterContainer";
import CourseContainer from "./CourseContainer";

export default function Courses() {
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
      <CourseContainer
        handleClickLike={handleClickLike}
        allCourse={allCourse}
      />
    </CourseFilterContainer>
  );
}
