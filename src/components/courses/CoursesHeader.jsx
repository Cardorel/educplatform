import React from "react";
import InputText from "../common/InputText";
import SearchIcon from "../../assets/svg/search/searchIcon.svg";

export default function CoursesHeader({
  title1 = "Що шукаєш?",
  title2 = "Курси",
  title3 = "Роботу",
}) {
  return (
    <div className="course-header">
      <div className="course-header-left">
        <h4 className="title">{title1}</h4>
        <div className="content">
          <h5 className="active">{title2}</h5>
          <h5>{title3}</h5>
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
