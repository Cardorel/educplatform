import React from "react";

export default function Platform() {
  return (
    <div className="platform">
      <div className="platform-row">
        <div className="platform-col">
          <h5>На рахунку платформи:</h5>
          <p className="price">5 $</p>
        </div>
        <div className="platform-col">
          <h5>Борг:</h5>
          <p className="debt">Вітаємо у Вас немає боргів!</p>
        </div>
        <div className="platform-col">
          <h5>Донати:</h5>
          <p>50 ₴</p>
        </div>
      </div>
      <div className="platform-btns">
        <button>
          <span>Поповнити рахунок</span>
          <span>
            Поповніть рахунок наперед та знайте, що Ви точно не матимете боргів
            у майбутньому!
          </span>
        </button>
        <button>
          <span>Вивести гроші з рахунку</span>
          <span>Не забудьте сплатити податки!</span>
        </button>
      </div>
    </div>
  );
}
