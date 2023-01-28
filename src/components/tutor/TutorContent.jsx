import React from "react";
import { Image } from "react-bootstrap";
import Content from "./Content";
import DeleteIco from "../../assets/svg/close.svg";
import EditIco from "../../assets/svg/course/edit.svg";

export default function TutorContent({
  header,
  accessText,
  createdAt,
  course,
  material,
  program,
  question,
  step,
  setting,
  idx,
}) {
  return (
    <div className="tutor-content">
      <div style={{ width: "100%" }}>
        <div className="tutor-header">
          <h4>0{idx + 1}.</h4>
          <div className="course-content">
            <div className="name-content">
              <h5>{header?.textName}</h5>
              <p>{new Date(createdAt).toLocaleDateString()}</p>
            </div>
            <div className="mentor-img">
              <Image src="https://i.ibb.co/sJVP8ZL/teacher1.png" alt="mentor" />
              <Image src="https://i.ibb.co/2ZGng7b/teacher2.png" alt="mentor" />
              <Image src="https://i.ibb.co/bW6yfPf/teacher4.png" alt="mentor" />
              <Image src="https://i.ibb.co/h22fpx5/teacher5.png" alt="mentor" />
            </div>
          </div>
        </div>
        <div className="tutor-row">
          <Content course={course} />
          <Content program={program} />
          <Content material={material} />
          <Content question={question} />
          <Content step={step} />
          <Content />
          <Content />
          <Content />
        </div>
      </div>
      <div className="btn-content">
        <button title="detail">
          <Image src={DeleteIco} alt="delete-ico" />
        </button>
        <button title="edit">
          <Image src={EditIco} alt="edit-ico" />
        </button>
      </div>
    </div>
  );
}
