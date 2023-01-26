import React from "react";
import { Image, Row } from "react-bootstrap";
import { headerData } from "../../assets/consts/data";
import PlusIcon from "../../assets/svg/plusIconRose.svg";
import "./aboutHeader.scss";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

export default function AboutHeader() {
  const { title, abouts } = headerData;
  const navigate = useNavigate();
  const handleClick = () => navigate("/joinUs");
  return (
    <Row className="header-home header-about-container">
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
            handleClick={handleClick}
          />
        </div>
      </div>
    </Row>
  );
}
