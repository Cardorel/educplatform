import React from "react";
import { Row, Image } from "react-bootstrap";
import { homeImage, toolsLearning } from "../../../assets/consts/data";
import "./howIsWork.scss";
import HowIsWorkContent from "./HowIsWorkContent";
import PlusIcon from "../../../assets/svg/plusIcon.svg";
import HowIsWorkSwiper from "../../swiper/HowIsWorkSwiper";

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
      <div style={{ width: "100%" }}>
        <div className="how-work-image">
          {homeImage?.map((data) => (
            <HowIsWorkContent key={data.id} {...data} />
          ))}
        </div>
        <div className="tool-row">
          <div className="tool-col">
            <h2 className="tool-title">
              Які інструменти для зручного навчання ми Вам пропонуємо:
            </h2>
            <ul>
              {toolsLearning.map((t) => (
                <li key={t.id}>
                  <Image
                    alt={`image-${t.id}`}
                    className={`${t.isFirst ? "" : "low-opacity"}`}
                    src={PlusIcon}
                  />
                  <span>{t.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="tool-col">
            <HowIsWorkSwiper />
          </div>
        </div>
      </div>
    </Row>
  );
}
