import CoursesHeader from "../courses/CoursesHeader";
import CourseContent from "./CourseContent";

export default function HeaderCourseContainer({
  interests,
  children,
  handleClickVideo,
  handleCertificate,
  title,
}) {
  return (
    <div className="header-course-container">
      <CoursesHeader />
      <div className="header-course-content">
        <div className="content">
          <h4 className="title">{title}</h4>
          <CourseContent
            data={interests}
            title="Програма сертифікаційного навчання"
            handleClickVideo={handleClickVideo}
            handleCertificate={handleCertificate}
          />
        </div>
        {children}
      </div>
    </div>
  );
}
