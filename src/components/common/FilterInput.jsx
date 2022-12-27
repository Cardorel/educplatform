import React from "react";

export default function FilterInput({ label, isChecked, value, handleChange }) {
  return (
    <label className="label-input filter-input">
      <input
        type="checkbox"
        checked={isChecked}
        value={value}
        onChange={handleChange}
      />
      <span>{label}</span>
    </label>
  );
}
