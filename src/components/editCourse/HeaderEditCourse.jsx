import React from "react";
import { Image } from "react-bootstrap";
import EditIco from "../../assets/svg/course/edit.svg";
import EditSmallIco from "../../assets/svg/course/editSmall.svg";
import CrosslIco from "../../assets/svg/course/cross.svg";

export default function HeaderEditCourse() {
  return (
    <div className="header-edit-course">
      <div className="content-left">
        <Image
          src="https://images.pexels.com/photos/7552369/pexels-photo-7552369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="img"
          className="img-bg"
        />
        <label htmlFor="imgFile">
          <Image src={EditIco} alt="edit" />
          <p>Змінити фото</p>
          <input type="file" style={{ display: "none" }} id="imgFile" />
        </label>
      </div>
      <div className="content-right">
        <h4>Загальна інформація</h4>
        <div className="content-right-row">
          <input type="text" value="Якась назва курсу" className="input" />
          <Image src={EditSmallIco} alt="edit" />
        </div>
        <div className="content-right-row">
          <input type="text" value="Якийсь опис курсу" className="input" />
          <Image src={EditSmallIco} alt="edit" />
        </div>
        <div className="content-right-lektor">
          <p>Лектори:</p>
          <div className="img-content">
            <div className="mentor-img">
              <Image src="https://i.ibb.co/sJVP8ZL/teacher1.png" alt="mentor" />
              <Image src="https://i.ibb.co/2ZGng7b/teacher2.png" alt="mentor" />
              <Image src="https://i.ibb.co/bW6yfPf/teacher4.png" alt="mentor" />
              <Image src="https://i.ibb.co/h22fpx5/teacher5.png" alt="mentor" />
            </div>
            <div>
              <Image src={CrosslIco} alt="cross" className="img-cross" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
