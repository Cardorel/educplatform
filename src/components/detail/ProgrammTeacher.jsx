import { Image } from "react-bootstrap";
import Ribbon from "../../assets/svg/student/ribbon.svg";
import TeacherPlay from "../../assets/svg/student/teacherPlay.svg";
import PeopleIco from "../../assets/svg/student/people.svg";
import StarIco from "../../assets/svg/student/star.svg";

export default function ProgrammTeacher({ teachers }) {
  return (
    <div className="teacher-programm-container">
      <h2 className="teacher-programm-title">Викладачі програми</h2>
      <div className="teacher-programm-row">
        {teachers?.map(
          ({
            id,
            name,
            surname,
            speciality,
            ratingText,
            reviews,
            nomberOfStudent,
            numberOfCurs,
            url,
          }) => (
            <div className="teacher-programm-col" key={id}>
              <div className="teacher-programm-profile">
                <Image src={url} alt={`image-${id}`} />
              </div>
              <div className="teacher-programm-feedback">
                <h3 className="name">
                  {surname} {name}
                </h3>
                <p className="speciality">{speciality}</p>
                <div className="feedback-content">
                  <Image src={StarIco} alt="star" />
                  <p>{ratingText}</p>
                </div>
                <div className="feedback-content">
                  <Image src={Ribbon} alt="ribbon" />
                  <p>{reviews} відгуків</p>
                </div>
                <div className="feedback-content">
                  <Image src={PeopleIco} alt="people-icon" />
                  <p>{nomberOfStudent} студентів</p>
                </div>
                <div className="feedback-content">
                  <Image src={TeacherPlay} alt="play-icon" />
                  <p>{numberOfCurs} курсів</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
