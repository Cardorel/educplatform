import React from "react";
import { Row, Image } from "react-bootstrap";
import { homeImage, toolsLearning } from "../../../assets/consts/data";
import "./howIsWork.scss";
import HowIsWorkContent from "./HowIsWorkContent";
import PlusIcon from "../../../assets/svg/plusIcon.svg";

export default function HowIsWork() {
  return (
    <Row className="how-work">
      <div className="how-work-content">
        <p className="how-work-content-paragraph">
          <span>Я</span>
          <span>к</span>
        </p>
        <p className="how-work-content-paragraph">
          <span>ц</span>
          <span>е</span>
        </p>
        <p className="how-work-content-paragraph">
          <span>п</span>
          <span>р</span>
          <span>а</span>
          <span>ц</span>
          <span>ю</span>
          <span>є</span>
          <span>?</span>
        </p>
      </div>
      <div>
        <div className="how-work-image">
          {homeImage &&
            homeImage?.map((data) => <HowIsWorkContent {...data} />)}
        </div>
        <div className="tool-row">
          <div className="tool-col">
            <h2 className="tool-title">Які інструменти для зручного навчання ми Вам пропонуємо:</h2>
            <ul>
              {toolsLearning.map((t) => (
                <li>
                  <Image alt={`image-${t.id}`} src={PlusIcon} />
                  <span>{t.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="tool-col">
            <Image
              alt="tool-image"
              src={
                "https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/education%2Fimage%2045.png?alt=media&token=f4ce7753-f4fc-409c-9562-e416beeb8be7"
              }
            />
          </div>
        </div>
      </div>
    </Row>
  );
}
