import React from "react";

export default function MiddleKnowledge({ data }) {
  const { title, count, text } = data;
  return (
    <div className="knowledge-middle">
      <p className="knowledge-middle-text">{title}</p>
      <p className="knowledge-middle-count">{count}+</p>
      <p className="knowledge-middle-text">{text}</p>
    </div>
  );
}
