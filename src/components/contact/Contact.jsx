import React from "react";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact-container">
      <ContactLeft />
      <ContactRight />
    </div>
  );
}
