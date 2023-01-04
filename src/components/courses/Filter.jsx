import React from "react";
import InputCheckBox from "../common/InputCheckBox";

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
      <div className="filter-row">
        <h4 className="title">Фільтрувати:</h4>
        <div className="filter-container">
          <div className="filter-row">
            <h5 className="title">По статусу курсу</h5>
            <div className="filter-content">
              <InputCheckBox
                labelText="Короткостроковий курс"
                handleChange={handleChangeSearchByshortCourse}
                isChecked={searchByshortCourse}
              />
              <InputCheckBox
                labelText="Підвищення кваліфікації"
                handleChange={handleChangeSearchBycertificateTraining}
                isChecked={searchBycertificateTraining}
              />
              <InputCheckBox
                labelText="Сертифікаційна програма"
                value={searchByCertificateProgram.value}
                handleChange={handleChangeSearchByCertificateProgram}
                isChecked={searchByCertificateProgram}
              />
            </div>
          </div>
          <div className="filter-row">
            <h5 className="title">По даті</h5>
            <div className="filter-content">
              <InputCheckBox labelText="реєстрації на курс" />
              <InputCheckBox labelText="початку курсу" />
              <InputCheckBox labelText="завершення курсу" />
            </div>
          </div>
          <div className="filter-row">
            <h5 className="title">По тривалості курсу</h5>
            <div className="filter-content">
              <InputCheckBox labelText="< 1 місяця" />
              <InputCheckBox labelText="1-3 місяці" />
              <InputCheckBox labelText="Більше 3-х місяців" />
            </div>
          </div>
          <div className="filter-row">
            <h5 className="title">По організатору проведення курсу</h5>
            <div className="filter-content">
              <InputCheckBox labelText="Google" />
              <InputCheckBox labelText="IBM" />
              <InputCheckBox labelText="AIGA" />
              <InputCheckBox labelText="IT STEP" />
              <InputCheckBox labelText="Microsoft" />
            </div>
          </div>
          <div className="filter-row">
            <h5 className="title">По категоріям інтересів</h5>
            <div className="filter-content">
              <InputCheckBox labelText="Аналіз даних" />
              <InputCheckBox labelText="Фінанси" />
              <InputCheckBox labelText="Право" />
              <InputCheckBox labelText="Соціальні науки" />
            </div>
          </div>
          <div className="filter-row">
            <h5 className="title">Сертифікат</h5>
            <div className="filter-content">
              <InputCheckBox labelText="З наданням сертифікату" />
              <InputCheckBox labelText="Без сертифікату" />
            </div>
          </div>
          <button className="btn-clear" onClick={handleClickClear}>
            Скинути всі фільтри
          </button>
        </div>
      </div>
    </div>
  );
}
