import React from "react";

export default function MainModal({ children, handleCloseModal }) {
  return (
    <div className="modal-app" onClick={handleCloseModal}>
      <div className="modal-app-container">
        <div
          className="modal-app-content-main"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
