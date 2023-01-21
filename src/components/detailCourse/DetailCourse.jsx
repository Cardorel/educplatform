import React from "react";
import { interestCourse } from "../../assets/consts/data";
import "./detailCourse.scss";
import HeaderCourseContainer from "./HeaderCourseContainer";
import VideoContent from "./VideoContent";

export default function DetailCourse() {
  return (
    <div>
      <HeaderCourseContainer interests={interestCourse}>
        <div>
          <VideoContent />
        </div>
      </HeaderCourseContainer>
    </div>
  );
}
