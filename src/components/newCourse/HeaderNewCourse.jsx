import React from "react";
import { Image } from "react-bootstrap";
import CrossWhite from "../../assets/svg/course/crossWhite.svg";
import InputContent from "../common/InputContent";

export default function HeaderNewCourse({
  textName,
  userMentor,
  handleTextNameOnChange,
  handleUserMentorOnChange,
  handleFileOnChange,
  imgHeader,
}) {
  console.log(imgHeader);
  return (
    <div className="header-new-course">
      <h4 className="header-new-course-title">Створіть новий курс:</h4>
      <div className="content">
        <label className="content-upload" htmlFor="header-img">
          <div>
            {imgHeader.length > 0 && (
              <div className="upload-img-header">
                <Image src={imgHeader} alt="cross-white" />
              </div>
            )}
            <div className="content-img">
              <Image src={CrossWhite} alt="cross-white" />
            </div>
            <p className="content-text">Додати фото</p>
            <input
              onChange={handleFileOnChange}
              id="header-img"
              type="file"
              style={{ display: "none" }}
            />
          </div>
        </label>
        <div className="content-inputs">
          <h5>Загальна інформація</h5>
          <div className="inputs">
            <InputContent
              text="Назва:"
              color="#EDEDED"
              placeholder="Назва Вашого нового курсу:"
              type="text"
              value={textName}
              handleOnChange={handleTextNameOnChange}
            />
            <InputContent
              text="Опис:"
              color="#EDEDED"
              placeholder="Додайте опис до Вашого курсу:"
              type="text"
              value={userMentor}
              handleOnChange={handleUserMentorOnChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
