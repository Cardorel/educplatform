import React from "react";
import FilterInput from "../common/FilterInput";

export default function Filter({
  searchByshortCourse,
  searchBycertificateTraining,
  searchByCertificateProgram,
  handleChangeSearchByshortCourse,
  handleChangeSearchBycertificateTraining,
  handleChangeSearchByCertificateProgram,
  handleClickClear,
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
              handleChange={handleChangeSearchByshortCourse}
              isChecked={searchByshortCourse}
            />
            <FilterInput
              label="Підвищення кваліфікації"
              handleChange={handleChangeSearchBycertificateTraining}
              isChecked={searchBycertificateTraining}
            />
            <FilterInput
              label="Сертифікаційна програма"
              value={searchByCertificateProgram.value}
              handleChange={handleChangeSearchByCertificateProgram}
              isChecked={searchByCertificateProgram}
            />
          </div>
        </div>
        <div className="filter-row">
          <h5 className="title">По даті</h5>
          <div className="filter-content">
            <FilterInput label="реєстрації на курс" />
            <FilterInput label="початку курсу" />
            <FilterInput label="завершення курсу" />
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
        <button className="btn-clear" onClick={handleClickClear}>
          Скинути всі фільтри
        </button>
      </div>
    </div>
  );
}
