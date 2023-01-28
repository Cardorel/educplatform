import React, { useState } from "react";
import { colors } from "../../assets/consts/data";
import Select from "../common/Select";

export default function Setting({
  setColor,
  language,
  handleLanguageOnChange,
  category,
  handleCategoryOnChange,
}) {
  const [colorsData, setColorsData] = useState(colors);
  const handleColorClick = (id) => {
    setColorsData((c) =>
      c.map((i) => {
        if (i.id === id) {
          setColor(i.color);
          return {
            ...i,
            isActive: true,
          };
        } else {
          return {
            ...i,
            isActive: false,
          };
        }
      })
    );
  };
  return (
    <div className="setting">
      <h4>Налаштування</h4>
      <div className="setting-row">
        <p>Оберіть колір для Вашого курсу</p>
        <div className="colors">
          {colorsData?.map(({ id, color, isActive }) => (
            <button
              onClick={() => handleColorClick(id)}
              className="color"
              key={id}
              style={{ background: color }}
            >
              {isActive && (
                <svg
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.761719 12.9114C0.771436 12.5065 0.904328 12.1141 1.14269 11.7866C1.64962 11.0755 2.31334 10.6036 3.19855 10.5015C3.73784 10.4395 4.20009 10.6017 4.56142 11.0185C5.94355 12.6148 7.32401 14.2125 8.7028 15.8117C8.82299 15.9515 8.87769 15.9523 8.99749 15.8117C13.1904 10.8255 17.3866 5.84193 21.5861 0.860923C21.8558 0.538503 22.1886 0.330874 22.6212 0.372477C23.4101 0.449519 23.8188 1.23843 23.4155 1.92487C23.13 2.411 22.8061 2.87518 22.4968 3.34745L11.9493 19.4503C11.573 20.0247 11.2017 20.6021 10.8195 21.1726C10.5948 21.5113 10.2942 21.7931 9.94164 21.9954C9.16005 22.4434 8.28523 22.2936 7.5857 21.5621C6.95973 20.9072 6.4085 20.1876 5.82645 19.4954C4.25993 17.6341 2.69726 15.7701 1.13845 13.9033C0.901153 13.6267 0.767907 13.2758 0.761719 12.9114Z"
                    fill="#EDEDED"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="setting-row">
        <p>Мова курсу</p>
        <Select
          selectValue={language}
          handleChangeSelect={handleLanguageOnChange}
          data={["Українська", "французька", "англійська"]}
        />
      </div>
      <div className="setting-row">
        <p>Категорія курсу</p>
        <Select
          selectValue={category}
          handleChangeSelect={handleCategoryOnChange}
          data={[
            "Курси підвищення кваліфікації",
            "Професійна сертифікація",
            "англійська",
          ]}
        />
      </div>
    </div>
  );
}
