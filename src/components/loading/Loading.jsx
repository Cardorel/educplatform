import React from "react";
import Logo from "../logo/Logo";
import "./loading.scss";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="logo-content">
        <Logo />
      </div>
      <div className="loading-content">
        <p>Місце нових знань, знайомств та розвитку</p>
        <span className="loader"></span>
      </div>
    </div>
  );
}
