import CourseBySubject from "./CourseBySubject";
import { Image } from "react-bootstrap";
import ArrowDown from "../../assets/svg/arrowDownWhite.svg";
import { filterDataByGender } from "./filterDataByGender";

export default function CourseContainer({ handleClickLike, allCourse }) {
  return (
    <div className="course-right">
      <div className="header">
        <h4>Курси підвищення кваліфікації</h4>
        <button>
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
