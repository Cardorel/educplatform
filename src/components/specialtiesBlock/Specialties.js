import React from "react";
import { Image, Row } from "react-bootstrap";
import { knowledgeTaste } from "../../assets/consts/data";
import LeftKnowledge from "./LeftKnowledge";
import MiddleKnowledge from "./MiddleKnowledge";
import RightKnowledge from "./RightKnowledge";
import "./specialties.scss";
import BgImg from "../../assets/images/bgf.png";

export default function Specialties() {
  const { leftList, middle, rightList } = knowledgeTaste;
  return (
    <Row className="knowledge-block">
      <div className="image-bg">
        <Image src={BgImg} alt="img-bg" />
      </div>
      <h3 className="knowledge-block-title">Знайдіть знання на свій смак</h3>
      <div className="knowledge-block-content">
      <LeftKnowledge lists={leftList} />
      <MiddleKnowledge data={middle} />
      <RightKnowledge lists={rightList} />
      </div>
    </Row>
  );
}
