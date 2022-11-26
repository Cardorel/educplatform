import React from "react";
import { Image, Row } from "react-bootstrap";
import { headerData } from "../../assets/consts/data";
import PlusIcon from "../../assets/svg/plusIconRose.svg";
import "./aboutHeader.scss";
import Button from "../common/Button";

export default function AboutHeader() {
  const { title, abouts } = headerData;
  return (
    <Row className="header header-about-container">
      <h3 className="header-title">{title}</h3>
      <div className="header-about">
        <div className="header-about-left">
          <ul>
            {abouts &&
              abouts.map(({ id, title, subTitle }) => (
                <li key={id}>
                  <Image src={PlusIcon} alt="plus-icon" className="plus-icon" />
                  <p>
                    <span className="header-about-left-title">{title}</span>
                    <span className="header-about-left-text">{subTitle}</span>
                  </p>
                </li>
              ))}
          </ul>
          <Button
            text="Спробуйте безкоштовний 30-денний пробний період"
            padding="33px 91px"
          />
        </div>
        <div className="header-about-right">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/education%2Fimage%2045.png?alt=media&token=f4ce7753-f4fc-409c-9562-e416beeb8be7"
            alt="image-header"
          />
        </div>
      </div>
    </Row>
  );
}
