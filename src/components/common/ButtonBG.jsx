import React from "react";

export default function ButtonBG({ text, isActive, id, handleClick }) {
  return (
    <button
      onClick={() => handleClick(id)}
      className={`bg-btn ${isActive ? "active" : ""}`}
    >
      {text}
    </button>
  );
}
