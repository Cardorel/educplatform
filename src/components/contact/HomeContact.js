import React from "react";
import FrequentlyQuestion from "./FrequentlyQuestion";
import Info from "./Info";
import "./homeContact.scss";

export default function HomeContact() {
  return (
    <div className="home-contact-container">
      <h1 className="home-contact-title">Все ще не отримали відповіді на всі питання?</h1>
      <div className="home-contact">
        <FrequentlyQuestion />
        <Info />
      </div>
    </div>
  );
}
