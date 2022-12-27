import BigLogo from "../logo/BigLogo";
import LearnIcon from "../../assets/svg/aboutUs/learn.svg";
import WorkerIcon from "../../assets/svg/aboutUs/worker.svg";
import TeacherIcon from "../../assets/svg/aboutUs/teacher.svg";
import { Image } from "react-bootstrap";
import PlusIconRose from "../../assets/svg/plusIconRose.svg";
import PlusIconRed from "../../assets/svg/plusIconRed.svg";

export default function AboutUsHeader({ aboutUs }) {
  return (
    <div className="about-us-header">
      <div className="about-us-header-left">
        <div>
          <BigLogo />
        </div>
        <div className="contenaire">
          <h4>Ми об’єднали:</h4>
          <div className="content">
            <Image src={LearnIcon} alt="learn" />
            <p className="red">Отримувачів знань</p>
          </div>
          <div className="content">
            <Image src={TeacherIcon} alt="teacher-icon" />
            <p className="rose">Освітні компанії, викладачів</p>
          </div>
          <div className="content">
            <Image src={WorkerIcon} alt="worker-icon" />
            <p className="orange">Роботодавців</p>
          </div>
        </div>
      </div>
      <div className="about-us-header-right">
        <h4>UCS - платформа для навчання, що поєднує в собі:</h4>
        {aboutUs?.map(({ text, isOthercolor, id }) => (
          <div key={id} className="content">
            <Image src={isOthercolor ? PlusIconRed : PlusIconRose} alt="" />
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
