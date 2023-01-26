import React from "react";

export default function TabCourse() {
  return (
    <div className="tab-course">
      <button className="tab active">Проходження курсу</button>
      <button className="tab">Матеріали курсу</button>
      <button className="tab">Нотатки</button>
      <button className="tab">Чат курсу</button>
    </div>
  );
}
