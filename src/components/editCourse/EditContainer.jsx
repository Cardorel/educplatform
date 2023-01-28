import React from "react";

export default function EditContainer({ text, children }) {
  return (
    <div>
      <h4 className="edit-title">{text}</h4>
      <div className="edit-content">{children}</div>
    </div>
  );
}
