import { Image } from "react-bootstrap";
import ArrowDown from "../../assets/svg/arrowDownWhite.svg";
import { useParams } from "react-router-dom";
import CourseBySubject from "../courses/CourseBySubject";
import { filterDataByStatus } from "../courses/FilterDataByStatus";

export default function QualificationContent({ handleClickLike, allCourse }) {
  const params = useParams();
  return (
    <div className="course-right">
      <div className="header">
        <h4>Курси підвищення кваліфікації</h4>
        <button>
          <Image src={ArrowDown} alt="arrow-down" className="header-img" />{" "}
          назад до галузі
        </button>
      </div>
      <CourseBySubject
        gender={params?.category}
        handleClickLike={handleClickLike}
        data={filterDataByStatus(allCourse, params?.category)}
        handleClickToggle={() => null}
        isToggle={null}
      />
    </div>
  );
}
