import React from "react";

export default function Select({ data, selectValue, handleChangeSelect }) {
  return (
    <div className="select_box">
      <select
        className="select-user"
        value={selectValue}
        onChange={handleChangeSelect}
      >
        {data?.map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
