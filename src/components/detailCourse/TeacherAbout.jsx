import React from "react";
import BoxHeader from "../student/mentor/BoxHeader";
import TabContent from "./TabContent";
import TabCourse from "./TabCourse";

export default function TeacherAbout() {
  return (
    <div className="teacher-about">
      <BoxHeader isActive={true} />
      <div>
        <TabCourse />
        <TabContent />
      </div>
    </div>
  );
}
