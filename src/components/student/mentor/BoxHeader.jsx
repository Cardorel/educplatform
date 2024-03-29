import Star from "../../../assets/svg/student/star.svg";
import Medaille from "../../../assets/svg/student/medaille.svg";
import StudentIco from "../../../assets/svg/student/student.svg";
import PlayIco from "../../../assets/svg/student/playRound.svg";
import { Image } from "react-bootstrap";
import Button from "../../common/Button";
import CrossWhite from "../../../assets/svg/crossWhite.svg";
import ArrowLeft from "../../../assets/svg/arrowLeft.svg";

export default function BoxHeader({
  name = "Олександр Нововцев",
  image = "https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/education%2Fimage%2045.png?alt=media&token=f4ce7753-f4fc-409c-9562-e416beeb8be7",
  position = "K.т.н., практикуючий адвокат",
  text = "Лектор курсу з практичним досвідом та навичками. Певна інформація пролектора. Ще трохи інформації.",
  rating = 675,
  numberOfStudent = 654,
  course = 45,
  imgLogo = "https://i.ibb.co/z62pMzV/itstep.png",
  isActive,
}) {
  return (
    <div className="box-content">
      <div className="box-header">
        <Image src={image} alt="image-profil" />
        <div>
          <h6>{name}</h6>
          <p>{position}</p>
        </div>
        {isActive && (
          <div className="img-logo">
            <Image src={imgLogo} alt="logo-profil" />
          </div>
        )}
      </div>
      <div className="box-body">
        <p className="text">{text}</p>
        <div className="box-img-btn">
          <div className="box-image-content">
            <div className="box-image">
              <Image src={Star} alt="start-ico" />
              <p>рейтинг викладача</p>
            </div>
            <div className="box-image">
              <Image src={Medaille} alt="medaille" />
              <p>{rating} відгуки</p>
            </div>
            <div className="box-image">
              <Image src={StudentIco} alt="student-ico" />
              <p>{numberOfStudent} студентів</p>
            </div>
            <div className="box-image">
              <Image src={PlayIco} alt="play-ico" />
              <p>{course} курсів</p>
            </div>
          </div>
          <div className="box-body-right">
            <Image src={CrossWhite} alt="cross-white" />
            <p>Обрати ментором</p>
          </div>
        </div>
      </div>
      <Button
        text="Дізнатись більше"
        padding="17px 10px"
        imageUrl={ArrowLeft}
      />
    </div>
  );
}
