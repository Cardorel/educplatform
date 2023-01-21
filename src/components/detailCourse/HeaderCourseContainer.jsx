import CoursesHeader from "../courses/CoursesHeader";
import CourseContent from "./CourseContent";

export default function HeaderCourseContainer({ interests, children }) {
  return (
    <div className="header-course-container">
      <CoursesHeader />
      <div className="header-course-content">
        <div className="content">
          <CourseContent data={interests} title="Категорії інтересів:" />
          <CourseContent data={interests} title="Категорії інтересів:" />
        </div>
        {children}
      </div>
    </div>
  );
}
