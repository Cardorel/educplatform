import { Image } from "react-bootstrap";
import { interestCourse } from "../../assets/consts/data";
import HeaderInterestContainer from "./HeaderInterestContainer";
import FileBig from "../../assets/svg/interest/fileBig.svg";
import VideoBig from "../../assets/svg/interest/videoBig.svg";
import ContactBig from "../../assets/svg/interest/contactBig.svg";
import VacancyBig from "../../assets/svg/interest/vacancy.svg";
import RozdilBig from "../../assets/svg/interest/rozdil.svg";
import ButtonWithArrow from "../common/ButtonWithArrow";
import "./file.scss";

export default function File() {
  return (
    <div>
      <HeaderInterestContainer interests={interestCourse}>
        <div className="file-container">
          <h4>Мої файли:</h4>
          <div className="file-row">
            <div className="col">
              <div className="file-content">
                <div className="img-content">
                  <Image src={FileBig} alt="icon" />
                  <p>Документи</p>
                </div>
              </div>
              <ButtonWithArrow text="Перейти до розділу" />
            </div>
            <div className="col">
              <div className="file-content">
                <div className="img-content">
                  <Image src={VideoBig} alt="icon" />
                  <p>Відео</p>
                </div>
              </div>
              <ButtonWithArrow text="Перейти до розділу" />
            </div>
            <div className="col">
              <div className="file-content">
                <div className="img-content">
                  <Image src={ContactBig} alt="icon" />
                  <p>Документи</p>
                </div>
              </div>
              <ButtonWithArrow text="Перейти до розділу" />
            </div>
            <div className="col">
              <div className="file-content">
                <div className="img-content">
                  <Image src={VacancyBig} alt="icon" />
                  <p>Вакансії</p>
                </div>
              </div>
              <ButtonWithArrow text="Перейти до розділу" />
            </div>
            <div className="col">
              <div className="file-content">
                <div className="img-content">
                  <Image src={RozdilBig} alt="icon" />
                  <p>Назва розділу</p>
                </div>
              </div>
              <ButtonWithArrow text="Перейти до розділу" />
            </div>
          </div>
        </div>
      </HeaderInterestContainer>
    </div>
  );
}
