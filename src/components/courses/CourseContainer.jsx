import CourseBySubject from "./CourseBySubject";
import { Image } from "react-bootstrap";
import ArrowDown from "../../assets/svg/arrowDownWhite.svg";
import { filterDataByGender } from "./filterDataByGender";
import { useNavigate } from "react-router-dom";

export default function CourseContainer({ handleClickLike, allCourse }) {
  const navigate = useNavigate();
  return (
    <div className="course-right">
      <div className="header">
        <h4>Курси підвищення кваліфікації</h4>
        <button onClick={() => navigate("/all-courses/categories")}>
          <Image src={ArrowDown} alt="arrow-down" className="header-img" /> до
          всіх галузей
        </button>
      </div>
      <CourseBySubject
        gender="Фінанси"
        btnText="пропозицій"
        handleClickLike={handleClickLike}
        data={filterDataByGender(allCourse, "Фінанси")}
      />
      <CourseBySubject
        gender="Право"
        btnText="пропозицій"
        isToggle={true}
        handleClickLike={handleClickLike}
        data={filterDataByGender(allCourse, "Право")}
      />
    </div>
  );
}
