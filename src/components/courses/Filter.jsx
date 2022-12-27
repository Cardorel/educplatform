import React from "react";
import FilterInput from "../common/FilterInput";

export default function Filter({
  searchByshortCourse,
  searchBycertificateTraining,
  searchByCertificateProgram,
  searchByCreatedAt,
  searchByStartAt,
  searchByendAt,
  handleChangeSearchByshortCourse,
  handleChangeSearchBycertificateTraining,
  handleChangeSearchByCertificateProgram,
  handleChangeSearchByCreatedAt,
  handleChangeSearchByStartAt,
  handleChangeSearchByendAt,
  handleClickClear,
  handleClickSubmit,
}) {
  return (
    <div className="filter">
      <h4 className="title">Фільтрувати:</h4>
      <div className="filter-container">
        <div className="filter-row">
          <h5 className="title">По статусу курсу</h5>
          <div className="filter-content">
            <FilterInput
              label="Короткостроковий курс"
              value={searchByshortCourse.value}
              handleChange={handleChangeSearchByshortCourse}
              isChecked={searchByshortCourse.isChecked}
            />
            <FilterInput
              label="Підвищення кваліфікації"
              value={searchBycertificateTraining.value}
              handleChange={handleChangeSearchBycertificateTraining}
              isChecked={searchBycertificateTraining.isChecked}
            />
            <FilterInput
              label="Сертифікаційна програма"
              value={searchByCertificateProgram.value}
              handleChange={handleChangeSearchByCertificateProgram}
              isChecked={searchByCertificateProgram.isChecked}
            />
          </div>
        </div>
        <div className="filter-row">
          <h5 className="title">По даті</h5>
          <div className="filter-content">
            <FilterInput
              label="реєстрації на курс"
              value={searchByCreatedAt.value}
              handleChange={handleChangeSearchByCreatedAt}
              isChecked={searchByCreatedAt.isChecked}
            />
            <FilterInput
              label="початку курсу"
              value={searchByStartAt.value}
              handleClick={handleChangeSearchByStartAt}
              isChecked={searchByStartAt.isChecked}
            />
            <FilterInput
              label="завершення курсу"
              value={searchByendAt.value}
              handleChange={handleChangeSearchByendAt}
              isChecked={searchByendAt.isChecked}
            />
          </div>
        </div>
        <div className="filter-row">
          <h5 className="title">По тривалості курсу</h5>
          <div className="filter-content">
            <FilterInput label="< 1 місяця" />
            <FilterInput label="1-3 місяці" />
            <FilterInput label="Більше 3-х місяців" />
          </div>
        </div>
        <div className="filter-row">
          <h5 className="title">По організатору проведення курсу</h5>
          <div className="filter-content">
            <FilterInput label="Google" />
            <FilterInput label="IBM" />
            <FilterInput label="AIGA" />
            <FilterInput label="IT STEP" />
            <FilterInput label="Microsoft" />
          </div>
        </div>
        <div className="filter-row">
          <h5 className="title">По категоріям інтересів</h5>
          <div className="filter-content">
            <FilterInput label="Аналіз даних" />
            <FilterInput label="Фінанси" />
            <FilterInput label="Право" />
            <FilterInput label="Соціальні науки" />
          </div>
        </div>
        <div className="filter-row">
          <h5 className="title">Сертифікат</h5>
          <div className="filter-content">
            <FilterInput label="З наданням сертифікату" />
            <FilterInput label="Без сертифікату" />
          </div>
        </div>
        <div>
          <button onClick={handleClickClear}>Скинути всі фільтри</button>
        </div>
      </div>
    </div>
  );
}
