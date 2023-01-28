import React from "react";
import { Link } from "react-router-dom";

export default function Dropdown({ setShowed }) {
  return (
    <div className="dropdown">
      <div className="dropdown-content">
        <Link to="/tutor" onClick={() => setShowed((d) => !d)}>
          <span>Cтатус</span>
        </Link>
        <Link to="/" onClick={() => setShowed((d) => !d)}>
          Про роботодавця
        </Link>
        <Link to="/wallet" onClick={() => setShowed((d) => !d)}>
          Гаманець
        </Link>
        <Link to="/community" onClick={() => setShowed((d) => !d)}>
          Відгуки
        </Link>
        <Link to="/contract" onClick={() => setShowed((d) => !d)}>
          Договір
        </Link>
        <Link to="/help" onClick={() => setShowed((d) => !d)}>
          Поширені питання
        </Link>
        <Link to="/account" onClick={() => setShowed((d) => !d)}>
          Налаштування профілю
        </Link>
      </div>
      <button className="btn-feed">Залишити відгук</button>
    </div>
  );
}
