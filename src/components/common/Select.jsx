import React from "react";

export default function Select({ data }) {
  return (
    <select className="select-user">
      {data?.map((item, idx) => (
        <option key={idx} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
