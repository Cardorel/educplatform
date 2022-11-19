import React from "react";
import { Image } from "react-bootstrap";
import { searchData } from "../../assets/consts/data";

export default function SearchRightContent() {
  return (
    <div className="search-right-content">
      <h3>Популярні ментори:</h3>
      {searchData.map((data) => (
        <div key={data.id} className="user-content">
          <div
            className="user-search-content"
            style={{ filter: `drop-shadow(0px 2px 5px ${data.color})` }}
          >
            <Image className="image-user" src={data.url} alt={data.name} />
          </div>
          <div>
            <p>{data.name}</p>
            <div className="course-name">
              <p>Курс:</p>
              <p className="course-name-field">{data.fieldName}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
