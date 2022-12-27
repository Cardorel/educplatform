import React from "react";
import InputText from "../common/InputText";
import SearchIcon from "../../assets/svg/search/searchIcon.svg";

export default function CoursesHeader() {
  return (
    <div className="course-header">
      <div className="course-header-left">
        <h4 className="title">Що шукаєш?</h4>
        <div className="content">
          <h5>Курси</h5>
          <h5>Роботу</h5>
        </div>
      </div>
      <InputText
        color="#FF5600"
        placeholder="Почніть вводити свій запит, а ми Вам швидко допоможемо знайти)"
        type="text"
        imageUrl={SearchIcon}
      />
    </div>
  );
}
