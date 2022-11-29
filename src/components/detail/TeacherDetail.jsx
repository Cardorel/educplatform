import React from "react";
import { Image } from "react-bootstrap";

export default function TeacherDetail({ like, register, users }) {
  return (
    <div className="teacher-container">
      <div className="teacher-content">
        <h6 className="teacher-user">КОРИСТУВАЧІ</h6>
        <div className="teacher-image-row">
          {users?.map(({ id, teacherUrl }) => (
            <div key={id} className="teacher-image-col">
              <Image src={teacherUrl} alt={`image-${id}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="teacher-paras">
        <div className="teacher-para">
          <p>Цей курс подобається:</p>
          <p className="paragraph-with-color">{like} користувачам</p>
        </div>
        <div className="teacher-para">
          <p>На курс зареєструвалися:</p>
          <p className="paragraph-with-color">{register} користувачі</p>
        </div>
      </div>
    </div>
  );
}
